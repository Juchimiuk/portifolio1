import React, { useEffect, useRef, useState } from "react";
import { FaCheck, FaGithub, FaLinkedin, FaRegCopy, FaWhatsapp } from "react-icons/fa6";
import { contacts, navHref, navItems, profile } from "../data/profile";

/**
 * Rodapé no padrão do ritza.com.br:
 * - fica parado no fundo da janela (sticky) e a página desliza por cima dele,
 *   com os cantos de baixo arredondados — só quando ele cabe inteiro na tela;
 * - o nome gigante ocupa a largura toda e as letras sobem uma a uma quando
 *   o rodapé aparece rolando para baixo.
 */
const Footer: React.FC<{ home?: boolean }> = ({ home = true }) => {
  const footerRef = useRef<HTMLElement>(null);
  const wordRef = useRef<HTMLParagraphElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const footer = footerRef.current;
    const word = wordRef.current;
    const inner = innerRef.current;
    const main = document.querySelector("main");
    if (!footer || !word || !inner || !main) return;

    // Só gruda se couber inteiro na janela; senão o topo nunca apareceria.
    const fitFooter = () =>
      footer.classList.toggle("is-reveal", footer.offsetHeight <= window.innerHeight);

    // Mede a palavra a 100px e escala até ocupar a largura do rodapé.
    const fitWord = () => {
      word.style.fontSize = "100px";
      const w = inner.getBoundingClientRect().width;
      if (w > 0) word.style.fontSize = `${(100 * word.clientWidth) / w}px`;
      fitFooter();
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastY = window.scrollY;

    const checkWord = () => {
      if (reduced) return;
      const y = window.scrollY;
      const goingDown = y >= lastY;
      lastY = y;
      const rect = word.getBoundingClientRect();
      // A parte descoberta do rodapé começa no que estiver mais abaixo:
      // a base do main ou o topo do rodapé.
      const uncoveredTop = Math.max(
        main.getBoundingClientRect().bottom,
        footer.getBoundingClientRect().top
      );
      const line = rect.top + rect.height / 2;
      if (goingDown && line < window.innerHeight && uncoveredTop < line) {
        word.classList.add("is-up");
      } else if (uncoveredTop >= window.innerHeight) {
        word.classList.remove("is-up");
      }
    };

    if (!reduced) word.classList.add("can-animate");
    fitWord();
    checkWord();
    document.fonts?.ready.then(fitWord);

    const onResize = () => {
      fitWord();
      checkWord();
    };
    window.addEventListener("scroll", checkWord, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", checkWord);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contacts.email.value);
      setCopied(true);
    } catch {
      window.location.href = contacts.email.href;
    }
  };

  const badges = [
    { ...contacts.github, icon: <FaGithub aria-hidden="true" />, small: "Código no" },
    { ...contacts.linkedin, icon: <FaLinkedin aria-hidden="true" />, small: "Perfil no" },
    { ...contacts.whatsapp, icon: <FaWhatsapp aria-hidden="true" />, small: "Conversar no" },
  ];

  return (
    <footer ref={footerRef} id="contato" data-dark className="site-footer">
      <div className="relative z-[1] mx-auto max-w-6xl px-5 sm:px-8">
        <div className="footer-panel">
          <div className="footer-brand">
            <h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-bold tracking-[-0.03em]">
              Vamos conversar?
            </h2>
            <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-white/70">
              Tem uma vaga, um projeto freelance ou uma ideia? O jeito mais rápido de falar comigo
              é por e-mail.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={contacts.email.href}
                className="font-display text-2xl font-semibold text-white underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal sm:text-3xl"
              >
                {contacts.email.value}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white hover:text-white"
              >
                {copied ? (
                  <FaCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                ) : (
                  <FaRegCopy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                <span aria-live="polite">{copied ? "E-mail copiado" : "Copiar e-mail"}</span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <a
                  key={b.label}
                  href={b.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-badge"
                >
                  {b.icon}
                  <span className="flex flex-col">
                    <small>{b.small}</small>
                    {b.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-col" aria-label="Navegação do rodapé">
            <h4>Navegação</h4>
            {navItems.map((n) => (
              <a key={n.id} href={navHref(n.id, home)}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="footer-col">
            <h4>Informações</h4>
            <p className="text-[15px] text-white/72">{profile.location}</p>
            <p className="flex items-center gap-2 text-[15px] text-white/72">
              <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-emerald-500 text-emerald-500" />
              {profile.availability}
            </p>
            <a href={contacts.whatsapp.href} target="_blank" rel="noreferrer">
              {contacts.whatsapp.value}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {profile.name} · {profile.location}
          </span>
          <span>Feito com React e TypeScript</span>
          <a href={profile.cv} download className="footer-pill">
            Baixar currículo
          </a>
          <a href={home ? "#inicio" : "#"} className="footer-top">
            Voltar ao topo <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>

      <p ref={wordRef} className="footer-word" aria-hidden="true">
        <span ref={innerRef} className="inline-block">
          {[...profile.name].map((ch, i) => (
            <span
              key={i}
              className="footer-word-char"
              style={{ "--i": i } as React.CSSProperties}
            >
              {ch}
            </span>
          ))}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
