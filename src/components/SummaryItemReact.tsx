import React from "react";
import { BASE_PATH } from "@/config";

export default function SummaryItemReact({ objeto }: { objeto: any }) {
  return (
    <a href={`${BASE_PATH}${objeto.slug}`}>
      <article
        className="group relative h-full overflow-hidden rounded-xl border border-light/50 shadow-inner shadow-white/10 backdrop-blur-md"
      >
        <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-gradient-to-b from-transparent from-30% via-dark/80 to-darkblue/90"></div>

        <img
          className="transition-scale absolute bottom-0 left-0 top-0 -z-10 h-full object-cover opacity-90 duration-1000 ease-in-out group-hover:scale-110 md:w-full"
          src={`${BASE_PATH}${objeto.portada}`}
          alt={objeto.titulo}
        />

        <div className="relative z-20 flex h-full select-none flex-col justify-end gap-1 p-4 text-lg md:p-6">
          <div className="rounded-tr-2xl bg-darkblue/[.5] px-3 py-2 backdrop-blur-md">
            <h3 className="mb-4 text-balance border-b-2 bg-gradient-to-r from-blue to-lightblue bg-clip-text pb-1 text-3xl font-semibold uppercase text-transparent">
              {objeto.titulo}
            </h3>
          </div>
        </div>
      </article>
    </a>
  );
}
