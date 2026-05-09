import { ReactNode, useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().min(1, "Please enter your email").email("Please enter a valid email").max(255),
  business: z.string().trim().min(1, "Please tell us your business type").max(100),
  message: z.string().trim().min(1, "Please write a short message").max(1000),
});
type FormState = z.infer<typeof schema>;

interface Props {
  trigger: ReactNode;
  title?: string;
  description?: string;
}

export const ContactDialog = ({ trigger, title = "Book a Strategy Call", description = "Tell us about your business. We respond within one business day." }: Props) => {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", email: "", business: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submittedName, setSubmittedName] = useState("");

  const update = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const fe: Partial<Record<keyof FormState, string>> = {};
      r.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormState;
        if (!fe[key]) fe[key] = i.message;
      });
      setErrors(fe);
      toast.error("Please fix the highlighted fields.");
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
          name: r.data.name,
          email: r.data.email,
          business_type: r.data.business,
          message: r.data.message,
          subject: `New inquiry from ${r.data.name} (${r.data.business})`,
          from_name: "Cognosy Website",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Submission failed");
      setSubmittedName(r.data.name);
      setForm({ name: "", email: "", business: "", message: "" });
      setOpen(false);
      setConfirm(true);
      toast.success("Message sent successfully.");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-lg bg-background border hairline">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl tracking-tight">{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <form onSubmit={submit} noValidate className="space-y-4 pt-2">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cd-name" className="text-xs text-muted-foreground">Name</Label>
                <Input id="cd-name" value={form.name} onChange={(e) => update("name", e.target.value)} maxLength={100} aria-invalid={!!errors.name} className="mt-1.5" />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="cd-email" className="text-xs text-muted-foreground">Email</Label>
                <Input id="cd-email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} maxLength={255} aria-invalid={!!errors.email} className="mt-1.5" />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="cd-business" className="text-xs text-muted-foreground">Business Type</Label>
              <Input id="cd-business" placeholder="Clinic, Real Estate, Agency, etc." value={form.business} onChange={(e) => update("business", e.target.value)} maxLength={100} aria-invalid={!!errors.business} className="mt-1.5" />
              {errors.business && <p className="text-xs text-destructive mt-1">{errors.business}</p>}
            </div>
            <div>
              <Label htmlFor="cd-message" className="text-xs text-muted-foreground">Message</Label>
              <Textarea id="cd-message" rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} maxLength={1000} aria-invalid={!!errors.message} className="mt-1.5" />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
              {submitting ? "Sending..." : <>Send Message <Send /></>}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={confirm} onOpenChange={setConfirm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-6 h-6 text-accent" aria-hidden="true" />
            </div>
            <DialogTitle className="text-center font-display text-2xl">
              Thank you{submittedName ? `, ${submittedName}` : ""}!
            </DialogTitle>
            <DialogDescription className="text-center">
              Your message has been sent to{" "}
              <span className="text-foreground font-medium">hello@cognosy.com</span>. We'll respond within one business day.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button variant="hero" onClick={() => setConfirm(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
