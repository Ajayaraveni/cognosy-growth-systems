import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    name: "Krishna Reddy",
    role: "Owner, The Yellow Elephant Interiors",
    quote:
      "Cognosy helped us bring structure to our lead management process. What used to take hours of manual follow-up is now streamlined and organized. Our team spends more time speaking with serious prospects and less time managing spreadsheets.",
  },
  {
    name: "Abhilash",
    role: "Founder, Kloft Hotels",
    quote:
      "The automation system helped us respond faster and keep track of every enquiry. We noticed immediate improvements in lead handling and team efficiency. The implementation was smooth and practical from day one.",
  },
  {
    name: "Vikram",
    role: "Legal Consultant",
    quote:
      "Managing Meta leads manually was becoming difficult as enquiries increased. Cognosy built a process that ensured every lead was captured and followed up properly. The difference was noticeable within the first few weeks.",
  },
  {
    name: "Harish",
    role: "Founder, Spotless 360",
    quote:
      "We wanted a reliable system that could organize incoming leads without additional administrative work. Cognosy delivered exactly that. The workflow runs quietly in the background while our team focuses on closing business.",
  },
];

const initials = (n: string) =>
  n
    .split(" ")
    .map((x) => x[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export const Testimonials = () => (
  <div className="grid md:grid-cols-2 gap-5">
    {items.map((t, i) => (
      <motion.figure
        key={t.name}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="grad-border glass p-8 md:p-10 flex flex-col"
      >
        <Quote className="w-6 h-6 text-accent/60 mb-5" />
        <blockquote className="text-foreground/90 text-[15px] md:text-base leading-relaxed flex-1">
          "{t.quote}"
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-3 pt-6 border-t hairline">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border hairline grid place-items-center text-xs font-semibold text-accent">
            {initials(t.name)}
          </div>
          <div>
            <div className="font-medium text-sm text-foreground">{t.name}</div>
            <div className="text-xs text-muted-foreground">{t.role}</div>
          </div>
        </figcaption>
      </motion.figure>
    ))}
  </div>
);
