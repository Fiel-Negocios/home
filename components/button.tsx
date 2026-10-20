import type { ComponentProps } from "react";

/** Aparência de botão; serve também a links que não são `Button`, como o `SiteLink`. */
export const buttonClass =
  "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap rounded-(--radius) bg-gold px-6 py-3.5 font-semibold text-white transition-[filter] duration-200 hover:brightness-110";

export function Button({ className = "", ...props }: ComponentProps<"a">) {
  return <a className={`${buttonClass} ${className}`} {...props} />;
}

export function SubmitButton({
  className = "",
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type="submit"
      className={`${buttonClass} ${className}`}
      {...props}
    />
  );
}
