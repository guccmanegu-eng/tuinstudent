import { useState } from "react";
import { ImagePlus, UploadCloud, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import photo from "@/assets/photo-estimate.jpg";
import { Reveal } from "./Reveal";

export function PhotoEstimate() {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<string[]>([]);

  return (
    <section className="bg-sand/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <img
            src={photo}
            alt="Iemand fotografeert de eigen tuin met een smartphone"
            loading="lazy"
            width={1000}
            height={1000}
            className="h-72 w-full rounded-[2rem] object-cover shadow-lift sm:h-96 lg:h-[30rem]"
          />
        </Reveal>
        <Reveal delay={120}>
          <span className="inline-flex items-center gap-2 rounded-full bg-leaf/15 px-3.5 py-1.5 text-xs font-semibold text-forest">
            Nieuw
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-forest sm:text-5xl">
            Kun je de klus moeilijk uitleggen?
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Stuur gewoon een paar foto's van je tuin. Aan de hand daarvan schatten we in wat er nodig
            is en hoeveel tijd de klus kost.
          </p>
          <Button variant="cta" size="xl" className="mt-8" onClick={() => setOpen(true)}>
            <ImagePlus /> Foto's uploaden
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            Demo — foto's worden in deze preview niet opgeslagen.
          </p>
        </Reveal>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-3xl sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl">Foto's van je tuin</DialogTitle>
            <DialogDescription>
              Voeg 1 tot 5 foto's toe zodat we de klus goed kunnen inschatten.
            </DialogDescription>
          </DialogHeader>

          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-leaf/40 bg-secondary/40 px-6 py-10 text-center transition-colors hover:bg-secondary">
            <UploadCloud className="h-7 w-7 text-leaf" />
            <span className="text-sm font-semibold text-forest">Sleep foto's hierheen of klik</span>
            <span className="text-xs text-muted-foreground">JPG of PNG, max 10 MB per foto</span>
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                setFiles(Array.from(e.target.files ?? []).map((f) => f.name).slice(0, 5))
              }
            />
          </label>

          {files.length > 0 && (
            <ul className="space-y-1.5">
              {files.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-forest">
                  <Check className="h-4 w-4 text-leaf" /> {f}
                </li>
              ))}
            </ul>
          )}

          <p className="text-xs text-muted-foreground">
            Demo — foto's worden in deze preview niet opgeslagen.
          </p>
          <DialogFooter>
            <Button variant="cta" onClick={() => setOpen(false)}>
              Sluiten
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
