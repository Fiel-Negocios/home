import type { ComponentProps } from "react";

const buttonClass =
  "inline-block cursor-pointer whitespace-nowrap rounded-(--radius) bg-gold px-6 py-3.5 font-semibold text-white transition-[filter] duration-200 hover:brightness-110";

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
