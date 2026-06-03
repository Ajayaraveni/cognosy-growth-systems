import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Workflow, MessagesSquare, Database, Sparkles,
  TrendingUp, Target, Globe, Layers, Cpu, Network, ShieldCheck, BarChart3,
  CheckCircle2, Users, Award, Clock, LineChart,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { HeroOrbit } from "@/components/HeroOrbit";
import { Testimonials } from "@/components/Testimonials";
import { services } from "@/data/services";

const iconMap: Record<string, any> = {
  "ai-automation": Workflow,
  "ai-customer-engagement": MessagesSquare,
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
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-glow opacity-70" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-24 md:pt-20 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <motion.div
              initial="hidden" animate="visible" variants={fadeUp}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(217_91%_60%/0.10)] border border-[hsl(217_91%_60%/0.3)] text-[13px] font-medium text-[hsl(217_91%_72%)] mb-8">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(217_91%_60%)] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(217_91%_60%)]" />
                </span>
                Enterprise AI · Automation · Customer Engagement
              </div>

              <motion.h1
                variants={fadeUp} custom={1}
                className="font-display text-5xl md:text-7xl lg:text-[5.25rem] font-semibold tracking-[-0.04em] leading-[0.98]"
              >
                Practical AI systems <br className="hidden md:block" />
                that move <br className="hidden md:block" />
                <span className="text-accent">real business numbers.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp} custom={2}
                className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              >
                Cognosy designs, builds and deploys AI systems that automate operations, engage customers intelligently and turn your data into a competitive edge.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-wrap gap-3">
                <ContactDialog
                  trigger={
                    <Button variant="hero" size="lg" className="rounded-full">
                      Book a Strategy Call <ArrowRight />
                    </Button>
                  }
                />
                <Button asChild variant="soft" size="lg" className="rounded-full">
                  <Link to="/services">Explore Services</Link>
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

          {/* Trusted partner strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 md:mt-24"
          >
            <div className="text-center mb-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Your Trusted Business Automation Partner
            </div>
            <div className="rounded-2xl glass divide-y md:divide-y-0 md:divide-x divide-[hsl(var(--hairline))] grid grid-cols-1 md:grid-cols-4 overflow-hidden">
              {[
                { icon: Cpu, t: "AI-Powered Systems" },
                { icon: BarChart3, t: "Measurable ROI" },
                { icon: Network, t: "24/7 Automated Workflows" },
                { icon: ShieldCheck, t: "Enterprise-Grade Delivery" },
              ].map((s) => (
                <div key={s.t} className="flex items-center gap-3 px-5 py-5">
                  <s.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <div className="font-medium text-sm md:text-[15px] text-foreground/90">{s.t}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <Section
        eyebrow="Services"
        title="Four core capabilities. One intelligent infrastructure."
        subtitle="From automation to customer engagement, RAG and bespoke AI — we deliver the systems that quietly run modern businesses."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.slug] || Sparkles;
            return (
              <motion.div
                key={s.slug}
                variants={fadeUp} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group relative grad-border glass p-8 md:p-10 hover-glow flex flex-col"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/12 border hairline grid place-items-center transition-all group-hover:shadow-[0_0_30px_hsl(217_91%_60%/0.4)]">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.what}</p>
                <ul className="mt-6 space-y-2">
                  {s.benefits.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent/80 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services#${s.slug}`}
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <ContactDialog
            trigger={
              <Button variant="hero" size="lg" className="rounded-full">
                Book a Strategy Call <ArrowRight />
              </Button>
            }
          />
        </div>
      </Section>

      {/* HOW WE WORK */}
      <Section eyebrow="How We Work" title="A clear, structured engagement." subtitle="No fluff. Three phases from understanding your business to running on intelligent AI systems.">
        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[hsl(217_91%_60%/0.5)] to-transparent" />
          {[
            { n: "01", t: "Discover", d: "We map your operations, goals, data landscape and bottlenecks before recommending any system." },
            { n: "02", t: "Architect & Deploy", d: "We design and ship intelligent systems tailored to how your business actually runs and scales." },
            { n: "03", t: "Optimise & Scale", d: "We monitor, refine and expand — turning your AI systems into compounding operational advantage." },
          ].map((step, i) => (
            <motion.div
              key={step.n}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative grad-border glass p-8"
            >
              <div className="w-12 h-12 rounded-full grid place-items-center bg-background border hairline relative z-10 mb-6">
                <span className="font-display text-sm text-accent font-semibold">{step.n}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold">{step.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{step.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* RESULTS & OUTCOMES */}
      <Section eyebrow="Results & Outcomes" title="What changes when you run on intelligent systems.">
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { i: TrendingUp, t: "Faster Operations", d: "Tasks that took days happen in minutes. Your team focuses on high-value, strategic work." },
            { i: Target, t: "Better Lead Conversion", d: "AI-driven follow-up and qualification turns more leads into paying customers — automatically." },
            { i: Globe, t: "Always-On Engagement", d: "Customers get answered, qualified and booked around the clock, across every channel." },
            { i: Layers, t: "Scalable Infrastructure", d: "Intelligent systems that scale with demand — without proportional increases in headcount or cost." },
          ].map((r, i) => (
            <motion.div
              key={r.t}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grad-border glass p-10 hover-glow"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/12 border hairline grid place-items-center mb-5">
                <r.i className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{r.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{r.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WHY COGNOSY */}
      <Section eyebrow="Why Cognosy" title="The implementation partner serious operators choose.">
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { i: Award, t: "Outcome-led", d: "Every system is measured against a business outcome — not vanity metrics." },
            { i: Users, t: "Human partnership", d: "Senior strategists and engineers stay close to your team end-to-end." },
            { i: Clock, t: "Fast time-to-value", d: "Pragmatic scoping, early wins, then a roadmap to compounding gains." },
            { i: LineChart, t: "Built to scale", d: "Architectures that grow with your business — no rebuilds, no rip-and-replace." },
          ].map((w, i) => (
            <motion.div
              key={w.t}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grad-border glass p-7 hover-glow"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/12 border hairline grid place-items-center mb-4">
                <w.i className="w-4.5 h-4.5 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold">{w.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow="What Clients Say"
        title="Trusted by operators across industries."
        subtitle="Honest words from founders and leaders running their businesses on Cognosy systems."
      >
        <Testimonials />
      </Section>

      {/* BOOK A STRATEGY CALL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-hero-glow opacity-80" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] font-medium text-accent mb-6 uppercase tracking-[0.18em]">
              <span className="w-1 h-1 rounded-full bg-accent" /> Get Started
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              Book a Strategy Call.<br />
              <span className="text-accent">Map your AI roadmap in 30 minutes.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              No pitch. Just a focused conversation about where AI will move the needle in your business — and what to build first.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ContactDialog
                trigger={
                  <Button variant="hero" size="lg" className="rounded-full">
                    Book a Strategy Call <ArrowRight />
                  </Button>
                }
              />
              <Button asChild variant="soft" size="lg" className="rounded-full">
                <a
                  href="https://wa.me/919885529998?text=Hi%20Cognosy%2C%20I%E2%80%99d%20like%20to%20talk%20to%20an%20AI%20Automation%20Expert."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT QUICK ACCESS */}
      <Section eyebrow="Contact" title="Talk to our team directly.">
        <div className="grid md:grid-cols-3 gap-5">
          <a href="tel:+919885529998" className="grad-border glass p-8 hover-glow block">
            <div className="text-[10px] uppercase tracking-[0.22em] text-accent mb-3">India</div>
            <div className="font-display text-2xl font-semibold">+91 98855 29998</div>
            <div className="mt-2 text-sm text-muted-foreground">Call our India team</div>
          </a>
          <a href="tel:+16282359625" className="grad-border glass p-8 hover-glow block">
            <div className="text-[10px] uppercase tracking-[0.22em] text-accent mb-3">USA</div>
            <div className="font-display text-2xl font-semibold">+1 628 235 9625</div>
            <div className="mt-2 text-sm text-muted-foreground">Call our US team</div>
          </a>
          <a href="mailto:hello@cognosy.com" className="grad-border glass p-8 hover-glow block">
            <div className="text-[10px] uppercase tracking-[0.22em] text-accent mb-3">Email</div>
            <div className="font-display text-2xl font-semibold">hello@cognosy.com</div>
            <div className="mt-2 text-sm text-muted-foreground">We reply within 24 hours</div>
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
