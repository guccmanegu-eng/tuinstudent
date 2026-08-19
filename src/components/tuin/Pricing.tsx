import { ArrowRight, Car, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { scrollToId } from "./demo";

export function Pricing() {
  return (
    <section id="prijzen" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-extrabold text-forest sm:text-5xl">Eenvoudig en transparant</h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Eén helder uurtarief. Geen verrassingen achteraf.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-forest p-8 shadow-lift sm:p-12">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-leaf/25 blur-3xl"
          />
          <div className="relative">
            <p className="text-sm font-semibold tracking-wide text-leaf uppercase">Standaardtarief</p>
            <p className="mt-4 flex items-end gap-3 text-primary-foreground">
              <span className="text-6xl leading-none font-extrabold sm:text-7xl">€31,50</span>
              <span className="pb-2 text-lg font-semibold opacity-80">per uur</span>
            </p>
            <p className="mt-2 text-sm text-primary-foreground/70">Incl. BTW</p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-3 rounded-2xl bg-background/10 px-4 py-3 text-primary-foreground">
                <Car className="h-4 w-4 text-leaf" />
                <span className="text-sm font-medium">+ €10 voorrijkosten per afspraak</span>
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-background/10 px-4 py-3 text-primary-foreground">
                <Clock className="h-4 w-4 text-leaf" />
                <span className="text-sm font-medium">Minimaal 3 uur per afspraak</span>
              </li>
            </ul>

            <Button variant="cta" size="xl" className="mt-9" onClick={() => scrollToId("plan")}>
              Tuinonderhoud aanvragen <ArrowRight />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex">
          <div className="flex flex-col justify-between rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-10">
            <div>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-leaf/15">
                <Sparkles className="h-5 w-5 text-leaf" />
              </span>
              <h3 className="mt-6 text-2xl font-extrabold text-forest">
                Slimmer dan een traditionele hovenier
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                "Tuinstudent werkt met jonge, gemotiveerde tuinliefhebbers. Daardoor houden we de
                kosten laag zonder in te leveren op persoonlijke service."
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-secondary/70 p-4">
                <p className="text-2xl font-extrabold text-forest">3 uur</p>
                <p className="text-xs text-muted-foreground">minimale boeking</p>
              </div>
              <div className="rounded-2xl bg-secondary/70 p-4">
                <p className="text-2xl font-extrabold text-forest">€10</p>
                <p className="text-xs text-muted-foreground">voorrijkosten</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
