import { useState, type FormEvent } from "react";
import { MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./Reveal";

const DOTS = [
  { x: 34, y: 30, label: "Groningen" },
  { x: 22, y: 44, label: "Zwolle" },
  { x: 38, y: 55, label: "Apeldoorn" },
  { x: 16, y: 58, label: "Amsterdam" },
  { x: 20, y: 68, label: "Utrecht" },
  { x: 12, y: 74, label: "Den Haag" },
  { x: 18, y: 80, label: "Rotterdam" },
  { x: 30, y: 88, label: "Eindhoven" },
];

export function ServiceArea() {
  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const check = (e: FormEvent) => {
    e.preventDefault();
    setResult(
      `Goed nieuws — rond ${postcode.toUpperCase() || "jouw postcode"} zijn Tuinstudenten actief. Demo-resultaat.`,
    );
  };

  return (
    <section className="bg-sand/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-forest sm:text-5xl">
            Een Tuinstudent bij jou in de buurt
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Actief in steeds meer plaatsen in Nederland.
          </p>

          <form onSubmit={check} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Input
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="Vul je postcode in"
              className="h-13 rounded-full px-5 sm:max-w-xs"
              aria-label="Postcode"
            />
            <Button type="submit" variant="cta" size="lg">
              Bekijk beschikbaarheid
            </Button>
          </form>

          {result && (
            <p className="mt-5 inline-flex items-start gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-forest shadow-soft">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf" /> {result}
            </p>
          )}
        </Reveal>

        <Reveal delay={120} className="flex justify-center">
          <div className="relative w-full max-w-sm rounded-[2rem] border border-border bg-card p-8 shadow-lift">
            <svg viewBox="0 0 50 100" className="mx-auto h-80 w-auto" role="img" aria-label="Stilistische kaart van Nederland met plaatsen waar Tuinstudent actief is">
              <path
                d="M14 22 L26 18 L34 24 L40 34 L44 48 L40 62 L42 74 L34 92 L22 96 L12 88 L8 74 L10 60 L6 48 L10 34 Z"
                className="fill-leaf/15 stroke-forest/40"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              {DOTS.map((d) => (
                <g key={d.label}>
                  <circle cx={d.x} cy={d.y} r="2.6" className="fill-leaf/25" />
                  <circle cx={d.x} cy={d.y} r="1.2" className="fill-forest" />
                </g>
              ))}
            </svg>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-leaf" /> Indicatieve weergave — demo-preview
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
