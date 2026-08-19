import { GraduationCap, ShieldCheck, CalendarRange, HeartHandshake, BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const CARDS = [
  {
    icon: GraduationCap,
    title: "Getraind",
    text: "Onze studenten worden geselecteerd en begeleid.",
  },
  {
    icon: ShieldCheck,
    title: "Betrouwbaar",
    text: "We blijven betrokken bij de kwaliteit van het werk.",
  },
  {
    icon: CalendarRange,
    title: "Flexibel",
    text: "Plan eenmalig onderhoud of kies voor een terugkerend moment.",
  },
  {
    icon: HeartHandshake,
    title: "Persoonlijk",
    text: "Je krijgt geen anonieme klusjesdienst, maar een echte Tuinstudent.",
  },
];

export function Trust() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-extrabold text-forest sm:text-5xl">
          Jonge mensen. Professionele service.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf/15">
                <c.icon className="h-5 w-5 text-leaf" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-forest">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-4 py-2 text-sm font-semibold text-forest">
          <BadgeCheck className="h-4 w-4 text-leaf" /> SBB erkend leerbedrijf
        </span>
      </Reveal>
    </section>
  );
}
