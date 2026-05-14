import React, { useEffect, useState } from "react";

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
  const y = el.getBoundingClientRect().top + window.scrollY - 64;
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
    <header
      className={[
        "fixed top-0 left-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-black/40 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-[78rem] items-center justify-between px-6 sm:px-8">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="text-sm font-semibold tracking-[0.22em] text-orange-500"
        >
          JUCHIMIUK
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white md:hidden"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navegação mobile"
          className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-[78rem] flex-col px-6 py-4 sm:px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
