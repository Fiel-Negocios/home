export function Cards({
  items,
}: {
  items: { title: string; text?: string }[];
}) {
  return (
    <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
      {items.map(({ title, text }) => (
        <li
          key={title}
          className="rounded-(--radius) border border-line bg-white p-6"
        >
          <strong className="block text-[1.1rem] leading-[1.3] font-bold">
            {title}
          </strong>
          {text && <p className="mt-2 leading-[1.55] text-muted">{text}</p>}
        </li>
      ))}
    </ul>
  );
}
