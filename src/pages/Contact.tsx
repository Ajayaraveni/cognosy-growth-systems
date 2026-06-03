import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { services } from "@/data/services";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your full name").max(100),
  company: z.string().trim().min(1, "Please enter your company name").max(150),
  email: z.string().trim().min(1, "Please enter your email").email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(30),
  service: z.string().trim().min(1, "Please select a service"),
  challenge: z.string().trim().min(1, "Please describe your business challenge").max(1000),
});

type FormState = z.infer<typeof schema>;
const initial: FormState = { name: "", company: "", email: "", phone: "", service: "", challenge: "" };

const Contact = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const fe: Partial<Record<keyof FormState, string>> = {};
      r.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormState;
        if (!fe[key]) fe[key] = i.message;
      });
      setErrors(fe);
      toast.error("Please fix the highlighted fields and try again.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "5324f703-cd62-4fc4-80a9-84f637aa8345",
          full_name: r.data.name,
          company_name: r.data.company,
          email: r.data.email,
          phone_number: r.data.phone,
          service_interested_in: r.data.service,
          business_challenge: r.data.challenge,
          subject: `New Strategy Call Request — ${r.data.name} (${r.data.company})`,
          from_name: "Cognosy Website",
          to: "hello@cognosy.com",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Submission failed");
      setConfirmOpen(true);
      toast.success("Request received.");
      setForm(initial);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const labelCls = "text-[10px] uppercase tracking-[0.2em] text-muted-foreground";
  const inputCls = "mt-2 bg-background/40 border-hairline h-11 focus-visible:ring-accent";

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-hero-glow opacity-70" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 md:pt-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] font-medium text-accent mb-6 uppercase tracking-[0.18em]">
            <span className="w-1 h-1 rounded-full bg-accent" /> Contact
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1] max-w-4xl">
            Let's build your AI <span className="text-accent">growth system.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Tell us about your business. Our team will contact you within 24 hours.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 grid lg:grid-cols-5 gap-6">
        <form onSubmit={handleSubmit} noValidate className="lg:col-span-3 grad-border glass p-8 md:p-12 space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name" className={labelCls}>Full Name</Label>
              <Input id="name" aria-invalid={!!errors.name} value={form.name} onChange={(e) => update("name", e.target.value)} className={inputCls} maxLength={100} />
              {errors.name && <p role="alert" className="text-xs text-destructive mt-1.5">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="company" className={labelCls}>Company Name</Label>
              <Input id="company" aria-invalid={!!errors.company} value={form.company} onChange={(e) => update("company", e.target.value)} className={inputCls} maxLength={150} />
              {errors.company && <p role="alert" className="text-xs text-destructive mt-1.5">{errors.company}</p>}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="email" className={labelCls}>Email</Label>
              <Input id="email" type="email" aria-invalid={!!errors.email} value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls} maxLength={255} />
              {errors.email && <p role="alert" className="text-xs text-destructive mt-1.5">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone" className={labelCls}>Phone Number</Label>
              <Input id="phone" type="tel" aria-invalid={!!errors.phone} value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls} maxLength={30} />
              {errors.phone && <p role="alert" className="text-xs text-destructive mt-1.5">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="service" className={labelCls}>Service Interested In</Label>
            <Select value={form.service} onValueChange={(v) => update("service", v)}>
              <SelectTrigger id="service" className={`${inputCls} h-11`} aria-invalid={!!errors.service}>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
                ))}
                <SelectItem value="Not sure — recommend the right one">Not sure — recommend the right one</SelectItem>
              </SelectContent>
            </Select>
            {errors.service && <p role="alert" className="text-xs text-destructive mt-1.5">{errors.service}</p>}
          </div>
          <div>
            <Label htmlFor="challenge" className={labelCls}>Business Challenge</Label>
            <Textarea id="challenge" rows={6} placeholder="What problem are you trying to solve?" aria-invalid={!!errors.challenge} value={form.challenge} onChange={(e) => update("challenge", e.target.value)} className="mt-2 bg-background/40 border-hairline focus-visible:ring-accent" maxLength={1000} />
            {errors.challenge && <p role="alert" className="text-xs text-destructive mt-1.5">{errors.challenge}</p>}
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto rounded-full" disabled={submitting}>
            {submitting ? "Sending..." : <>Request Strategy Call <Send /></>}
          </Button>
        </form>

        <aside className="lg:col-span-2 space-y-5">
          <div className="grad-border glass p-8">
            <div className="text-[10px] uppercase tracking-[0.22em] text-accent mb-4">Direct Contact</div>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent/80" />
                <div>
                  <div className="text-foreground/70 text-xs uppercase tracking-wider">India</div>
                  <a href="tel:+919885529998" className="text-foreground hover:text-accent transition-colors">+91 98855 29998</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent/80" />
                <div>
                  <div className="text-foreground/70 text-xs uppercase tracking-wider">USA</div>
                  <a href="tel:+16282359625" className="text-foreground hover:text-accent transition-colors">+1 628 235 9625</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent/80" />
                <div>
                  <div className="text-foreground/70 text-xs uppercase tracking-wider">Email</div>
                  <a href="mailto:hello@cognosy.com" className="text-foreground hover:text-accent transition-colors">hello@cognosy.com</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="grad-border glass p-8">
            <div className="w-11 h-11 rounded-xl bg-accent/15 grid place-items-center mb-4">
              <MessageSquare className="w-5 h-5 text-accent" />
            </div>
            <div className="font-display text-xl font-semibold tracking-tight">Talk to an AI Automation Expert</div>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Prefer a quick chat? Reach us on WhatsApp — we typically reply within minutes during business hours.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-6 w-full rounded-full">
              <a
                href="https://wa.me/919885529998?text=Hi%20Cognosy%2C%20I%E2%80%99d%20like%20to%20talk%20to%20an%20AI%20Automation%20Expert."
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </aside>
      </section>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-6 h-6 text-accent" aria-hidden="true" />
            </div>
            <DialogTitle className="text-center font-display text-2xl">Thank you.</DialogTitle>
            <DialogDescription className="text-center">
              Our team will contact you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button variant="hero" onClick={() => setConfirmOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Contact;
