import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Academy = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 pt-24 pb-20 md:pt-32">
        <div className="text-xs uppercase tracking-widest text-accent mb-5 inline-flex items-center gap-2">
          <GraduationCap className="w-3.5 h-3.5" /> Cognosy Academy
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1]">
          Practical training in <span className="text-gradient">AI and emerging technologies.</span>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Cognosy Academy is our learning division — built for individuals and teams who want to use AI with real fluency, not just curiosity.
        </p>
        <div className="mt-10">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Get program details <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Academy;
