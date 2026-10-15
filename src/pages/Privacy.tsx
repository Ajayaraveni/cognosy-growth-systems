import { Layout } from "@/components/Layout";

const Privacy = () => (
  <Layout>
    <section className="max-w-3xl mx-auto px-6 lg:px-8 pt-24 pb-24">
      <div className="text-xs uppercase tracking-widest text-accent mb-5">Legal</div>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2025</p>

      <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly to us — such as your name, email, business details and message — when you contact us, request a strategy call, or sign up for any of our services.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. How We Use Information</h2>
          <p>We use your information to respond to inquiries, deliver services, improve our offerings and communicate updates relevant to your engagement with Cognosy AI.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Data Sharing</h2>
          <p>We do not sell your personal information. We may share data with trusted service providers who help us operate our business, under strict confidentiality.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
          <p>We implement reasonable safeguards to protect your information. No system is 100% secure, but we treat your data with care and discretion.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
          <p>You may request access, correction or deletion of your personal data at any time by emailing hello@cognosy.com.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Contact</h2>
          <p>For privacy-related questions, contact us at hello@cognosy.com.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
