import { test } from "node:test";
import assert from "node:assert/strict";
import { parseSubmission, toPlainText, clientIp, MAX_BODY } from "../src/lib/forms.ts";

const valid = JSON.stringify({
  form: "booking",
  data: { fullName: "Aisha Bukar", email: "aisha@unimaid.edu.ng", lab: "Fabrication Lab" },
});

test("accepts a valid booking submission", () => {
  const result = parseSubmission(valid, "1.2.3.4");
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.honeypot, false);
  assert.equal(result.submission.form, "booking");
  assert.equal(result.submission.data.fullName, "Aisha Bukar");
  assert.equal(result.submission.ip, "1.2.3.4");
});

test("rejects malformed JSON with 400", () => {
  const result = parseSubmission("{not json", "1.2.3.4");
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.equal(result.status, 400);
});

test("rejects unknown form names with 400", () => {
  const result = parseSubmission(JSON.stringify({ form: "admin", data: {} }), "1.2.3.4");
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.equal(result.status, 400);
});

test("rejects an invalid email with 422", () => {
  const result = parseSubmission(
    JSON.stringify({ form: "contact", data: { fullName: "A B", email: "nope" } }),
    "1.2.3.4",
  );
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.equal(result.status, 422);
});

test("rejects a missing name with 422", () => {
  const result = parseSubmission(
    JSON.stringify({ form: "contact", data: { email: "a@b.co" } }),
    "1.2.3.4",
  );
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.equal(result.status, 422);
});

test("rejects oversized payloads with 413", () => {
  const result = parseSubmission("x".repeat(MAX_BODY + 1), "1.2.3.4");
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.equal(result.status, 413);
});

test("silently accepts honeypot hits without delivering", () => {
  const result = parseSubmission(
    JSON.stringify({ form: "contact", data: { fullName: "Bot", email: "b@b.co", company: "spam" } }),
    "1.2.3.4",
  );
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.honeypot, true);
  assert.equal(result.submission.data.company, undefined);
});

test("strips control characters and empty values", () => {
  const result = parseSubmission(
    JSON.stringify({
      form: "contact",
      data: { fullName: "Ai\u0000sha", email: "a@b.co", message: "   " },
    }),
    "1.2.3.4",
  );
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.submission.data.fullName, "Aisha");
  assert.equal(result.submission.data.message, undefined);
});

test("ignores non-object data payloads", () => {
  const result = parseSubmission(JSON.stringify({ form: "contact", data: "nope" }), "1.2.3.4");
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.equal(result.status, 422);
});

test("clientIp prefers the first x-forwarded-for hop", () => {
  const headers = new Headers({ "x-forwarded-for": "9.9.9.9, 10.0.0.1", "x-real-ip": "10.0.0.2" });
  assert.equal(clientIp(headers), "9.9.9.9");
  assert.equal(clientIp(new Headers()), "unknown");
});

test("toPlainText renders every field", () => {
  const result = parseSubmission(valid, "1.2.3.4");
  assert.equal(result.ok, true);
  if (!result.ok) return;
  const text = toPlainText(result.submission);
  assert.match(text, /New booking submission/);
  assert.match(text, /fullName: Aisha Bukar/);
});
