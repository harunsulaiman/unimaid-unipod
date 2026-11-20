"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type Field =
  | { kind: "text" | "email" | "tel" | "textarea"; name: string; label: string; placeholder?: string; required?: boolean; wide?: boolean }
  | { kind: "select"; name: string; label: string; options: string[]; required?: boolean; wide?: boolean };

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-night-900/70 px-4 py-3 text-[0.9375rem] text-sand-50 placeholder:text-sand-400/50 transition-colors focus:border-ember-400/60 focus:bg-night-850 focus:outline-none focus:ring-2 focus:ring-ember-400/25";

export function Form({
  fields,
  submitLabel,
  successTitle,
  successBody,
  note,
  endpoint = "/api/forms",
  formName,
  className,
}: {
  fields: readonly Field[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
  note?: string;
  endpoint?: string;
  formName: string;
  className?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: formName, data: Object.fromEntries(data.entries()) }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Something went wrong.");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="glass flex min-h-[20rem] flex-col items-center justify-center gap-4 rounded-3xl p-10 text-center"
            role="status"
            aria-live="polite"
          >
            <span className="grid size-14 place-items-center rounded-full bg-chad-500/15 text-chad-300">
              <CheckCircle2 className="size-7" />
            </span>
            <h3 className="text-2xl font-semibold text-sand-50">{successTitle}</h3>
            <p className="max-w-sm text-sm leading-relaxed text-sand-300">{successBody}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-ember-300 hover:text-ember-200"
            >
              Submit another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <FormField key={field.name} field={field} formName={formName} />
              ))}
            </div>
            <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
            {status === "error" && (
              <div role="alert" className="mt-6 flex items-start gap-3 rounded-xl border border-red-500/25 bg-red-500/10 p-4 text-sm text-red-200">
                <AlertCircle className="mt-0.5 size-4 shrink-0" />
                <p>{error}</p>
              </div>
            )}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-ember-300 via-ember-400 to-ember-600 px-7 text-sm font-semibold text-night-950 shadow-[0_10px_30px_-12px_rgba(249,122,10,0.85)] transition hover:brightness-110 disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    {submitLabel}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
        {note && (
          <p className="mt-5 text-xs leading-relaxed text-sand-400">{note}</p>
        )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}



function FormField({ field, formName }: { field: Field; formName: string }) {
  const id = `${formName}-${field.name}`;
  return (
    <div className={cn("flex flex-col gap-2", field.wide && "sm:col-span-2")}>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-[0.14em] text-sand-300/80">
        {field.label}
        {field.required && <span className="ml-1 text-ember-400" aria-hidden="true">*</span>}
      </label>
      {field.kind === "select" ? (
        <select
          id={id}
          name={field.name}
          required={field.required}
          defaultValue=""
          className={cn(inputClass, "appearance-none bg-[right_1rem_center] bg-no-repeat pr-10")}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23cfbea3' stroke-width='1.6'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled>
            Select…
          </option>
          {field.options.map((opt) => (
            <option key={opt} value={opt} className="bg-night-900 text-sand-50">
              {opt}
            </option>
          ))}
        </select>
      ) : field.kind === "textarea" ? (
        <textarea id={id} name={field.name} required={field.required} placeholder={field.placeholder} rows={5} className={cn(inputClass, "resize-y")} />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.kind}
          required={field.required}
          placeholder={field.placeholder}
          autoComplete={field.name === "email" ? "email" : field.name === "phone" ? "tel" : field.name === "fullName" ? "name" : "off"}
          className={inputClass}
        />
      )}
    </div>
  );


}
