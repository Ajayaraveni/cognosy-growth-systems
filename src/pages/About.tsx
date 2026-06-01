import { motion } from "framer-motion";
import { ArrowRight, Compass, Layers, Target } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const About = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24 md:pt-28">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] font-medium text-accent mb-6 uppercase tracking-[0.18em]">
            <span className="w-1 h-1 rounded-full bg-accent" /> About Cognosy AI
          </div>
        </motion.div>
        <motion.h1
          initial="hidden" animate="visible" variants={fadeUp} custom={1}
          className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1] max-w-5xl"
        >
          Businesses don't need more tools —<br />
          <span className="text-gradient-accent">they need systems.</span>
        </motion.h1>
        <motion.p
          initial="hidden" animate="visible" variants={fadeUp} custom={2}
          className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          Cognosy AI is an AI Business Growth Systems agency. We help companies stop stitching together random software and start operating on structured, AI-driven systems built around their goals.
        </motion.p>
      </div>
    </section>

    <Section eyebrow="Why AI Matters" title="AI is no longer a feature — it's infrastructure.">
      <div className="grid md:grid-cols-2 gap-8">
        {[
          "The businesses winning right now aren't the ones with the most tools. They're the ones with the right systems — systems that capture leads, qualify them, follow up, deliver, report and improve, all without manual effort.",
          "AI makes that possible at a scale and price point that didn't exist three years ago. The question is no longer \"should we use AI\" — it's \"do we have the systems to make AI useful.\"",
        ].map((p, i) => (
          <motion.div
            key={i}
            variants={fadeUp} custom={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grad-border glass p-8 md:p-10"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">{p}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section eyebrow="The Problem" title="Most businesses fail to implement AI properly.">
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { i: Compass, t: "No clear strategy", d: "Tools are bought before goals are defined. AI gets layered on top of broken processes." },
          { i: Layers, t: "Disconnected stack", d: "Five SaaS tools that don't talk to each other create more work, not less." },
          { i: Target, t: "No measurable outcome", d: "Without tracking, AI experiments quietly die — and the business stays the same." },
        ].map((p, i) => (
          <motion.div
            key={p.t}
            variants={fadeUp} custom={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="group grad-border glass p-8 hover-glow"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(217_91%_60%/0.25)] to-[hsl(258_90%_66%/0.2)] grid place-items-center mb-5">
              <p.i className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold">{p.t}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section eyebrow="Our Approach" title="Structured systems. Not random solutions.">
      <div className="grid md:grid-cols-2 gap-8">
        {[
          "We don't show up with a tool and look for problems. We start with your business — your offer, your operations, your customers — and design systems that move specific numbers.",
          "Every system we build is owned by you, integrated with your stack, and measured against an outcome. No black boxes, no dependency, no vanity dashboards.",
        ].map((p, i) => (
          <motion.div
            key={i}
            variants={fadeUp} custom={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grad-border glass p-8 md:p-10"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">{p}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-12">
        <ContactDialog
          title="Work With Us"
          trigger={
            <Button variant="hero" size="lg" className="rounded-full">Work With Us <ArrowRight /></Button>
          }
        />
      </div>
    </Section>
  </Layout>
);

export default About;
