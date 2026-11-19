import { useEffect, type CSSProperties } from "react";

/**
 * Um único IntersectionObserver para a página inteira.
 * Qualquer elemento com o atributo `data-reveal` aparece ao entrar na tela,
 * uma vez só. Atraso opcional via `style={delay(120)}`.
 *
 * Um MutationObserver registra elementos que surgirem depois da primeira
 * renderização (conteúdo trocado, hot reload): sem isso eles ficariam
 * invisíveis para sempre, com opacity 0.
 */
export function useReveal() {
  useEffect(() => {
    const showAll = () =>
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      showAll();
      const mo = new MutationObserver(showAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    // Controle por execução do efeito (e não atributo no DOM), para o
    // StrictMode — que monta, desmonta e monta de novo — não pular ninguém.
    const seen = new WeakSet<Element>();
    const observeNew = () =>
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach((el) => {
          if (seen.has(el)) return;
          seen.add(el);
          io.observe(el);
        });

    observeNew();
    const mo = new MutationObserver(observeNew);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

/** Atalho para passar o atraso como variável CSS. */
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
