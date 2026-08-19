import { useState, type FormEvent } from "react";
import { MapPin, Sparkles, CalendarDays, ArrowRight, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./Reveal";

export function BookingWidget() {
  const [open, setOpen] = useState(false);
  const [postcode, setPostcode] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <section id="plan" className="mx-auto max-w-7xl px-5 pt-14 pb-6 lg:px-8">
      <Reveal className="rounded-[2rem] border border-border bg-card p-6 shadow-lift sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <h2 className="text-2xl font-extrabold text-forest sm:text-3xl">Hulp nodig in je tuin?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Vertel kort wat er moet gebeuren — wij kijken wie er beschikbaar is.
            </p>
            <form onSubmit={submit} className="mt-6 grid gap-4 md:grid-cols-3">
              <label className="block">
                <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-forest">
                  <MapPin className="h-3.5 w-3.5 text-leaf" /> Postcode
                </span>
                <Input
                  required
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="1234 AB"
                  className="h-12 rounded-xl"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-forest">
                  <Sparkles className="h-3.5 w-3.5 text-leaf" /> Wat moet er gebeuren?
                </span>
                <Select defaultValue="onderhoud">
                  <SelectTrigger className="h-12 w-full rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="onderhoud">Tuinonderhoud</SelectItem>
                    <SelectItem value="snoeien">Snoeien &amp; hagen</SelectItem>
                    <SelectItem value="opruimen">Tuin opruimen</SelectItem>
                    <SelectItem value="aanleg">Tuinaanleg</SelectItem>
                  </SelectContent>
                </Select>
              </label>
              <label className="block">
                <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-forest">
                  <CalendarDays className="h-3.5 w-3.5 text-leaf" /> Wanneer?
                </span>
                <Select defaultValue="2weken">
                  <SelectTrigger className="h-12 w-full rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zsm">Zo snel mogelijk</SelectItem>
                    <SelectItem value="2weken">Binnen 2 weken</SelectItem>
                    <SelectItem value="maand">Binnen een maand</SelectItem>
                    <SelectItem value="terugkerend">Terugkerend onderhoud</SelectItem>
                  </SelectContent>
                </Select>
              </label>
              <div className="md:col-span-3">
                <Button type="submit" variant="cta" size="lg" className="w-full md:w-auto">
                  Bekijk mogelijkheden <ArrowRight />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Reveal>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-3xl sm:max-w-md">
          <DialogHeader>
            <span className="mb-2 grid h-12 w-12 place-items-center rounded-2xl bg-leaf/15">
              <PartyPopper className="h-6 w-6 text-leaf" />
            </span>
            <DialogTitle className="text-xl">
              Top! We zoeken naar beschikbare Tuinstudenten in jouw omgeving.
            </DialogTitle>
            <DialogDescription>
              {postcode ? `Postcode ${postcode.toUpperCase()} — ` : ""}we nemen doorgaans binnen één
              werkdag contact op met een voorstel.
            </DialogDescription>
          </DialogHeader>
          <p className="text-xs text-muted-foreground">
            Demo — in deze preview wordt geen aanvraag verstuurd.
          </p>
          <DialogFooter>
            <Button variant="cta" onClick={() => setOpen(false)}>
              Duidelijk
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
