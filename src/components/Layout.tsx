import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen flex flex-col">
    <div className="pointer-events-none fixed inset-0 bg-noise opacity-[0.025] z-0" aria-hidden="true" />
    <div className="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-28">{children}</main>
      <Footer />
    </div>
    <WhatsAppFloat />
  </div>
);
