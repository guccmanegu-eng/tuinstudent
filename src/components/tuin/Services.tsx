import { ArrowRight } from "lucide-react";
import onderhoud from "@/assets/service-onderhoud.jpg";
import snoeien from "@/assets/service-snoeien.jpg";
import opruimen from "@/assets/service-opruimen.jpg";
import aanleg from "@/assets/service-aanleg.jpg";
import { Reveal } from "./Reveal";
import { scrollToId } from "./demo";

const SERVICES = [
  {
    title: "Tuinonderhoud",
    text: "Gras maaien, onkruid verwijderen, borders onderhouden en algemeen tuinonderhoud.",
    img: onderhoud,
    alt: "Grasmaaier maait een strak gemaaid gazon",
  },
  {
    title: "Snoeien & hagen",
    text: "Bomen, struiken en hagen netjes gesnoeid.",
    img: snoeien,
    alt: "Handen snoeien een groene haag met een snoeischaar",
  },
  {
    title: "Tuin opruimen",
    text: "Bladeren, groenafval en achterstallig onderhoud.",
    img: opruimen,
    alt: "Tuinzak met bladeren en groenafval in een tuin",
  },
  {
    title: "Tuinaanleg",
    text: "Voor grotere projecten zoals bestrating, gras, schuttingen en beplanting.",
    img: aanleg,
    alt: "Nieuw aangelegde tuin met bestrating, gras en schutting",
  },
];

export function Services() {
  return (
    <section id="diensten" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-extrabold text-forest sm:text-5xl">
          Alles voor een verzorgde tuin
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Van een eenmalige klus tot regelmatig onderhoud.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} as="article" delay={i * 90}>
            <button
              onClick={() => scrollToId("plan")}
              className="group h-full w-full cursor-pointer overflow-hidden rounded-3xl border border-border bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-forest">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf">
                  Meer informatie
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
