import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import logo from "@/assets/cognosy-logo-light.png";

export const Footer = () => (
  <footer className="relative mt-32 border-t hairline overflow-hidden">
    <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-hero-glow opacity-50" aria-hidden="true" />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <Link to="/" className="flex items-center" aria-label="Cognosy AI home">
          <img src={logo} alt="Cognosy AI" className="h-16 w-auto" />
        </Link>
        <p className="mt-5 text-base text-muted-foreground max-w-md leading-relaxed">
          AI Business Growth Systems for ambitious companies worldwide.
        </p>
        <div className="mt-6 inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          <span className="text-muted-foreground">Global AI Growth Partner</span>
        </div>
        <a
          href="mailto:hello@cognosy.com"
          className="mt-6 group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-4 h-4" />
          hello@cognosy.com
          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </a>
      </div>

      <div className="md:col-span-2">
        <h4 className="text-xs uppercase tracking-widest text-foreground/80 mb-5">Company</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
          <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
          <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div className="md:col-span-3">
        <h4 className="text-xs uppercase tracking-widest text-foreground/80 mb-5">Services</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li>AI Agents</li>
          <li>AI Chatbots</li>
          <li>WhatsApp Automation</li>
          <li>Voice AI</li>
          <li>Workflow Automation</li>
          <li>RAG Systems</li>
        </ul>
      </div>

      <div className="md:col-span-2">
        <h4 className="text-xs uppercase tracking-widest text-foreground/80 mb-5">More</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
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
      </div>
    </div>

    <div className="relative border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-3 sm:justify-between">
        <span>© 2025 Cognosy AI. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);
