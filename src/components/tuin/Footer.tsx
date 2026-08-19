import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, linkDemo, scrollToId } from "./demo";

const COLUMNS = [
  {
    title: "Diensten",
    links: [
      { label: "Tuinonderhoud", id: "diensten" },
      { label: "Heggen snoeien", id: "diensten" },
      { label: "Tuin opruimen", id: "diensten" },
      { label: "Tuinaanleg", id: "diensten" },
    ],
  },
  {
    title: "Tuinstudent",
    links: [
      { label: "Hoe werkt het?", id: "hoe-werkt-het" },
      { label: "Prijzen", id: "prijzen" },
      { label: "Reviews", id: "reviews" },
      { label: "Werk via Tuinstudent", id: "studenten" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-forest-deep pt-16 pb-10 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Tuinonderhoud door gemotiveerde studenten. Vakwerk tegen een eerlijk tarief, in heel
              Nederland.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-leaf">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={() => scrollToId(l.id)}
                      className="cursor-pointer text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-leaf">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-leaf" /> {CONTACT.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-leaf" /> {CONTACT.email}
              </li>
              <li>Ma t/m za · 08:00 – 20:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-primary-foreground/15 pt-7 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tuinstudent aan huis · KvK 00000000</p>
          <div className="flex flex-wrap gap-5">
            <button onClick={linkDemo} className="cursor-pointer hover:text-primary-foreground">
              Algemene voorwaarden
            </button>
            <button onClick={linkDemo} className="cursor-pointer hover:text-primary-foreground">
              Privacybeleid
            </button>
            <button onClick={linkDemo} className="cursor-pointer hover:text-primary-foreground">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
