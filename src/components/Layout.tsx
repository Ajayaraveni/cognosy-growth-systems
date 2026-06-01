import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen flex flex-col overflow-x-hidden">
    {/* Ambient blobs */}
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-[hsl(217_91%_60%/0.18)] blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[35rem] h-[35rem] rounded-full bg-[hsl(258_90%_66%/0.15)] blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-[hsl(190_95%_55%/0.10)] blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
    </div>
    <div className="pointer-events-none fixed inset-0 bg-noise opacity-[0.025] z-0" aria-hidden="true" />

    <div className="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-28">{children}</main>
      <Footer />
    </div>
    <WhatsAppFloat />
  </div>
);
