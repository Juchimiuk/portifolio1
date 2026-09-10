import React, { useMemo } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa6";
import Reveal from "../components/Reveal";
import ScrambleText from "../components/ScrambleText";

type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
};

type Education = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
};

const ResumeSection: React.FC = () => {
  const experiences = useMemo<Experience[]>(
    () => [
      {
        id: "e1",
        role: "Desenvolvedor de Software",
        company: "Index Administração de Condomínios",
        period: "2025 — Presente",
        description:
          "Desenvolvimento e manutenção de aplicações web internas com React e TypeScript, incluindo integração com APIs e melhorias de performance.",
      },
    ],
    []
  );

  const education = useMemo<Education[]>(
    () => [
      {
        id: "d1",
        degree: "Tecnólogo em Desenvolvimento de Sistemas",
        institution: "Senai SC",
        period: "2023 — 2024",
        description: "Foco em algoritmos, estruturas de dados e engenharia de software.",
      },
      {
        id: "d2",
        degree: "Cursando Analise e Desenvolvimento de Sistemas",
        institution: "Univali",
        period: "2025 — Presente",
      },
    ],
    []
  );

  return (
    <section
      id="resume"
      data-blob="0.24,0.12,0.92"
      className="relative overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[78rem] px-6 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <ScrambleText
            as="p"
            text="SOBRE"
            className="block text-sm font-semibold tracking-[0.22em] text-white/70"
          />
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Currículo e trajetória
          </h2>
          <p className="mt-3 max-w-[52rem] text-sm leading-relaxed text-white/80 sm:text-base">
            Minha jornada profissional, principais responsabilidades e formações.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-1 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
            <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
              <span className="text-white/80">Perfil</span>
            </h3>
            <div className="mt-4">
              <img
                src="/juckIcon2.png"
                alt="Foto de perfil de Juchimiuk"
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Desenvolvedor com experiência em aplicações web, foco em React, TypeScript e boas práticas de engenharia de software. Gosto de projetar interfaces claras e performáticas.
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/80">
              <div>
                <strong className="text-white/90">Local:</strong> Santa Catarina, Brasil
              </div>
              <div>
                <strong className="text-white/90">Email:</strong>{" "}
                <a
                  href="mailto:juchimiukdev@gmail.com"
                  className="text-white/85 underline-offset-2 hover:text-white hover:underline"
                >
                  juchimiukdev@gmail.com
                </a>
              </div>
              <div>
                <strong className="text-white/90">Número:</strong>{" "}
                <a
                  href="tel:+55988478664"
                  className="text-white/85 underline-offset-2 hover:text-white hover:underline"
                >
                  (+55) 98847-8664
                </a>
              </div>
              <div>
                <strong className="text-white/90">Disponibilidade:</strong> A ver
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={140} className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                  <FaBriefcase className="h-5 w-5 text-white/90" />
                  Experiência
                </h3>
              </div>

              <div className="mt-4 divide-y divide-white/5">
                {experiences.map((exp) => (
                  <div key={exp.id} className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-white">{exp.role}</h4>
                        <div className="text-xs text-white/60">{exp.company}</div>
                      </div>
                      <div className="text-xs text-white/60">{exp.period}</div>
                    </div>
                    <p className="mt-2 text-sm text-white/80">{exp.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220} className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                <FaGraduationCap className="h-5 w-5 text-white/90" />
                Formação & Diplomas
              </h3>

              <div className="mt-4 divide-y divide-white/5">
                {education.map((edu) => (
                  <div key={edu.id} className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                        <div className="text-xs text-white/60">{edu.institution}</div>
                      </div>
                      <div className="text-xs text-white/60">{edu.period}</div>
                    </div>
                    {edu.description && (
                      <p className="mt-2 text-sm text-white/80">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
