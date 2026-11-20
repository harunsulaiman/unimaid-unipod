const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export function isValidEmail(value: string) {
  return EMAIL_RE.test(value.trim());
}
