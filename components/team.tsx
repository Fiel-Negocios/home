import {
  type Specialist,
  type SpecialistId,
  specialists,
} from "@/lib/specialists";

export function Team({ members }: { members: SpecialistId[] }) {
  return (
    <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-6">
      {members.map((id) => {
        const { name, roles, bio }: Specialist = specialists[id];
        return (
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
        );
      })}
    </ul>
  );
}
