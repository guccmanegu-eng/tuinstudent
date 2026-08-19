import { Clock, Euro, Sprout, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { demoToast } from "./demo";
import student from "@/assets/hero-student.jpg";

const PERKS = [
  { icon: Euro, title: "Goed betaald", text: "Een eerlijk uurloon en snelle uitbetaling per klus." },
  { icon: Clock, title: "Flexibele uren", text: "Werk rond je lesrooster en tentamens heen." },
  { icon: Sprout, title: "Leer het vak", text: "Praktische begeleiding, groen werk in de buitenlucht." },
  { icon: Users, title: "Leuk team", text: "Studenten uit jouw regio, met een vast aanspreekpunt." },
];

export function Students() {
  return (
    <section id="studenten" className="bg-forest-deep py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-leaf">
            Werk via Tuinstudent
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-primary-foreground sm:text-5xl">
            Studeren én buiten werken
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80 sm:text-lg">
            Ben je student en werk je graag met je handen in het groen? Werk wanneer het jou uitkomt bij
            tuinen in je eigen buurt.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PERKS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-leaf/20">
                    <p.icon className="h-5 w-5 text-leaf" />
                  </span>
                  <div>
                    <h3 className="font-bold text-primary-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              variant="cta"
              size="xl"
              onClick={() =>
                demoToast("Aanmelding gestart", "In de live website open je hier het sollicitatieformulier.")
              }
            >
              Meld je aan als Tuinstudent <ArrowRight />
            </Button>
            <Button
              variant="onDark"
              size="xl"
              onClick={() => demoToast("Vragen over werken?", "Bel of WhatsApp ons — demo-preview.")}
            >
              Ik heb een vraag
            </Button>
          </div>
        </Reveal>

        <Reveal delay={140} className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-float">
            <img
              src={student}
              alt="Tuinstudent aan het werk in een Nederlandse tuin"
              loading="lazy"
              width={1200}
              height={1400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-3xl bg-card p-5 shadow-lift sm:left-10">
            <p className="text-2xl font-extrabold text-forest">120+</p>
            <p className="text-xs font-semibold text-muted-foreground">actieve tuinstudenten</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
