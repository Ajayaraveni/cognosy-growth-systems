import { ReactNode } from "react";

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
      <div className="max-w-2xl mb-16">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-xs font-medium text-accent mb-4 uppercase tracking-widest">
            <span className="w-6 h-px bg-accent" /> {eyebrow}
          </div>
        )}
        {title && <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">{title}</h2>}
        {subtitle && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
      </div>
    )}
    {children}
  </section>
);
