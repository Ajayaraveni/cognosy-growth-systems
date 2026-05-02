import { LucideIcon } from "lucide-react";

export const services = [
  {
    slug: "ai-integration",
    title: "AI Integration",
    short: "Connect tools, systems, and platforms into one flow.",
    what: "We unify your CRM, marketing, ops and data tools so AI can act across your business — not in isolated silos.",
    who: "Companies running 5+ disconnected tools that don't talk to each other.",
    outcome: "One connected stack. Real-time data. Faster decisions across teams.",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    short: "Remove manual work and automate operations.",
    what: "We design AI-driven workflows that handle lead capture, qualification, follow-ups, reporting and routine ops end-to-end.",
    who: "Teams losing 10+ hours weekly to repetitive admin and follow-up tasks.",
    outcome: "Hours given back to your team. Zero leads slipping. Predictable operations.",
  },
  {
    slug: "seo-aeo-geo",
    title: "SEO / AEO / GEO",
    short: "Increase visibility across search and AI platforms.",
    what: "Modern visibility across Google (SEO), AI answers (AEO) and generative engines like ChatGPT and Perplexity (GEO).",
    who: "Brands that want to be found — by humans and by AI — when buyers are searching.",
    outcome: "More qualified traffic. Mentions in AI answers. Compounding authority.",
  },
  {
    slug: "personal-branding",
    title: "Personal Branding",
    short: "Build authority and trust in your niche.",
    what: "We position founders and executives as the trusted voice in their category through content systems, narrative and presence.",
    who: "Founders, consultants and operators whose business benefits from a strong personal brand.",
    outcome: "Inbound opportunities. Premium pricing. A reputation that opens doors.",
  },
  {
    slug: "training",
    title: "Training",
    short: "Help teams understand and use AI effectively.",
    what: "Hands-on training programs that turn your team into confident, daily users of AI — not bystanders.",
    who: "Leadership teams who want AI adopted across the company, not just by one person.",
    outcome: "An AI-fluent team. Faster execution. Internal capability that compounds.",
  },
] as const;

export type Service = (typeof services)[number];
