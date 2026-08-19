import { Star, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-student.jpg";
import { scrollToId } from "./demo";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[38rem] w-[38rem] rounded-full bg-leaf-soft/50 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <Reveal className="is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-forest shadow-soft">
            <span className="h-2 w-2 rounded-full bg-leaf" /> Tuinstudent aan huis
          </span>
          <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-extrabold text-forest sm:text-6xl lg:text-[4.2rem]">
            Je tuin verzorgd.
            <br />
            <span className="text-leaf">Jij meer tijd</span> voor jezelf.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Betrouwbare tuinstudenten aan huis voor €31,50 per uur. Van gras maaien en snoeien tot
            compleet tuinonderhoud.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="cta" size="xl" onClick={() => scrollToId("plan")}>
              Plan tuinonderhoud <ArrowRight />
            </Button>
            <Button variant="outline" size="xl" onClick={() => scrollToId("diensten")}>
              Bekijk onze diensten
            </Button>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <span className="flex gap-0.5 text-cta" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-semibold text-forest">4,8/5 uit 93 reviews</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Getrainde studenten · Flexibel gepland · Persoonlijke service
          </p>
        </Reveal>

        <Reveal className="relative is-visible" delay={120}>
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroImg}
              alt="Tuinstudent snoeit een haag in een verzorgde Nederlandse tuin"
              width={1280}
              height={1600}
              className="h-[26rem] w-full object-cover sm:h-[34rem] lg:h-[38rem]"
            />
          </div>

          <div className="absolute -bottom-5 left-2 rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-float backdrop-blur sm:left-6">
            <p className="text-2xl font-extrabold text-forest">
              Vanaf €31,50 <span className="text-sm font-semibold text-muted-foreground">/ uur</span>
            </p>
            <p className="text-xs text-muted-foreground">Incl. BTW</p>
          </div>

          <div className="absolute -top-4 right-2 space-y-1.5 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-float backdrop-blur sm:right-0">
            {["Student gematcht", "Werk gecontroleerd"].map((t) => (
              <p key={t} className="flex items-center gap-2 text-sm font-semibold text-forest">
                <Check className="h-4 w-4 text-leaf" /> {t}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
