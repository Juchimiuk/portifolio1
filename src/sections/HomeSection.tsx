// src/components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Fundo estilo da referência */}
      <div className="absolute inset-0">
         <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C2D] via-[#0F2A44] to-[#123A66]" />
        {/* Glow suave */}
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-black/20 blur-3xl" />
        {/* Vinheta para dar profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/35" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[78rem] flex-col px-6 pt-10 sm:px-8">
        {/* Marca pequena no topo */}
        <div className="flex items-center justify-start">
          <span className="text-sm font-semibold tracking-[0.22em] text-white/85">
            JUCHIMIUK
          </span>
        </div>

        {/* Grid para manter aquele espaço grande da direita */}
        <div className="flex flex-1 items-center">
          <div className="grid w-full grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="mt-10 text-[3.2rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-[4.2rem] md:text-[5.2rem]">
                Desenvolvedor
                <br />
                Front End Junior
              </h1>

              <p className="mt-7 max-w-[42rem] text-base leading-relaxed text-white/85 sm:text-lg">
                Desenvolvedor Front End Junior com foco em produtos digitais, performance
                e experiência do usuário, construindo interfaces modernas e sistemas
                escaláveis.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="/curriculo.pdf"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#123A66] shadow-lg shadow-black/25 transition hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-white/25"
                >
                  Baixar currículo
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/20"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("projects");
                    if (section) {
                      const y = section.getBoundingClientRect().top + window.scrollY - 72;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  Ver projetos
                </a>
              </div>

              {/* Chips opcionais */}
              <div className="mt-10 flex flex-wrap gap-2">
                {["React", "TypeScript", "Node", "UI, UX", "APIs", "Performance"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Coluna vazia para dar respiro como na referência */}
            <div className="hidden lg:col-span-4 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
