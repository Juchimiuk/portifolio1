import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projetos", href: "#projects" },
  { label: "Sobre", href: "#resume" },
  { label: "Contato", href: "#contact" },
];

const smoothScrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    smoothScrollTo(href.slice(1));
  };

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[78rem] -translate-x-1/2">
      <div
        className={[
          "flex h-14 items-center justify-between rounded-full px-3 pl-6 transition-all duration-300",
          scrolled
            ? "bg-white/5 shadow-lg shadow-black/20 ring-1 ring-white/10 backdrop-blur-md"
            : "bg-transparent shadow-none ring-0 backdrop-blur-0",
        ].join(" ")}
      >
        <div className="flex items-center gap-8">
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="flex items-center"
          >
            <motion.div
              layoutId="brand-logo"
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
              className="flex items-center gap-2"
            >
              <span className="text-base tracking-wide font-semibold text-orange-500">
                JUCHIMIUK
              </span>
            </motion.div>
          </a>
        </div>

        <div>
          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Navegação principal"
          >
            {navItems.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/curriculo.pdf"
            download
            className="hidden rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 md:inline-flex"
          >
            Baixar CV
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white md:hidden"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navegação mobile"
          className="mt-2 overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/10 ring-1 ring-black/5 md:hidden"
        >
          <div className="flex flex-col p-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/curriculo.pdf"
              download
              className="mt-2 rounded-full bg-gray-900 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Baixar CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
