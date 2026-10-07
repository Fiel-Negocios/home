import type { ReactNode } from "react";

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="mt-8">
      {items.map(({ q, a }) => (
        <details key={q} className="group border-t border-line last:border-b">
          <summary className="flex cursor-pointer list-none justify-between gap-4 py-5 text-[1.1rem] font-bold after:text-2xl after:leading-none after:text-gold after:transition-[rotate] after:duration-200 after:content-['+'] group-open:after:rotate-45 [&::-webkit-details-marker]:hidden">
            {q}
          </summary>
          <div className="max-w-3xl pb-5 leading-relaxed text-muted">{a}</div>
        </details>
      ))}
    </div>
  );
}
