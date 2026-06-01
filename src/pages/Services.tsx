import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { services } from "@/data/services";

const Services = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] font-medium text-accent mb-6 uppercase tracking-[0.18em]">
            <span className="w-1 h-1 rounded-full bg-accent" /> Services
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1] max-w-4xl">
            Five systems built to <span className="text-gradient-accent">grow your business.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Each service is a complete, outcome-driven system — designed, deployed and measured.
          </p>
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
              <span className="font-display text-base text-gradient-accent">0{i + 1}</span>
              <span className="h-px w-8 bg-accent/40" />
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.short}</p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-3 gap-6">
            <div className="rounded-xl bg-background/40 border hairline p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">What it means</div>
              <p className="text-foreground/90 leading-relaxed text-sm">{s.what}</p>
            </div>
            <div className="rounded-xl bg-background/40 border hairline p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Who it's for</div>
              <p className="text-foreground/90 leading-relaxed text-sm">{s.who}</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-[hsl(217_91%_60%/0.18)] to-[hsl(258_90%_66%/0.12)] border hairline p-5">
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
        <div className="absolute inset-0 bg-hero-glow opacity-90" />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Not sure which system you need?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Book a strategy call. We'll map your business and tell you exactly where to start.
          </p>
          <ContactDialog
            trigger={
              <Button variant="hero" size="lg" className="mt-8 rounded-full">Book Strategy Call <ArrowRight /></Button>
            }
          />
        </div>
      </motion.div>
    </section>
  </Layout>
);

export default Services;
