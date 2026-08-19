import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import garden from "@/assets/recurring-garden.jpg";
import { Reveal } from "./Reveal";
import { demoToast } from "./demo";
import { cn } from "@/lib/utils";

const OPTIONS = ["Elke week", "Elke 2 weken", "Maandelijks", "Op afspraak"];

export function Recurring() {
  const [active, setActive] = useState("Elke 2 weken");

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] shadow-lift">
        <img
          src={garden}
          alt="Verzorgde Nederlandse tuin in de avondzon"
          loading="lazy"
          width={1400}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/75" aria-hidden="true" />
        <div className="relative max-w-2xl p-8 sm:p-14 lg:p-16">
          <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-5xl">
            Nooit meer nadenken over je tuin
          </h2>
          <p className="mt-5 leading-relaxed text-primary-foreground/80 sm:text-lg">
            "Wil je dat je tuin er het hele seizoen netjes bij ligt? Plan regelmatig onderhoud op een
            moment dat jou uitkomt."
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {OPTIONS.map((o) => (
              <button
                key={o}
                onClick={() => setActive(o)}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200",
                  active === o
                    ? "border-leaf bg-leaf text-forest-deep"
                    : "border-primary-foreground/25 text-primary-foreground hover:bg-background/15",
                )}
              >
                {o}
              </button>
            ))}
          </div>

          <Button
            variant="cta"
            size="xl"
            className="mt-9"
            onClick={() =>
              demoToast("Regelmatig onderhoud aangevraagd", `Gekozen ritme: ${active} — demo-preview.`)
            }
          >
            Regelmatig onderhoud aanvragen <ArrowRight />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
