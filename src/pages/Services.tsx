import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { services } from "@/data/services";

const Services = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-hero-glow opacity-70" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-16 md:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(217_91%_60%/0.12)] border border-[hsl(217_91%_60%/0.3)] text-[13px] font-medium text-[hsl(217_91%_70%)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(217_91%_60%)]" /> Our Services
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1] max-w-5xl mx-auto">
            Practical AI. <span className="text-accent">Measurable outcomes.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Six service areas spanning automation, customer engagement, AI safety, and practical business improvement.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ContactDialog
              trigger={<Button variant="hero" size="lg" className="rounded-full">Book a Strategy Call <ArrowRight /></Button>}
            />
          </div>
        </motion.div>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 space-y-5">
      {services.map((s, i) => (
        <motion.section
          key={s.slug}
          id={s.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative grad-border glass p-8 md:p-12 grid md:grid-cols-12 gap-8 scroll-mt-28 hover-glow"
        >
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-accent">
              <span className="font-display text-base text-accent">0{i + 1}</span>
              <span className="h-px w-8 bg-accent/40" />
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.short}</p>
            <ContactDialog
              trigger={
                <Button variant="soft" size="sm" className="mt-6 rounded-full">Book a Strategy Call <ArrowRight className="w-3.5 h-3.5" /></Button>
              }
            />
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-5">
            <div className="rounded-xl bg-background/40 border hairline p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">What it means</div>
              <p className="text-foreground/90 leading-relaxed text-sm">{s.what}</p>
            </div>
            <div className="rounded-xl bg-background/40 border hairline p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Who it's for</div>
              <p className="text-foreground/90 leading-relaxed text-sm">{s.who}</p>
            </div>
            <div className="sm:col-span-2 rounded-xl bg-background/40 border hairline p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Key Benefits</div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2 rounded-xl bg-gradient-to-br from-[hsl(217_91%_60%/0.14)] to-[hsl(217_91%_60%/0.04)] border hairline p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Outcome
              </div>
              <p className="text-foreground leading-relaxed text-sm font-medium">{s.outcome}</p>
            </div>
          </div>
        </motion.section>
      ))}
    </div>

    <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl glass-strong p-12 md:p-20 text-center"
      >
        <div className="absolute inset-0 bg-hero-glow opacity-80" />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Not sure which system you need?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Book a strategy call. We'll map your business and recommend exactly where to start.
          </p>
          <ContactDialog
            trigger={
              <Button variant="hero" size="lg" className="mt-8 rounded-full">Book a Strategy Call <ArrowRight /></Button>
            }
          />
        </div>
      </motion.div>
    </section>
  </Layout>
);

export default Services;
