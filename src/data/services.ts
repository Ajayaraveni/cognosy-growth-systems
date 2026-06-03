export const services = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    short: "Automate repetitive business processes end-to-end.",
    what: "Automate approvals, follow-ups, data entry, reporting, customer workflows and internal operations — designed around how your business actually runs.",
    who: "Operators losing hours each week to manual work, handoffs and admin.",
    outcome: "A leaner operation that scales without proportional headcount.",
    benefits: [
      "Reduce manual work",
      "Eliminate bottlenecks",
      "Improve operational efficiency",
      "Scale without increasing headcount",
    ],
  },
  {
    slug: "ai-customer-engagement",
    title: "AI Customer Engagement",
    short: "Chatbots, WhatsApp assistants and voice agents that convert.",
    what: "Deploy AI chatbots, WhatsApp AI assistants, voice agents, lead qualification systems, appointment booking and customer support automation across every channel.",
    who: "Businesses handling high inbound volume across web, WhatsApp, voice and support.",
    outcome: "24/7 engagement, faster response times and higher conversion — without scaling your team.",
    benefits: [
      "24/7 customer engagement",
      "Faster response times",
      "Better lead conversion",
      "Reduced support workload",
    ],
  },
  {
    slug: "rag-systems",
    title: "RAG Systems",
    short: "Private knowledge assistants trained on your company data.",
    what: "Retrieval-augmented assistants trained on your documents, SOPs, policies, manuals, contracts and databases — with grounded, cited answers.",
    who: "Teams with deep internal knowledge that's hard to search and slow to access.",
    outcome: "Instant institutional memory, secure internal AI and faster decisions.",
    benefits: [
      "Instant knowledge retrieval",
      "Secure internal AI assistants",
      "Reduced training time",
      "Better decision making",
    ],
  },
  {
    slug: "custom-ai",
    title: "Custom AI Solutions",
    short: "Bespoke AI products, integrations and enterprise infrastructure.",
    what: "Custom-built AI products, intelligent workflows, integrations, internal platforms and enterprise AI infrastructure — engineered to your exact requirements.",
    who: "Operators with unique workflows, sensitive data or competitive AI needs.",
    outcome: "A defensible AI capability designed entirely around how your business operates.",
    benefits: [
      "Fully tailored implementation",
      "Competitive advantage",
      "Scalable architecture",
      "Long-term AI adoption",
    ],
  },
] as const;

export type Service = (typeof services)[number];
