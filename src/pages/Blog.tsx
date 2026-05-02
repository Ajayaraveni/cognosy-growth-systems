import { ArrowUpRight, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";

const posts = [
  { cat: "AI in Business", title: "Why most AI projects fail in the first 90 days", excerpt: "The pattern is always the same — a tool gets bought before a system gets designed. Here's how to flip the order.", time: "6 min read", date: "Apr 28, 2026" },
  { cat: "Automation", title: "The 5 workflows every service business should automate first", excerpt: "Not every workflow is worth automating. These five compound — and pay for the rest of your stack.", time: "8 min read", date: "Apr 21, 2026" },
  { cat: "SEO / AEO / GEO", title: "Getting cited by ChatGPT and Perplexity in 2026", excerpt: "Generative Engine Optimization is the new SEO. What it actually takes to show up in AI answers.", time: "10 min read", date: "Apr 14, 2026" },
  { cat: "Personal Branding", title: "Founder-led content that actually drives pipeline", excerpt: "Why most founder content gets engagement but no leads — and the system that fixes it.", time: "7 min read", date: "Apr 7, 2026" },
  { cat: "Automation", title: "Lead qualification with AI: a practical playbook", excerpt: "How to design an AI qualifier that filters tire-kickers without losing real opportunities.", time: "9 min read", date: "Mar 31, 2026" },
  { cat: "AI in Business", title: "Buy vs. build vs. integrate: a 2026 decision framework", excerpt: "When to use off-the-shelf, when to integrate, and when (rarely) to build custom.", time: "5 min read", date: "Mar 24, 2026" },
];

const Blog = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 md:pt-32">
        <div className="text-xs uppercase tracking-widest text-accent mb-5">Blog</div>
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1] max-w-4xl">
          Notes on building <span className="text-gradient">AI growth systems.</span>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
          Practical writing on AI in business, automation, SEO/AEO/GEO and personal branding.
        </p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border hairline rounded-2xl overflow-hidden">
        {posts.map((p) => (
          <article key={p.title} className="bg-background p-8 group cursor-pointer hover:bg-surface transition-colors flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs px-2.5 py-1 rounded-full border hairline text-muted-foreground">{p.cat}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition-all" />
            </div>
            <h3 className="font-display text-xl font-semibold leading-tight">{p.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
            <div className="mt-6 pt-6 border-t hairline flex items-center justify-between text-xs text-muted-foreground">
              <span>{p.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{p.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
