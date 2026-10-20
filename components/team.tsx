import Image, { type StaticImageData } from "next/image";
import {
  type Specialist,
  type SpecialistId,
  specialists,
  specialistsOf,
} from "@/lib/company";
import type { Service } from "@/lib/sites";
import alexandre from "@/public/img/alexandre.webp";
import daniel from "@/public/img/daniel.webp";
import david from "@/public/img/david.webp";
import sandy from "@/public/img/sandy.webp";

// as fotos ficam aqui, não em lib/company: o middleware importa lib/company
// (via lib/sites) e não pode carregar imagens
const photos: Record<SpecialistId, StaticImageData> = {
  david,
  alexandre,
  sandy,
  daniel,
};

/** Os especialistas de um serviço, na ordem do registro. */
export function Team({
  service,
  mobileFirst,
}: {
  service: Service;
  /** Quem aparece primeiro no celular, onde a equipe vira uma coluna só. */
  mobileFirst?: SpecialistId;
}) {
  return (
    <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-6 max-sm:gap-y-10">
      {specialistsOf(service).map((id) => {
        const { name, roles, bio }: Specialist = specialists[id];
        return (
          <li
            key={name}
            className={id === mobileFirst ? "max-sm:order-first" : ""}
          >
            {/* no celular a foto tem tamanho limitado; a partir do sm, ocupa o card */}
            <Image
              className="mx-auto mb-4 aspect-square h-auto w-56 bg-white object-contain object-bottom px-4 pt-4 shadow-sm sm:w-full sm:px-6 sm:pt-6"
              src={photos[id]}
              alt={name}
            />
            <strong className="block text-2xl/tight font-extrabold">
              {name}
            </strong>
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
