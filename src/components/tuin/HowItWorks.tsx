import { Reveal } from "./Reveal";

const STEPS = [
  {
    title: "Vertel ons wat je nodig hebt",
    text: "Beschrijf je klus of upload foto's van je tuin.",
  },
  {
    title: "Wij zoeken een geschikte Tuinstudent",
    text: "We koppelen je aan iemand die past bij de klus.",
  },
  {
    title: "De Tuinstudent komt bij je langs",
    text: "Op het afgesproken moment wordt je tuin aangepakt.",
  },
  {
    title: "Wij vragen hoe het ging",
    text: "We blijven betrokken en bewaken de kwaliteit.",
  },
];

export function HowItWorks() {
  return (
    <section id="hoe-werkt-het" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-forest sm:text-5xl">Zo makkelijk werkt het</h2>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute top-8 right-10 left-10 hidden border-t-2 border-dashed border-leaf/40 lg:block"
          />
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 110}>
                <div className="flex gap-4 lg:block">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-leaf/30 bg-background text-xl font-extrabold text-forest shadow-soft">
                    {i + 1}
                  </span>
                  <div className="lg:mt-6">
                    <h3 className="text-lg font-bold text-forest">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
