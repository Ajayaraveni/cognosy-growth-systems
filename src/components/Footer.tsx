import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import logo from "@/assets/cognosy-logo-light.png";

const serviceLinks = [
  { label: "AI Automation", slug: "ai-automation" },
  { label: "AI Customer Engagement", slug: "ai-customer-engagement" },
  { label: "RAG Systems", slug: "rag-systems" },
  { label: "Custom AI Solutions", slug: "custom-ai" },
];

export const Footer = () => (
  <footer className="relative mt-32 border-t hairline overflow-hidden">
    <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-hero-glow opacity-40" aria-hidden="true" />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
      {/* Brand */}
      <div className="md:col-span-4">
        <Link to="/" className="flex items-center" aria-label="Cognosy home">
          <img src={logo} alt="Cognosy" className="h-14 w-auto" />
        </Link>
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
          Cognosy helps businesses automate operations, engage customers intelligently, and deploy practical AI systems that deliver measurable results.
        </p>
        <div className="mt-6 inline-flex items-center gap-2.5 rounded-full glass px-3.5 py-1.5 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          <span className="text-muted-foreground">Global AI Implementation Partner</span>
        </div>
      </div>

      {/* Services */}
      <div className="md:col-span-2">
        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/85 mb-5">Services</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {serviceLinks.map((s) => (
            <li key={s.slug}>
              <Link to={`/services#${s.slug}`} className="hover:text-foreground transition-colors">{s.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="md:col-span-3">
        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/85 mb-5">Contact</h4>
        <ul className="space-y-3.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <MapPin className="w-3.5 h-3.5 mt-0.5 text-accent/80 flex-shrink-0" />
            <div>
              <div className="text-foreground/80 text-xs uppercase tracking-wider mb-0.5">India</div>
              <a href="tel:+919885529998" className="hover:text-foreground transition-colors">+91 98855 29998</a>
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <MapPin className="w-3.5 h-3.5 mt-0.5 text-accent/80 flex-shrink-0" />
            <div>
              <div className="text-foreground/80 text-xs uppercase tracking-wider mb-0.5">USA</div>
              <a href="tel:+16282359625" className="hover:text-foreground transition-colors">+1 628 235 9625</a>
            </div>
          </li>
          <li className="flex items-center gap-2.5">
            <Mail className="w-3.5 h-3.5 text-accent/80 flex-shrink-0" />
            <a href="mailto:hello@cognosy.com" className="hover:text-foreground transition-colors">hello@cognosy.com</a>
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="md:col-span-3">
        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/85 mb-5">Quick Links</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
          <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
          <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
          <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          <li>
            <a
              href="https://academy.cognosy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors group"
            >
              Cognosy Academy
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </li>
        </ul>
        <div className="mt-6">
          <ContactDialog
            trigger={
              <Button variant="hero" size="sm" className="rounded-full px-5">Book a Strategy Call</Button>
            }
          />
        </div>
      </div>
    </div>

    <div className="relative border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-3 sm:justify-between">
        <span>© 2025 Cognosy. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);
