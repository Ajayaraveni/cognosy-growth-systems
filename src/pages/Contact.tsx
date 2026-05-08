import { useState } from "react";
import { z } from "zod";
import { Calendar, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ContactDialog } from "@/components/ContactDialog";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().min(1, "Please enter your email").email("Please enter a valid email address").max(255),
  business: z.string().trim().min(1, "Please tell us your business type").max(100),
  message: z.string().trim().min(1, "Please write a short message").max(1000),
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
        <form onSubmit={handleSubmit} noValidate className="lg:col-span-3 p-8 md:p-12 rounded-2xl border hairline bg-surface/30 space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</Label>
              <Input id="name" required aria-required="true" aria-invalid={!!errors.name} value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-2 bg-background h-11" maxLength={100} />
              {errors.name && <p role="alert" className="text-xs text-destructive mt-1.5">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</Label>
              <Input id="email" type="email" required aria-required="true" aria-invalid={!!errors.email} value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-2 bg-background h-11" maxLength={255} />
              {errors.email && <p role="alert" className="text-xs text-destructive mt-1.5">{errors.email}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="business" className="text-xs uppercase tracking-wider text-muted-foreground">Business Type</Label>
            <Input id="business" required aria-required="true" aria-invalid={!!errors.business} placeholder="Clinic, Real Estate, Agency, etc." value={form.business} onChange={(e) => update("business", e.target.value)} className="mt-2 bg-background h-11" maxLength={100} />
            {errors.business && <p role="alert" className="text-xs text-destructive mt-1.5">{errors.business}</p>}
          </div>
          <div>
            <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</Label>
            <Textarea id="message" required aria-required="true" aria-invalid={!!errors.message} rows={6} value={form.message} onChange={(e) => update("message", e.target.value)} className="mt-2 bg-background" maxLength={1000} />
            {errors.message && <p role="alert" className="text-xs text-destructive mt-1.5">{errors.message}</p>}
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
            Send Message <Send />
          </Button>
        </form>

        <div className="lg:col-span-2">
          <div className="p-8 rounded-2xl border hairline bg-surface/30 h-full flex flex-col">
            <Calendar className="w-6 h-6 text-accent mb-5" />
            <div className="font-display text-2xl font-semibold tracking-tight">Book a Strategy Call</div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
              30-minute call. We'll map your business, identify the highest-leverage systems, and outline a clear next step.
            </p>
            <ContactDialog
              trigger={
                <Button variant="hero" size="lg" className="mt-8 w-full">
                  Book Strategy Call <ArrowRight />
                </Button>
              }
            />
          </div>
        </div>
      </section>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-6 h-6 text-accent" aria-hidden="true" />
            </div>
            <DialogTitle className="text-center font-display text-2xl">
              Thank you{submittedName ? `, ${submittedName}` : ""}!
            </DialogTitle>
            <DialogDescription className="text-center">
              Your message is ready in your email app, addressed to{" "}
              <span className="text-foreground font-medium">hello@cognosy.com</span>. Hit send and we'll
              respond within one business day.
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
