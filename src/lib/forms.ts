import { isValidEmail } from "./validate.ts";

export const ALLOWED_FORMS = ["membership", "contact", "partner", "volunteer", "booking"] as const;
export type FormName = (typeof ALLOWED_FORMS)[number];

export const MAX_BODY = 24_000;
export const MAX_FIELD = 2000;
export const MAX_FIELDS = 24;

export type Submission = {
  form: FormName;
  receivedAt: string;
  ip: string;
  data: Record<string, string>;
};

export function isFormName(value: string): value is FormName {
  return (ALLOWED_FORMS as readonly string[]).includes(value);
}

export function clean(value: unknown, max = MAX_FIELD) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Strip control characters that would corrupt logs, emails and spreadsheets. */
export function sanitise(value: string) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}

export type ParseResult =
  | { ok: true; submission: Submission; honeypot: boolean }
  | { ok: false; status: number; error: string };

/**
 * Validates and normalises a raw /api/forms request body.
 * Shared by the route handler and the test suite so both agree on behaviour.
 */
export function parseSubmission(raw: string, ip: string): ParseResult {
  if (raw.length > MAX_BODY) {
    return { ok: false, status: 413, error: "Payload too large." };
  }

  let body: { form?: unknown; data?: unknown };
  try {
    body = JSON.parse(raw);
  } catch {
    return { ok: false, status: 400, error: "Invalid request." };
  }

  if (!body || typeof body !== "object") {
    return { ok: false, status: 400, error: "Invalid request." };
  }

  const form = clean(body.form, 40);
  if (!isFormName(form)) {
    return { ok: false, status: 400, error: "Unknown form." };
  }

  const data =
    body.data && typeof body.data === "object" && !Array.isArray(body.data)
      ? (body.data as Record<string, unknown>)
      : {};

  const entries = Object.entries(data).slice(0, MAX_FIELDS);
  const payload = Object.fromEntries(
    entries
      .filter(([k]) => k !== "company")
      .map(([k, v]) => [clean(k, 40), sanitise(clean(v))])
      .filter(([k, v]) => k.length > 0 && v.length > 0),
  );

  const submission: Submission = {
    form,
    receivedAt: new Date().toISOString(),
    ip,
    data: payload,
  };

  // Honeypot: bots fill the hidden "company" field. Accept silently, never deliver.
  if (clean(data.company)) {
    return { ok: true, submission, honeypot: true };
  }

  if (!payload.fullName || payload.fullName.length < 2) {
    return { ok: false, status: 422, error: "Please provide your full name." };
  }
  if (!isValidEmail(payload.email ?? "")) {
    return { ok: false, status: 422, error: "Please provide a valid email address." };
  }

  return { ok: true, submission, honeypot: false };
}

export function clientIp(headers: Headers) {
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "unknown"
  );
}

/** Plain-text rendering used for email delivery. */
export function toPlainText(submission: Submission) {
  const lines = [
    `New ${submission.form} submission`,
    `Received: ${submission.receivedAt}`,
    `IP: ${submission.ip}`,
    "",
    ...Object.entries(submission.data).map(([k, v]) => `${k}: ${v}`),
  ];
  return lines.join("\n");
}
