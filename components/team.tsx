import Image, { type StaticImageData } from "next/image";
import { type Specialist, type SpecialistId, specialists } from "@/lib/company";
import alexandre from "@/public/img/alexandre.webp";
import daniel from "@/public/img/daniel.webp";
import david from "@/public/img/david.webp";
import sandy from "@/public/img/sandy.webp";

/** Fotos dos especialistas; quem não tem foto mostra o placeholder. */
const photos: Partial<Record<SpecialistId, StaticImageData>> = {
  david,
  alexandre,
  sandy,
  daniel,
};

export function Team({ members }: { members: SpecialistId[] }) {
  return (
    <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-6">
      {members.map((id) => {
        const { name, roles, bio }: Specialist = specialists[id];
        const photo = photos[id];
        return (
          <li key={name}>
            {photo ? (
              <Image
                className="mb-4 aspect-square h-auto w-full bg-white object-contain object-bottom px-6 pt-6 shadow-sm"
                src={photo}
                alt={name}
              />
            ) : (
              <div className="placeholder mb-4 aspect-square">Foto</div>
            )}
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
