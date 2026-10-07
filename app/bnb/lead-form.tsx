"use client";

import type { SubmitEvent } from "react";
import { SubmitButton } from "@/components/button";
import { bnbLeadFields, bnbLeadLink } from "./lead";

const inputClass =
  "rounded-(--radius) border border-line bg-white px-4 py-[0.8rem] font-normal text-navy";
const labelClass = "flex flex-col gap-[0.4rem] text-[0.95rem] font-semibold";

export function LeadForm() {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(bnbLeadLink(new FormData(event.currentTarget)), "_blank");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-x-6 gap-y-4 text-left sm:grid-cols-2"
    >
      {bnbLeadFields.map((field) => (
        <label
          key={field.name}
          htmlFor={field.name}
          className={field.wide ? `${labelClass} col-span-full` : labelClass}
        >
          {field.label}
          {field.multiline ? (
            <textarea
              className={`${inputClass} resize-y`}
              id={field.name}
              name={field.name}
              rows={4}
              required
            />
          ) : (
            <input
              className={inputClass}
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required
            />
          )}
        </label>
      ))}
      <label className="col-span-full flex items-start gap-[0.6rem] text-[0.95rem] text-muted">
        <input className="mt-[0.2rem] accent-gold" type="checkbox" required />
        Concordo em fornecer meus dados para receber conteúdos e ofertas por
        e-mail ou outros meios.
      </label>
      <SubmitButton className="col-span-full justify-self-center">
        Enviar agora mesmo
      </SubmitButton>
    </form>
  );
}
