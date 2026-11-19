import React, { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

type Props = {
  text: string;
  className?: string;
  /** Duração total do embaralhamento, em ms. */
  duration?: number;
  /** Atraso antes de começar, em ms. */
  delay?: number;
};

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Texto que "resolve" da esquerda para a direita, com uma borda de ruído.
 *
 * O texto real fica por baixo, transparente, e é ele que define o tamanho:
 * a camada embaralhada fica por cima em posição absoluta. Assim a largura das
 * letras sorteadas nunca empurra o layout — importante num título grande.
 */
const ScrambleText: React.FC<Props> = ({
  text,
  className = "",
  duration = 1100,
  delay = 0,
}) => {
  const [output, setOutput] = useState(() => (prefersReduced() ? text : ""));
  const raf = useRef(0);

  useEffect(() => {
    if (prefersReduced()) {
      setOutput(text);
      return;
    }

    const chars = text.split("");
    let start = 0;

    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / duration);
      const edge = t * (chars.length + 3);

      setOutput(
        chars
          .map((c, i) => {
            if (c === " " || i < edge - 3) return c;
            if (i > edge) return "";
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (t < 1) raf.current = requestAnimationFrame(tick);
      else setOutput(text);
    };

    const timer = setTimeout(() => {
      raf.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf.current);
    };
  }, [text, duration, delay]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Define o tamanho e é o que leitores de tela e buscadores leem. */}
      <span className="text-transparent">{text}</span>
      <span aria-hidden="true" className="absolute inset-0 whitespace-nowrap">
        {output}
      </span>
    </span>
  );
};

export default ScrambleText;
