import { useState } from "react";
import { z } from "zod";
import { Calendar, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  business: z.string().trim().min(1, "Business type required").max(100),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
      setErrors(fe);
      return;
    }
    setErrors({});
    toast.success("Message sent. We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", business: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 md:pt-32">
          <div className="text-xs uppercase tracking-widest text-accent mb-5">Contact</div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1] max-w-4xl">
            Let's build your <span className="text-gradient">growth system.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Tell us about your business. We respond within one business day.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 grid lg:grid-cols-5 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-3 p-8 md:p-10 rounded-2xl border hairline bg-surface/40 space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 bg-background" maxLength={100} />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 bg-background" maxLength={255} />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="business">Business Type</Label>
            <Input id="business" placeholder="Clinic, Real Estate, Agency, etc." value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className="mt-2 bg-background" maxLength={100} />
            {errors.business && <p className="text-xs text-destructive mt-1">{errors.business}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 bg-background" maxLength={1000} />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
            Send Message <Send />
          </Button>
        </form>

        <div className="lg:col-span-2 space-y-4">
          <a
            href="https://wa.me/10000000000"
            target="_blank"
            rel="noreferrer"
            className="block p-6 rounded-2xl border hairline bg-surface/40 hover:border-accent/40 transition-colors"
          >
            <MessageCircle className="w-6 h-6 text-accent mb-4" />
            <div className="font-display text-lg font-semibold">Chat on WhatsApp</div>
            <p className="text-sm text-muted-foreground mt-1">Quick questions? Get a reply in minutes.</p>
          </a>
          <a
            href="https://cal.com"
            target="_blank"
            rel="noreferrer"
            className="block p-6 rounded-2xl border hairline bg-surface/40 hover:border-accent/40 transition-colors"
          >
            <Calendar className="w-6 h-6 text-accent mb-4" />
            <div className="font-display text-lg font-semibold">Book a Strategy Call</div>
            <p className="text-sm text-muted-foreground mt-1">30-minute call. We'll map your business and outline next steps.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-accent">Pick a slot →</div>
          </a>
          <div className="p-6 rounded-2xl border hairline bg-surface/40">
            <Mail className="w-5 h-5 text-accent mb-3" />
            <div className="text-sm text-muted-foreground">hello@cognosy.ai</div>
            <MapPin className="w-5 h-5 text-accent mb-3 mt-5" />
            <div className="text-sm text-muted-foreground">Serving ambitious companies worldwide</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
