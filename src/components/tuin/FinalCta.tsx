import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { CONTACT, scrollToId, whatsappDemo } from "./demo";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
      <Reveal className="rounded-[2.5rem] bg-leaf-soft px-6 py-14 text-center shadow-soft sm:px-14 sm:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-forest sm:text-5xl">
          Klaar voor een tuin waar je weer trots op bent?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-forest/75 sm:text-lg">
          Plan je tuinonderhoud in twee minuten. Je hoort binnen één werkdag wanneer je Tuinstudent
          langskomt.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button variant="cta" size="xl" onClick={() => scrollToId("plan")}>
            Plan tuinonderhoud <ArrowRight />
          </Button>
          <Button variant="outline" size="xl" onClick={whatsappDemo}>
            <MessageCircle /> WhatsApp ons
          </Button>
        </div>
        <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest">
          <Phone className="h-4 w-4" /> Of bel {CONTACT.phone}
        </p>
      </Reveal>
    </section>
  );
}
