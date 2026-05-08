import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { services } from "@/data/services";

const Services = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 md:pt-32">
        <div className="text-xs uppercase tracking-widest text-accent mb-5">Services</div>
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1] max-w-4xl">
          Five systems built to <span className="text-gradient">grow your business.</span>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Each service is a complete, outcome-driven system — designed, deployed and measured.
        </p>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 space-y-px bg-hairline border hairline rounded-2xl overflow-hidden">
      {services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className="bg-background p-10 md:p-16 grid md:grid-cols-12 gap-8 scroll-mt-24"
        >
          <div className="md:col-span-4">
            <div className="text-xs text-accent font-medium tracking-widest">0{i + 1}</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h2>
            <p className="mt-3 text-muted-foreground">{s.short}</p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-3 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">What it means</div>
              <p className="text-foreground/90 leading-relaxed text-sm">{s.what}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Who it's for</div>
              <p className="text-foreground/90 leading-relaxed text-sm">{s.who}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-accent mb-3 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Outcome</div>
              <p className="text-foreground leading-relaxed text-sm font-medium">{s.outcome}</p>
            </div>
          </div>
        </section>
      ))}
    </div>

    <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
      <div className="relative overflow-hidden rounded-3xl border hairline bg-surface p-12 md:p-20 text-center">
        <div className="absolute inset-0 bg-hero-glow opacity-80" />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">Not sure which system you need?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Book a strategy call. We'll map your business and tell you exactly where to start.</p>
          <ContactDialog
            trigger={
              <Button variant="hero" size="lg" className="mt-8">Book Strategy Call <ArrowRight /></Button>
            }
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
