import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t hairline mt-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold text-lg">
          <span className="w-7 h-7 rounded-lg bg-accent grid place-items-center text-accent-foreground font-bold">C</span>
          Cognosy <span className="text-muted-foreground font-normal">AI</span>
        </Link>
        <p className="mt-4 text-sm text-muted-foreground max-w-sm">
          AI Business Growth Systems for ambitious companies in the US, UK, UAE, Canada and Australia.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
          <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
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
          <li>Training</li>
        </ul>
      </div>
    </div>
    <div className="border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} Cognosy AI. All rights reserved.</span>
        <span>Built for global growth.</span>
      </div>
    </div>
  </footer>
);
