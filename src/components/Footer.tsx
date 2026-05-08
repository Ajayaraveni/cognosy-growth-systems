import { Link } from "react-router-dom";

import logo from "@/assets/cognosy-logo-light.png";

export const Footer = () => (
  <footer className="border-t hairline mt-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-5 gap-12">
      <div className="md:col-span-2">
        <Link to="/" className="flex items-center" aria-label="Cognosy AI home">
          <img src={logo} alt="Cognosy AI" className="h-20 w-auto" />
        </Link>
        <p className="mt-4 text-sm text-muted-foreground max-w-sm">
          AI Business Growth Systems for ambitious companies worldwide.
        </p>
        <div className="mt-5 space-y-1 text-sm text-muted-foreground">
          <div>Global AI Growth Partner</div>
          <div>
            Email: <a href="mailto:hello@cognosy.com" className="hover:text-foreground">hello@cognosy.com</a>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
          <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Services</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>AI Integration</li>
          <li>AI Automation</li>
          <li>SEO / AEO / GEO</li>
          <li>Personal Branding</li>
          <li>Trainings</li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">More</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="https://academy.cognosy.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Cognosy Academy</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-3 sm:justify-between">
        <span>© 2025 Cognosy AI. All rights reserved.</span>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);
