import { ReactNode } from "react";
import { motion } from "framer-motion";

export const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}) => (
  <section id={id} className={`max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 ${className}`}>
    {(eyebrow || title || subtitle) && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-14"
      >
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] font-medium text-accent mb-5 uppercase tracking-[0.18em]">
            <span className="w-1 h-1 rounded-full bg-accent" /> {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            {title}
          </h2>
        )}
        {subtitle && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
      </motion.div>
    )}
    {children}
  </section>
);
