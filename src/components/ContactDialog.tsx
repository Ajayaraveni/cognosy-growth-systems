import { ReactNode, useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

interface Props {
  trigger: ReactNode;
  title?: string;
  description?: string;
}

const initial: FormState = { name: "", company: "", email: "", phone: "", service: "", challenge: "" };

export const ContactDialog = ({ trigger, title = "Book a Strategy Call", description = "Tell us about your business. Our team will contact you within 24 hours." }: Props) => {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

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
      setForm(initial);
      setOpen(false);
      setConfirm(true);
      toast.success("Request received.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const labelCls = "text-[10px] uppercase tracking-[0.2em] text-muted-foreground";
  const inputCls = "mt-1.5 bg-background/40 focus-visible:ring-accent";

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-xl glass-strong border-hairline max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl tracking-tight">{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <form onSubmit={submit} noValidate className="space-y-4 pt-2">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cd-name" className={labelCls}>Full Name</Label>
                <Input id="cd-name" value={form.name} onChange={(e) => update("name", e.target.value)} maxLength={100} aria-invalid={!!errors.name} className={inputCls} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="cd-company" className={labelCls}>Company Name</Label>
                <Input id="cd-company" value={form.company} onChange={(e) => update("company", e.target.value)} maxLength={150} aria-invalid={!!errors.company} className={inputCls} />
                {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cd-email" className={labelCls}>Email</Label>
                <Input id="cd-email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} maxLength={255} aria-invalid={!!errors.email} className={inputCls} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="cd-phone" className={labelCls}>Phone Number</Label>
                <Input id="cd-phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} maxLength={30} aria-invalid={!!errors.phone} className={inputCls} />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="cd-service" className={labelCls}>Service Interested In</Label>
              <Select value={form.service} onValueChange={(v) => update("service", v)}>
                <SelectTrigger id="cd-service" className={`${inputCls} h-10`} aria-invalid={!!errors.service}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
                  ))}
                  <SelectItem value="Not sure — recommend the right one">Not sure — recommend the right one</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
            </div>
            <div>
              <Label htmlFor="cd-challenge" className={labelCls}>Business Challenge</Label>
              <Textarea id="cd-challenge" rows={4} placeholder="What problem are you trying to solve?" value={form.challenge} onChange={(e) => update("challenge", e.target.value)} maxLength={1000} aria-invalid={!!errors.challenge} className={inputCls} />
              {errors.challenge && <p className="text-xs text-destructive mt-1">{errors.challenge}</p>}
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full rounded-full" disabled={submitting}>
              {submitting ? "Sending..." : <>Request Strategy Call <Send /></>}
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
            <DialogTitle className="text-center font-display text-2xl">Thank you.</DialogTitle>
            <DialogDescription className="text-center">
              Our team will contact you within 24 hours.
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
