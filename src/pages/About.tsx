import { Link } from "react-router-dom";
import { ArrowRight, Compass, Layers, Target } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

const About = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 md:pt-32">
        <div className="text-xs uppercase tracking-widest text-accent mb-5">About Cognosy AI</div>
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1] max-w-4xl">
          Businesses don't need more tools — <span className="text-gradient">they need systems.</span>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Cognosy AI is an AI Business Growth Systems agency. We help companies stop stitching together random software and start operating on structured, AI-driven systems built around their goals.
        </p>
      </div>
    </section>

    <Section eyebrow="Why AI Matters" title="AI is no longer a feature — it's infrastructure.">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <p className="text-lg text-muted-foreground leading-relaxed">
          The businesses winning right now aren't the ones with the most tools. They're the ones with the right systems — systems that capture leads, qualify them, follow up, deliver, report and improve, all without manual effort.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          AI makes that possible at a scale and price point that didn't exist three years ago. The question is no longer "should we use AI" — it's "do we have the systems to make AI useful."
        </p>
      </div>
    </Section>

    <Section eyebrow="The Problem" title="Most businesses fail to implement AI properly.">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { i: Compass, t: "No clear strategy", d: "Tools are bought before goals are defined. AI gets layered on top of broken processes." },
          { i: Layers, t: "Disconnected stack", d: "Five SaaS tools that don't talk to each other create more work, not less." },
          { i: Target, t: "No measurable outcome", d: "Without tracking, AI experiments quietly die — and the business stays the same." },
        ].map((p) => (
          <div key={p.t} className="p-8 rounded-2xl border hairline bg-surface/40">
            <p.i className="w-6 h-6 text-accent mb-5" />
            <h3 className="font-display text-xl font-semibold">{p.t}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section eyebrow="Our Approach" title="Structured systems. Not random solutions.">
      <div className="grid md:grid-cols-2 gap-12">
        <p className="text-lg text-muted-foreground leading-relaxed">
          We don't show up with a tool and look for problems. We start with your business — your offer, your operations, your customers — and design systems that move specific numbers.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Every system we build is owned by you, integrated with your stack, and measured against an outcome. No black boxes, no dependency, no vanity dashboards.
        </p>
      </div>
      <div className="mt-12">
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">Work With Us <ArrowRight /></Link>
        </Button>
      </div>
    </Section>
  </Layout>
);

export default About;
