import { NextResponse } from "next/server";
import { clientIp, MAX_BODY, parseSubmission, toPlainText, type Submission } from "@/lib/forms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Naive in-memory rate limiter. On serverless this is per-instance; swap for
Upstash/Redis in a multi-region deployment (see README -> "Hardening"). */
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 6;

function rateLimited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMIT;
}

async function deliverWebhook(submission: Submission) {
  const webhook = process.env.FORM_WEBHOOK_URL;
  if (!webhook) return false;
  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    });
    if (!res.ok) {
      console.error("[forms] webhook rejected", res.status, submission.form);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[forms] webhook failed", err, submission.form);
    return false;
  }
}

async function deliverEmail(submission: Submission) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.FORM_EMAIL_TO;
  if (!apiKey || !to) return false;

  const from = process.env.FORM_EMAIL_FROM ?? "UniPod Website <onboarding@resend.dev>";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()).filter(Boolean),
        reply_to: submission.data.email,
        subject: `[UniPod] ${submission.form} — ${submission.data.fullName ?? "submission"}`,
        text: toPlainText(submission),
      }),
    });
    if (!res.ok) {
      console.error("[forms] email rejected", res.status, submission.form);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[forms] email failed", err, submission.form);
    return false;
  }
}

export async function POST(req: Request) {
  const ip = clientIp(req.headers);

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again later." },
      { status: 429 },
    );
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY) {
    return NextResponse.json({ ok: false, error: "Payload too large." }, { status: 413 });
  }

  const parsed = parseSubmission(raw, ip);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: parsed.status });
  }

  const { submission, honeypot } = parsed;
  if (honeypot) return NextResponse.json({ ok: true });

  // Delivery hooks — configured via env. Never throw to the client on delivery failure;
  // log loudly instead so no submission is silently lost in the logs.
  const [emailed, webhooked] = await Promise.all([
    deliverEmail(submission),
    deliverWebhook(submission),
  ]);

  if (!emailed && !webhooked) {
    console.info("[forms] submission", JSON.stringify(submission));
  }

  return NextResponse.json({ ok: true });
}
