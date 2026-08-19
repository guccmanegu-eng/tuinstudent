import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    q: "Wat kost tuinonderhoud door een Tuinstudent?",
    a: "Je betaalt een vast uurtarief vanaf € 31,50 per uur, inclusief btw en gereedschap. Je weet vooraf hoeveel uur we inplannen, dus je komt nooit voor verrassingen te staan.",
  },
  {
    q: "Nemen jullie eigen gereedschap mee?",
    a: "Ja. Onze studenten komen met professioneel gereedschap: heggenschaar, grasmaaier, bosmaaier en handgereedschap. Alleen bij grotere aanlegklussen bespreken we materialen apart.",
  },
  {
    q: "Voeren jullie het tuinafval af?",
    a: "Dat kan. We nemen het groenafval mee tegen een vaste vergoeding per aanhanger, of we laten het netjes gebundeld achter zodat je het zelf kunt wegbrengen.",
  },
  {
    q: "Hoe snel kunnen jullie komen?",
    a: "In de meeste regio's plannen we binnen 3 tot 7 dagen een eerste bezoek. In het hoogseizoen (april tot juli) kan dat iets langer duren.",
  },
  {
    q: "Zijn jullie studenten verzekerd?",
    a: "Alle klussen vallen onder onze bedrijfsaansprakelijkheidsverzekering. Onze studenten zijn geselecteerd, ingewerkt en worden begeleid door een vast aanspreekpunt.",
  },
  {
    q: "Kan ik een vast onderhoudsritme afspreken?",
    a: "Zeker. Kies wekelijks, tweewekelijks of maandelijks onderhoud. Je krijgt zoveel mogelijk dezelfde Tuinstudent, die jouw tuin dan al kent.",
  },
  {
    q: "In welke regio's werken jullie?",
    a: "We zijn actief in grote delen van Nederland, met de meeste studenten rond de universiteits- en hbo-steden. Check je postcode bij het onderdeel Werkgebied.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="text-center">
        <h2 className="text-3xl font-extrabold text-forest sm:text-5xl">Veelgestelde vragen</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Staat je vraag er niet bij? Bel of WhatsApp ons, we denken graag even mee.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <Accordion type="single" collapsible className="w-full">
          {ITEMS.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="mb-3 rounded-3xl border border-border bg-card px-6 shadow-soft"
            >
              <AccordionTrigger className="py-5 text-left text-base font-bold text-forest hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
