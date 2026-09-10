import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Atraso em ms, para escalonar itens de uma mesma lista. */
  delay?: number;
  /** Distância inicial em px no eixo Y. */
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
};

/**
 * Revela o conteúdo quando ele entra na viewport.
 * Anima uma vez só — reanimar a cada scroll cansa a leitura.
 */
const Reveal: React.FC<Props> = ({
  children,
  delay = 0,
  y = 28,
  className = "",
  as: Tag = "div",
}) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 700ms cubic-bezier(.19,1,.22,1) ${delay}ms, transform 900ms cubic-bezier(.19,1,.22,1) ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
