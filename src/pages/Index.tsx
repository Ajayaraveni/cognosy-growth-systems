import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Bot, MessageSquare, Phone, Workflow, Database, Sparkles, MessagesSquare,
  TrendingUp, Target, Globe, Layers, Cpu, Network, ShieldCheck, BarChart3,
  Building2, Home as HomeIcon, Palette, Briefcase,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { HeroOrbit } from "@/components/HeroOrbit";
import { services } from "@/data/services";

const iconMap: Record<string, any> = {
  "ai-agents": Bot,
  "ai-chatbots": MessagesSquare,
  "whatsapp-automation": MessageSquare,
  "voice-ai": Phone,
  "workflow-automation": Workflow,
  "rag-systems": Database,
  "custom-ai": Sparkles,
};

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
        <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-24 md:pt-20 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <motion.div
              initial="hidden" animate="visible" variants={fadeUp}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(217_91%_60%/0.12)] border border-[hsl(217_91%_60%/0.3)] text-[13px] font-medium text-[hsl(217_91%_70%)] mb-8">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(217_91%_60%)] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(217_91%_60%)]" />
                </span>
                Premium AI Automation & AI Solutions
              </div>

              <motion.h1
                variants={fadeUp} custom={1}
                className="font-display text-5xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tighter leading-[0.95]"
              >
                Building Intelligent <br className="hidden md:block" />
                AI Systems for <br className="hidden md:block" />
                <span className="text-[hsl(217_91%_60%)]">Modern Businesses</span>
              </motion.h1>

              <motion.p
                variants={fadeUp} custom={2}
                className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              >
                We help businesses automate operations, integrate AI into workflows, and build scalable intelligent systems.
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

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <HeroOrbit />
            </motion.div>
          </div>

          {/* Stats / trust strip — horizontal row of label+icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 md:mt-24 rounded-2xl glass border-t border-b hairline divide-y md:divide-y-0 md:divide-x divide-[hsl(var(--hairline))] grid grid-cols-1 md:grid-cols-4 overflow-hidden"
          >
            {[
              { icon: Cpu, t: "AI-Powered Systems" },
              { icon: BarChart3, t: "10× Operational Efficiency" },
              { icon: Network, t: "24/7 Automated Workflows" },
              { icon: ShieldCheck, t: "Built for Business Growth" },
            ].map((s) => (
              <div key={s.t} className="flex items-center gap-3 px-5 py-5">
                <s.icon className="w-4 h-4 text-[hsl(217_91%_60%)] flex-shrink-0" />
                <div className="font-medium text-sm md:text-[15px] text-foreground/90">{s.t}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <Section
        eyebrow="What We Build"
        title="AI Solutions for Modern Businesses"
        subtitle="We don't sell software. We design and deploy bespoke AI systems that become the operational backbone of your business."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.slug] || Sparkles;
            return (
              <motion.div
                key={s.slug}
                variants={fadeUp} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group relative grad-border glass p-8 hover-glow"
              >
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(217_91%_60%/0.25)] to-[hsl(217_91%_45%/0.15)] border hairline grid place-items-center mb-6 transition-all group-hover:shadow-[0_0_30px_hsl(217_91%_60%/0.5)]">
                  <Icon className="w-5 h-5 text-[hsl(217_91%_70%)]" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                <Link
                  to={`/services#${s.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(217_91%_70%)] hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
          <motion.div
            variants={fadeUp} custom={services.length}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between bg-gradient-to-br from-[hsl(217_91%_60%/0.2)] via-[hsl(217_91%_45%/0.12)] to-transparent border hairline"
          >
            <div className="absolute inset-0 bg-dotgrid opacity-40" aria-hidden="true" />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(217_91%_70%)] mb-3">Bespoke</div>
              <div className="font-display text-xl font-semibold">Need custom AI infrastructure?</div>
              <p className="mt-2 text-sm text-muted-foreground">We architect and build custom AI infrastructure tailored to your unique technical requirements.</p>
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
      <Section eyebrow="How It Works" title="A simple, structured process." subtitle="No fluff. Three steps from understanding your business to running on intelligent AI systems.">
        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[hsl(217_91%_60%/0.5)] to-transparent" />
          {[
            { n: "01", t: "Understand Your Business", d: "We map your operations, goals, data landscape, and bottlenecks before recommending any system." },
            { n: "02", t: "Architect Custom AI Systems", d: "We design and deploy intelligent systems tailored precisely to how your business operates and scales." },
            { n: "03", t: "Optimise & Scale", d: "We monitor, refine, and expand — turning your AI systems into compounding operational advantage." },
          ].map((step, i) => (
            <motion.div
              key={step.n}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative grad-border glass p-8"
            >
              <div className="w-12 h-12 rounded-full grid place-items-center bg-background border hairline relative z-10 mb-6">
                <span className="font-display text-sm text-[hsl(217_91%_70%)] font-semibold">{step.n}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold">{step.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{step.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WHO IT'S FOR */}
      <Section eyebrow="Who It's For" title="Built for growing businesses." subtitle="We work with operators who are serious about scaling with intelligent systems.">
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
              <c.i className="w-6 h-6 text-[hsl(217_91%_70%)] mb-4" />
              <div className="font-display text-lg font-medium">{c.t}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* RESULTS */}
      <Section eyebrow="Results" title="What changes when you run on intelligent systems.">
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { i: TrendingUp, t: "Faster Operations", d: "Tasks that took days happen in minutes. Your team focuses on high-value, strategic work." },
            { i: Target, t: "Better Lead Conversion", d: "AI-driven follow-up and qualification turns more leads into paying customers — automatically." },
            { i: Globe, t: "AI-Native Visibility", d: "Your business gets found across AI answer engines, LLM search, and next-gen discovery platforms." },
            { i: Layers, t: "Scalable Infrastructure", d: "Intelligent systems that scale with demand — without proportional increases in headcount or cost." },
          ].map((r, i) => (
            <motion.div
              key={r.t}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grad-border glass p-10 hover-glow"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(217_91%_60%/0.25)] to-[hsl(217_91%_45%/0.15)] grid place-items-center mb-5">
                <r.i className="w-5 h-5 text-[hsl(217_91%_70%)]" />
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
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(217_91%_60%)] to-transparent" aria-hidden="true" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[hsl(217_91%_60%)] mb-6 shadow-[0_10px_40px_-10px_hsl(217_91%_60%/0.7)]">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              Stop operating manually.<br />
              <span className="text-[hsl(217_91%_60%)]">Start running on intelligent systems.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Book a free strategy call and we'll map out the right AI systems for your business.
            </p>
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
