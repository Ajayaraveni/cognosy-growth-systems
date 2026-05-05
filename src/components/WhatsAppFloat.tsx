import { MessageCircle } from "lucide-react";

const MESSAGE = "Hi, I'm interested in AI growth systems for my business.";
const PHONE = "10000000000"; // placeholder

export const WhatsAppFloat = () => (
  <a
    href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full border hairline bg-surface/80 backdrop-blur flex items-center justify-center text-foreground/80 hover:text-accent hover:border-accent/40 transition-colors shadow-card"
  >
    <MessageCircle className="w-5 h-5" />
  </a>
);
