import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    quote:
      "Onze tuin stond behoorlijk vol onkruid. In één middag was alles netjes en de student werkte gewoon door tot het af was.",
    name: "Diana",
    city: "Venhuizen",
  },
  {
    quote:
      "Fijn contact, duidelijke prijs en een nette haag. We plannen nu elke maand een vast moment in.",
    name: "Mirella",
    city: "Hoogkarspel",
  },
  {
    quote:
      "Prettige jonge gast, dacht goed mee over wat er moest gebeuren. Scheelt ons enorm veel tijd in het weekend.",
    name: "Ed Verwoest",
    city: "Medemblik",
  },
];

function Stars() {
  return (
    <span className="flex gap-0.5 text-cta" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <h2 className="text-3xl font-extrabold text-forest sm:text-5xl">Dit zeggen onze klanten</h2>
          <div className="rounded-3xl border border-border bg-card px-6 py-4 shadow-soft">
            <p className="text-3xl font-extrabold text-forest">4,8 / 5</p>
            <p className="text-xs text-muted-foreground">93 Google reviews</p>
            <div className="mt-2">
              <Stars />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} as="article" delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <Stars />
                <blockquote className="mt-5 grow leading-relaxed text-forest">"{r.quote}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <span className="font-bold text-forest">{r.name}</span>
                  <span className="text-muted-foreground"> · {r.city}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Demo-preview: bovenstaande quotes zijn representatieve voorbeelden, geen geverifieerde
          reviews.
        </p>
      </div>
    </section>
  );
}
