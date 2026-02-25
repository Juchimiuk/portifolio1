import React, { useMemo } from "react";
import { FaDownload, FaGraduationCap, FaBriefcase } from "react-icons/fa6";

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
          "Contratado como desenvolvedor com o maior foco em front-end para criar e manter aplicações web internas, focando em React e TypeScript.",
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
    <section id="resume" className="relative overflow-hidden ">
      

      <div className="relative z-10 mx-auto max-w-[78rem] px-6 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-white/70">SOBRE</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Currículo e trajetória</h2>
            <p className="mt-3 max-w-[52rem] text-sm leading-relaxed text-white/80 sm:text-base">
              Minha jornada profissional, principais responsabilidades e formações.
            </p>
          </div>

          <div className="mt-4 sm:mt-0">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#123A66] shadow-lg shadow-black/25 transition hover:bg-white/90"
            >
              <FaDownload className="h-4 w-4" />
              Baixar CV
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
            <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
              <span className="text-white/80">Perfil</span>
            </h3>
            <div>''
              <img src="/juckIcon2.png" alt="juckIcon2" className="h-20 w-20 object-cover" />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Desenvolvedor com experiência em aplicações web, foco em React, TypeScript e boas práticas de engenharia de software. Gosto de projetar interfaces claras e performáticas.
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/80">
              <div>
                <strong className="text-white/90">Local:</strong> Santa Catarina, Brasil
              </div>
              <div>
                <strong className="text-white/90">Email:</strong> juchimiukDev@gmail.com
              </div>
              <div>
                <strong className="text-white/90">Número:</strong> (+55) 98847-8664
              </div>
              <div>
                <strong className="text-white/90">Disponibilidade:</strong> A ver
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
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
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
