import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Workflow, Zap, Search, Sparkles, GraduationCap,
  Building2, Home as HomeIcon, Palette, Briefcase,
  TrendingUp, Target, Globe, Layers, Cpu, Network, ShieldCheck, BarChart3,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { services } from "@/data/services";

const icons = [Workflow, Zap, Search, Sparkles, GraduationCap];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32 md:pt-28 md:pb-44">
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="tracking-wider uppercase font-medium">AI Business Growth Systems</span>
            </div>

            <motion.h1
              variants={fadeUp} custom={1}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[0.95]"
            >
              AI Systems That<br />
              <span className="text-gradient-accent">Grow Your Business</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={2}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              From automation to visibility and authority — we build systems that drive real growth.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-wrap gap-3">
              <ContactDialog
                trigger={
                  <Button variant="hero" size="lg" className="rounded-full">
                    Book Strategy Call <ArrowRight />
                  </Button>
                }
              />
              <Button asChild variant="soft" size="lg" className="rounded-full">
                <Link to="/services">View Services</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats / trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Cpu, t: "AI-Powered Systems" },
              { icon: BarChart3, t: "10× Operational Efficiency" },
              { icon: Network, t: "24/7 Automated Workflows" },
              { icon: ShieldCheck, t: "Built for Business Growth" },
            ].map((s, i) => (
              <motion.div
                key={s.t}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="grad-border glass p-6"
              >
                <s.icon className="w-5 h-5 text-accent mb-4" />
                <div className="font-display text-base md:text-lg font-semibold leading-snug">{s.t}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <Section eyebrow="What We Do" title="Five systems. One growth engine." subtitle="We don't sell tools. We design and deploy structured systems that move your business forward.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.slug}
                variants={fadeUp} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group relative grad-border glass p-8 hover-glow"
              >
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(217_91%_60%/0.25)] to-[hsl(258_90%_66%/0.2)] border hairline grid place-items-center mb-6 transition-all group-hover:shadow-[0_0_30px_hsl(217_91%_60%/0.5)]">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                <Link
                  to={`/services#${s.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
          <motion.div
            variants={fadeUp} custom={5}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between bg-gradient-to-br from-[hsl(217_91%_60%/0.18)] via-[hsl(258_90%_66%/0.12)] to-transparent border hairline"
          >
            <div className="absolute inset-0 bg-dotgrid opacity-40" aria-hidden="true" />
            <div className="relative">
              <Sparkles className="w-5 h-5 text-accent mb-4" />
              <div className="font-display text-xl font-semibold">Need a custom system?</div>
              <p className="mt-2 text-sm text-muted-foreground">We design bespoke growth systems for businesses with unique needs.</p>
            </div>
            <ContactDialog
              trigger={
                <Button variant="hero" size="sm" className="relative mt-6 w-fit rounded-full">Talk to us <ArrowRight className="w-3.5 h-3.5" /></Button>
              }
            />
          </motion.div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section eyebrow="How It Works" title="A simple, structured process." subtitle="No fluff. Three steps from understanding your business to running on systems.">
        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          {[
            { n: "01", t: "Understand Your Business", d: "We map your operations, goals and bottlenecks before recommending anything." },
            { n: "02", t: "Build Custom AI Systems", d: "We design and deploy systems tailored to how your business actually works." },
            { n: "03", t: "Optimize for Growth", d: "We measure, refine and scale — turning systems into compounding growth." },
          ].map((step, i) => (
            <motion.div
              key={step.n}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative grad-border glass p-8"
            >
              <div className="w-12 h-12 rounded-full grid place-items-center bg-background border hairline relative z-10 mb-6">
                <span className="font-display text-sm text-gradient-accent font-semibold">{step.n}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold">{step.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{step.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WHO IT'S FOR */}
      <Section eyebrow="Who It's For" title="Built for growing businesses." subtitle="We work with operators who are serious about scaling with structure.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { i: Building2, t: "Clinics" },
            { i: HomeIcon, t: "Real Estate" },
            { i: Palette, t: "Interior Designers" },
            { i: Briefcase, t: "Service Businesses" },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="grad-border glass p-8 transition-all"
            >
              <c.i className="w-6 h-6 text-accent mb-4" />
              <div className="font-display text-lg font-medium">{c.t}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* RESULTS */}
      <Section eyebrow="Results" title="What changes when you run on systems.">
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { i: Zap, t: "Faster Operations", d: "Tasks that took days happen in minutes. Your team focuses on high-value work." },
            { i: Target, t: "Better Lead Conversion", d: "AI-driven follow-up and qualification turns more leads into paying customers." },
            { i: Globe, t: "Strong Online Presence", d: "Visibility across Google, AI answers and your industry's most-watched channels." },
            { i: Layers, t: "Scalable Systems", d: "Growth without proportional hiring. Your business runs even when you don't." },
          ].map((r, i) => (
            <motion.div
              key={r.t}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grad-border glass p-10 hover-glow"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(217_91%_60%/0.25)] to-[hsl(258_90%_66%/0.2)] grid place-items-center mb-5">
                <r.i className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{r.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{r.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-hero-glow opacity-90" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-accent mb-6 shadow-[0_10px_40px_-10px_hsl(217_91%_60%/0.7)]">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              Stop working manually.<br />
              <span className="text-gradient-accent">Start running on systems.</span>
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ContactDialog
                trigger={
                  <Button variant="hero" size="lg" className="rounded-full">
                    Book Strategy Call <ArrowRight />
                  </Button>
                }
              />
              <Button asChild variant="soft" size="lg" className="rounded-full">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
