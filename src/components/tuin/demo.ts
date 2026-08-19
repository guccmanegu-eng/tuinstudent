import { toast } from "sonner";

export const CONTACT = {
  phone: "06 21 58 18 44",
  email: "info@tuinstudentaanhuis.nl",
};

export function demoToast(title: string, description?: string) {
  toast.success(title, { description });
}

export function whatsappDemo() {
  toast("WhatsApp — demo", {
    description: `In de live website opent hier een chat met ${CONTACT.phone}.`,
  });
}

export function linkDemo() {
  toast("Demo-preview", {
    description: "Deze pagina bestaat nog niet in de preview.",
  });
}

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
