import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { scrollToId, whatsappDemo } from "./demo";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Diensten", id: "diensten" },
  { label: "Hoe werkt het?", id: "hoe-werkt-het" },
  { label: "Prijzen", id: "prijzen" },
  { label: "Werk via Tuinstudent", id: "studenten" },
  { label: "Reviews", id: "reviews" },
  { label: "Veelgestelde vragen", id: "faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 60);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/85 shadow-soft backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <button onClick={() => go("top")} className="flex min-w-0 cursor-pointer items-center">
          <Logo />
        </button>

        <div className="hidden items-center gap-1 xl:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-forest"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={whatsappDemo}>
            <MessageCircle /> WhatsApp
          </Button>
          <Button variant="cta" size="sm" className="hidden sm:inline-flex" onClick={() => go("plan")}>
            Plan tuinonderhoud
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="xl:hidden"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-8 pt-4 xl:hidden">
          <div className="flex flex-col">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="cursor-pointer border-b border-border/60 py-3.5 text-left text-base font-semibold text-forest"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <Button variant="cta" size="lg" onClick={() => go("plan")}>
              Plan tuinonderhoud →
            </Button>
            <Button variant="outline" size="lg" onClick={whatsappDemo}>
              <MessageCircle /> WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
