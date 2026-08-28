import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ScrollAnimator } from "@/components/ScrollAnimator";

const navItems = [
  { to: "/", label: "Accueil", num: "I" },
  { to: "/about", label: "À propos", num: "II" },
  { to: "/about", label: "Compétences", num: "III" },
  { to: "/projects", label: "Projets", num: "IV" },
  { to: "/contact", label: "Contact", num: "V" },
] as const;

export function SiteFrame({
  children,
  chapter,
  section,
  pageNumber: _pageNumber,
}: {
  children: ReactNode;
  chapter: string;
  section: string;
  pageNumber?: string;
}) {
  return (
    <div className="min-h-screen bg-[#071510] text-[#ffffff] font-sans antialiased selection:bg-[#22c55e] selection:text-[#071510] relative overflow-hidden">
      <ScrollAnimator />
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="aura-soft pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="aura-soft pointer-events-none absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }}
      />

      <div className="pt-5" aria-hidden />

      {/* ============== Navigation bar — premium framed ============== */}
      <header className="fade-up relative mx-auto max-w-7xl px-5 sm:px-8 pt-4">
        <div className="relative rounded-2xl bg-gradient-to-b from-[#071510] via-[#071510] to-[#0e2118] border-b border-[#22c55e]/15">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 min-w-0">
            {/* Brand */}
            <Link to="/" className="group flex items-center gap-2 sm:gap-3 min-w-0">
              <BrandMark className="h-9 w-9 shrink-0" />
              <span className="flex flex-col leading-none min-w-0">
                <span className="font-display text-sm sm:text-base lg:text-lg text-[#ffffff] group-hover:text-[#22c55e] transition truncate">
                  Elijah<span className="italic text-[#22c55e]">CodeX</span>
                </span>
                <span className="mt-1 hidden lg:inline text-[9px] tracking-[0.4em] uppercase text-[#ffffff]/50 truncate">
                  Front-End · Atelier
                </span>
              </span>
            </Link>

            {/* Nav links */}
            <nav className="hidden md:flex items-center justify-center gap-1 min-w-0">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  activeOptions={{ exact: true }}
                  activeProps={{
                    className: "text-[#22c55e] border-b-2 border-[#22c55e]",
                  }}
                  inactiveProps={{
                    className:
                      "text-[#ffffff]/70 border-b-2 border-transparent hover:text-[#22c55e]",
                  }}
                  className="link-lux inline-flex items-center px-2.5 lg:px-4 py-2 text-[9px] lg:text-[10px] tracking-[0.25em] lg:tracking-[0.35em] uppercase font-medium transition whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              to="/contact"
              className="btn-lux-outline hidden lg:inline-flex items-center gap-2 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#071510] px-4 lg:px-5 py-2 text-[10px] tracking-[0.3em] uppercase font-medium transition whitespace-nowrap shrink-0"
            >
              Me contacter
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Mobile nav */}
          <nav className="md:hidden flex flex-wrap items-center justify-center gap-1.5 border-t border-[#22c55e]/20 px-3 py-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-[#071510] bg-[#22c55e]" }}
                inactiveProps={{ className: "text-[#ffffff]/70" }}
                className="btn-lux-outline rounded-full px-2.5 py-1.5 text-[9px] tracking-[0.25em] uppercase border border-[#22c55e]/30 transition whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-enter relative mx-auto max-w-7xl px-4 sm:px-8 py-8 sm:py-12">
        <div className="mb-6 flex items-center justify-between gap-3 text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#22c55e]/70">
          <span className="truncate">{chapter}</span>
          <span className="hidden sm:inline-flex items-center gap-3 shrink-0">
            <span className="h-px w-10 bg-[#22c55e]/40" />
            {section}
            <span className="h-px w-10 bg-[#22c55e]/40" />
          </span>
          <span className="sm:hidden truncate text-right">{section}</span>
        </div>
        {children}
      </main>

      <footer className="relative mx-auto max-w-7xl px-4 sm:px-8 pb-10 pt-6">
        <div className="border-t border-[#22c55e]/20 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#ffffff]/55 text-center sm:text-left">
          <span className="truncate">© 2026 Pierre Constant Ake</span>
          <span className="text-center text-[#22c55e]/80 truncate">
            Développeur Front-End · Intelligence Artificielle
          </span>
          <span className="sm:text-right truncate">Abidjan — CI</span>
        </div>
      </footer>
    </div>
  );
}

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 40 40" className={className} fill="none">
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="10"
        fill="#0e2118"
        stroke="#22c55e"
        strokeWidth="1.5"
      />
      <path
        d="M20 9 L29 15 V25 L20 31 L11 25 V15 Z"
        stroke="#22c55e"
        strokeWidth="1.75"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 20 L19 23 L25 16"
        stroke="#d4af37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
