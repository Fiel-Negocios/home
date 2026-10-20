import { Plus } from "lucide-react";
import type { ReactNode } from "react";

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="mt-8">
      {items.map(({ q, a }) => (
        <details key={q} className="group border-t border-line last:border-b">
          <summary className="flex cursor-pointer list-none justify-between gap-4 py-5 text-[1.1rem] font-bold [&::-webkit-details-marker]:hidden">
            {q}
            <Plus
              className="size-6 shrink-0 text-gold transition-[rotate] duration-200 group-open:rotate-45"
              aria-hidden
            />
          </summary>
          <div className="pb-5 leading-relaxed text-muted">{a}</div>
        </details>
      ))}
    </div>
  );
}
