export type Member = { name: string; roles: string[]; bio?: string };

export function Team({ members }: { members: Member[] }) {
  return (
    <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-6">
      {members.map(({ name, roles, bio }) => (
        <li key={name}>
          <div className="placeholder mb-4 aspect-square">Foto</div>
          <strong className="text-[1.2rem] font-extrabold">{name}</strong>
          {roles.map((role) => (
            <span
              key={role}
              className="mt-1 block text-[0.9rem] font-semibold text-gold"
            >
              {role}
            </span>
          ))}
          {bio && <p className="mt-3 leading-[1.55] text-muted">{bio}</p>}
        </li>
      ))}
    </ul>
  );
}
