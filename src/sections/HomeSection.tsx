import React, { useEffect, useState } from "react";

const CHIPS = ["React", "TypeScript", "Node", "UI, UX", "APIs", "Performance"];

const HeroSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Entrada em cascata sem depender de classes de delay do Tailwind.
  const enter = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 700ms cubic-bezier(.19,1,.22,1) ${delay}ms, transform 900ms cubic-bezier(.19,1,.22,1) ${delay}ms`,
  });

  return (
    // data-blob posiciona a esfera do fundo enquanto esta section está ativa.
    // Formato: "x, y, escala" — x e y são frações da largura/altura da viewport.
    <section
      id="home"
      data-blob="0.32,0.08,1.05"
      className="relative min-h-screen overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[78rem] flex-col px-6 pt-24 sm:px-8">
        <div className="flex flex-1 items-center">
          <div className="grid w-full grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1
                className="mt-10 text-[3.2rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-[4.2rem] md:text-[3.2rem]"
                style={enter(0)}
              >
                Desenvolvedor
                <br />
                de Software
              </h1>

              <p
                className="mt-7 max-w-[42rem] text-base leading-relaxed text-white/85 sm:text-lg"
                style={enter(150)}
              >
                Construo aplicações web com React e TypeScript, do desenho da
                interface à integração com APIs, com foco em performance e
                experiência do usuário.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="/curriculo.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full bg-orange-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:bg-orange-500"
                  style={enter(250)}
                >
                  Baixar currículo
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  style={enter(320)}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("projects");
                    if (section) {
                      const y =
                        section.getBoundingClientRect().top + window.scrollY - 72;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  Ver projetos
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {CHIPS.map((t, i) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur"
                    style={enter(i * 75 + 400)}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Coluna vazia: deixa o blob do fundo respirar à direita */}
            <div className="hidden lg:col-span-4 lg:block" />
          </div>
        </div>

        {/* Indicador de scroll */}
        <div
          className="pb-10 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/35"
          style={enter(900)}
        >
          Role para explorar
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
