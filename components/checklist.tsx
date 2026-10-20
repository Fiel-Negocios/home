export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-[0.9rem]">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-7 text-[1.05rem] leading-normal before:absolute before:top-[0.45em] before:left-0 before:aspect-square before:w-[0.7rem] before:rounded-full before:bg-gold"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
