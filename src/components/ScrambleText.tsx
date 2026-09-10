import React, { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>[]{}#*+=-_";

type Props = {
  text: string;
  className?: string;
  /** Duração total do embaralhamento, em ms. */
  duration?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
};

/**
 * Efeito de texto embaralhado do ockom.webflow.io (scramble.js).
 * A versão original sorteia o momento de revelar cada letra, o que faz o texto
 * "resolver" de forma irregular. Aqui a revelação é da esquerda para a direita
 * com uma borda de ruído, que fica mais legível em títulos curtos.
 */
const ScrambleText: React.FC<Props> = ({
  text,
  className = "",
  duration = 900,
  as: Tag = "span",
}) => {
  const ref = useRef<HTMLElement>(null);
  const [output, setOutput] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const run = () => {
      if (started.current) return;
      started.current = true;

      const chars = text.split("");
      const start = performance.now();
      let raf = 0;

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        // Ponto de corte avança pelo texto; letras à frente ainda embaralham.
        const edge = t * (chars.length + 4);

        setOutput(
          chars
            .map((c, i) => {
              if (c === " ") return c;
              if (i < edge - 4) return c;
              if (i > edge) return " ";
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("")
        );

        if (t < 1) raf = requestAnimationFrame(tick);
        else setOutput(text);
      };

      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [text, duration]);

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {/* O texto real fica acessível a leitores de tela e ao SEO. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{output}</span>
    </Tag>
  );
};

export default ScrambleText;
