import { Layout } from "@/components/Layout";

const Terms = () => (
  <Layout>
    <section className="max-w-3xl mx-auto px-6 lg:px-8 pt-24 pb-24">
      <div className="text-xs uppercase tracking-widest text-accent mb-5">Legal</div>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter">Terms & Conditions</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2025</p>

      <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using the Cognosy AI website and services, you agree to be bound by these Terms & Conditions.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Services</h2>
          <p>Cognosy AI provides AI Business Growth Systems including AI Integration, AI Automation, SEO/AEO/GEO, Personal Branding and Trainings. Specific deliverables are defined in individual engagement agreements.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
          <p>All content on this website — including text, graphics, logos and systems — is the property of Cognosy AI and protected by applicable laws.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Payments</h2>
          <p>Fees, payment terms and refund policies are governed by the engagement agreement signed between you and Cognosy AI.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
          <p>Cognosy AI is not liable for indirect, incidental or consequential damages arising from the use of our services or website.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Changes to Terms</h2>
          <p>We may update these terms from time to time. Continued use of the site after changes implies acceptance of the updated terms.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Contact</h2>
          <p>Questions about these terms? Email hello@cognosy.ai.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
