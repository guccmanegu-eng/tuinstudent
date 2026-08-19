import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/tuin/Navbar";
import { Hero } from "@/components/tuin/Hero";
import { BookingWidget } from "@/components/tuin/BookingWidget";
import { Services } from "@/components/tuin/Services";
import { HowItWorks } from "@/components/tuin/HowItWorks";
import { Pricing } from "@/components/tuin/Pricing";
import { PhotoEstimate } from "@/components/tuin/PhotoEstimate";
import { Trust } from "@/components/tuin/Trust";
import { Reviews } from "@/components/tuin/Reviews";
import { Recurring } from "@/components/tuin/Recurring";
import { ServiceArea } from "@/components/tuin/ServiceArea";
import { Students } from "@/components/tuin/Students";
import { Faq } from "@/components/tuin/Faq";
import { FinalCta } from "@/components/tuin/FinalCta";
import { Footer } from "@/components/tuin/Footer";

const TITLE = "Tuinstudent aan huis — tuinonderhoud vanaf € 31,50 p/u";
const DESCRIPTION =
  "Laat je tuin onderhouden door gemotiveerde studenten. Heggen snoeien, gras mazen, tuin opruimen of aanleggen. Vaste uurprijs, eigen gereedschap, in heel Nederland.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Tuinstudent aan huis",
          description: DESCRIPTION,
          areaServed: "Nederland",
          telephone: "+31621581844",
          email: "info@tuinstudentaanhuis.nl",
          priceRange: "€€",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <BookingWidget />
        <Services />
        <HowItWorks />
        <Pricing />
        <PhotoEstimate />
        <Trust />
        <Reviews />
        <Recurring />
        <ServiceArea />
        <Students />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
