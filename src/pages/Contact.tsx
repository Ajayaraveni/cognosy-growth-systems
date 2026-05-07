import { useState } from "react";
import { z } from "zod";
import { Calendar, MessageCircle, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Please enter a valid email address")
    .max(255, "Email must be under 255 characters"),
  business: z
    .string()
    .trim()
    .min(1, "Please tell us your business type")
    .max(100, "Business type must be under 100 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Please write a short message")
    .max(1000, "Message must be under 1000 characters"),
});

type FormState = z.infer<typeof schema>;

const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", business: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submittedName, setSubmittedName] = useState<string>("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fe: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormState;
        if (!fe[key]) fe[key] = i.message;
      });
      setErrors(fe);
      toast.error("Please fix the highlighted fields and try again.");
      return;
    }
    setErrors({});
    const subject = `New inquiry from ${result.data.name} (${result.data.business})`;
    const body = `Name: ${result.data.name}\nEmail: ${result.data.email}\nBusiness Type: ${result.data.business}\n\nMessage:\n${result.data.message}`;
    window.location.href = `mailto:hello@cognosy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmittedName(result.data.name);
    setConfirmOpen(true);
    toast.success("Message ready — your email app should now be open.");
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
        <form onSubmit={handleSubmit} noValidate className="lg:col-span-3 p-8 md:p-10 rounded-2xl border hairline bg-surface/40 space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Name <span aria-hidden="true" className="text-accent">*</span></Label>
              <Input id="name" required aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-2 bg-background" maxLength={100} />
              {errors.name && <p id="name-error" role="alert" className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email <span aria-hidden="true" className="text-accent">*</span></Label>
              <Input id="email" type="email" required aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-2 bg-background" maxLength={255} />
              {errors.email && <p id="email-error" role="alert" className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="business">Business Type <span aria-hidden="true" className="text-accent">*</span></Label>
            <Input id="business" required aria-required="true" aria-invalid={!!errors.business} aria-describedby={errors.business ? "business-error" : undefined} placeholder="Clinic, Real Estate, Agency, etc." value={form.business} onChange={(e) => update("business", e.target.value)} className="mt-2 bg-background" maxLength={100} />
            {errors.business && <p id="business-error" role="alert" className="text-xs text-destructive mt-1">{errors.business}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message <span aria-hidden="true" className="text-accent">*</span></Label>
            <Textarea id="message" required aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} rows={6} value={form.message} onChange={(e) => update("message", e.target.value)} className="mt-2 bg-background" maxLength={1000} />
            {errors.message && <p id="message-error" role="alert" className="text-xs text-destructive mt-1">{errors.message}</p>}
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
