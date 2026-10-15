import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Youtube, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import logo from "@/assets/cognosy-logo-updated.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://www.instagram.com/cognosy_ai_/", label: "Instagram", Icon: Instagram },
  { href: "https://www.youtube.com/@CognosyAI", label: "YouTube", Icon: Youtube },
  { href: "https://twitter.com", label: "Twitter", Icon: Twitter },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl transition-all duration-500 px-4 lg:px-6 ${
            scrolled
              ? "glass-strong h-16 shadow-[0_10px_40px_-20px_hsl(0_0%_0%/0.6)]"
              : "bg-transparent h-24"
          }`}
        >
          <Link to="/" className="flex items-center gap-3" aria-label="Cognosy AI home">
            <img src={logo} alt="Cognosy AI — Innovation. Growth." className={`w-auto transition-all duration-500 ${scrolled ? "h-14" : "h-20"}`} />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-px w-6 bg-gradient-to-r from-[hsl(217_91%_60%)] to-[hsl(258_90%_66%)]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <ContactDialog
              trigger={
                <Button variant="hero" size="sm" className="rounded-full px-5">
                  Book a Call <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              }
            />
          </div>

          <button className="md:hidden text-foreground p-2" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl glass-strong overflow-hidden">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-sm rounded-lg ${isActive ? "bg-secondary text-foreground" : "text-muted-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="flex items-center justify-between px-3 pt-3 mt-2 border-t hairline">
              <div className="flex items-center gap-1">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <ContactDialog
                trigger={
                  <Button variant="hero" size="sm" className="rounded-full">Book a Call</Button>
                }
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
