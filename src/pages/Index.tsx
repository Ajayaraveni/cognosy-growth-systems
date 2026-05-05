import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Workflow, Zap, Search, Sparkles, GraduationCap, Building2, Home as HomeIcon, Palette, Briefcase, TrendingUp, Target, Globe, Layers } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const icons = [Workflow, Zap, Search, Sparkles, GraduationCap];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border hairline bg-surface/40 backdrop-blur text-xs text-muted-foreground mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
              AI Business Growth Systems
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]">
              AI Systems That<br />
              <span className="text-gradient">Grow Your Business</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From automation to visibility and authority — we build systems that drive real growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Book Strategy Call <ArrowRight /></Link>
              </Button>
              <Button asChild variant="soft" size="lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px border hairline rounded-xl overflow-hidden bg-hairline">
            {[
              "AI-Powered Systems",
              "10× Operational Efficiency",
              "24/7 Automated Workflows",
              "Built for Business Growth",
            ].map((s) => (
              <div key={s} className="bg-background p-6 flex items-center">
                <div className="font-display text-xl md:text-2xl font-semibold tracking-tight leading-snug">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <Section eyebrow="What We Do" title="Five systems. One growth engine." subtitle="We don't sell tools. We design and deploy structured systems that move your business forward." className="section-alt">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border hairline rounded-2xl overflow-hidden">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background p-8 group hover:bg-surface transition-colors hover-lift"
              >
                <div className="w-11 h-11 rounded-lg bg-secondary border hairline grid place-items-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                <Link to={`/services#${s.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
          <div className="bg-gradient-to-br from-surface to-background p-8 flex flex-col justify-between">
            <div>
              <div className="font-display text-xl font-semibold">Need a custom system?</div>
              <p className="mt-2 text-sm text-muted-foreground">We design bespoke growth systems for businesses with unique needs.</p>
            </div>
            <Button asChild variant="hero" size="sm" className="mt-6 w-fit">
              <Link to="/contact">Talk to us</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section eyebrow="How It Works" title="A simple, structured process." subtitle="No fluff. Three steps from understanding your business to running on systems.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Understand Your Business", d: "We map your operations, goals and bottlenecks before recommending anything." },
            { n: "02", t: "Build Custom AI Systems", d: "We design and deploy systems tailored to how your business actually works." },
            { n: "03", t: "Optimize for Growth", d: "We measure, refine and scale — turning systems into compounding growth." },
          ].map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-2xl border hairline bg-surface/40"
            >
              <div className="font-display text-sm text-accent mb-6">{step.n}</div>
              <h3 className="font-display text-2xl font-semibold">{step.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{step.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WHO IT'S FOR */}
      <Section eyebrow="Who It's For" title="Built for growing businesses." subtitle="We work with operators who are serious about scaling with structure." className="section-alt">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { i: Building2, t: "Clinics" },
            { i: HomeIcon, t: "Real Estate" },
            { i: Palette, t: "Interior Designers" },
            { i: Briefcase, t: "Service Businesses" },
          ].map((c) => (
            <div key={c.t} className="p-8 rounded-2xl border hairline bg-surface/40 hover:border-accent/40 transition-colors">
              <c.i className="w-6 h-6 text-accent mb-4" />
              <div className="font-display text-lg font-medium">{c.t}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* RESULTS */}
      <Section eyebrow="Results" title="What changes when you run on systems." >
        <div className="grid md:grid-cols-2 gap-px bg-hairline border hairline rounded-2xl overflow-hidden">
          {[
            { i: Zap, t: "Faster Operations", d: "Tasks that took days happen in minutes. Your team focuses on high-value work." },
            { i: Target, t: "Better Lead Conversion", d: "AI-driven follow-up and qualification turns more leads into paying customers." },
            { i: Globe, t: "Strong Online Presence", d: "Visibility across Google, AI answers and your industry's most-watched channels." },
            { i: Layers, t: "Scalable Systems", d: "Growth without proportional hiring. Your business runs even when you don't." },
          ].map((r) => (
            <div key={r.t} className="bg-background p-10">
              <r.i className="w-6 h-6 text-accent mb-5" />
              <h3 className="font-display text-2xl font-semibold">{r.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl border hairline bg-surface p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-hero-glow opacity-80" />
          <div className="relative">
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              Stop working manually.<br />
              <span className="text-gradient">Start running on systems.</span>
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Book Strategy Call <ArrowRight /></Link>
              </Button>
              <Button asChild variant="soft" size="lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
