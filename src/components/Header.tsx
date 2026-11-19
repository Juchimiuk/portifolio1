import React, { useEffect, useRef, useState } from "react";
import { navHref, navItems, profile } from "../data/profile";

/**
 * Header flutuante em pílula. Transparente no topo; ao rolar ganha fundo,
 * borda e sombra. Quando passa por cima de uma área escura (qualquer
 * elemento com `data-dark`), inverte as cores para continuar legível.
 */
const Header: React.FC<{ home?: boolean }> = ({ home = true }) => {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const darkEls = Array.from(document.querySelectorAll<HTMLElement>("[data-dark]"));

    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const h = headerRef.current;
      if (!h) return;
      const r = h.getBoundingClientRect();
      const middle = r.top + 28; // meio da pílula (h-14)
      setOnDark(
        darkEls.some((el) => {
          const d = el.getBoundingClientRect();
          return d.top <= middle && d.bottom >= middle;
        })
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Marca no menu a seção que está no meio da tela.
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Fecha o menu mobile com Esc.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const dark = onDark && !open;

  const pill = !scrolled && !open
    ? "bg-transparent ring-transparent"
    : dark
      ? "bg-ink-soft/90 ring-white/10 shadow-lg shadow-black/30"
      : "bg-surface/90 ring-line shadow-lg shadow-ink/[0.06]";

  return (
    <header
      ref={headerRef}
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2"
    >
      <div
        className={[
          "flex h-14 items-center justify-between rounded-full pr-2 pl-6 ring-1 backdrop-blur-sm transition-[background-color,box-shadow,color] duration-300",
          pill,
        ].join(" ")}
      >
        <a
          href={home ? "#inicio" : "/"}
          className={[
            "font-display text-lg font-bold tracking-tight transition-colors duration-300",
            dark ? "text-white" : "text-ink",
          ].join(" ")}
          onClick={() => setOpen(false)}
        >
          {profile.name}
          <span className="text-signal">.</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={navHref(item.id, home)}
                    aria-current={isActive ? "true" : undefined}
                    className={[
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                      dark
                        ? isActive ? "text-white" : "text-white/60 hover:text-white"
                        : isActive ? "text-ink" : "text-graphite hover:text-ink",
                    ].join(" ")}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={[
                        "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-signal transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      ].join(" ")}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            download
            className={[
              "hidden rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 md:inline-flex",
              dark ? "bg-white text-ink hover:bg-white/85" : "bg-ink text-white hover:bg-ink-soft",
            ].join(" ")}
          >
            Baixar currículo
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 md:hidden",
              dark ? "bg-white text-ink" : "bg-ink text-white",
            ].join(" ")}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="mt-2 overflow-hidden rounded-3xl bg-surface shadow-lg shadow-ink/10 ring-1 ring-line md:hidden"
        >
          <ul className="flex flex-col p-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={navHref(item.id, home)}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-display text-xl font-semibold text-ink hover:bg-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.cv}
                download
                className="mt-2 block rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Baixar currículo
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
