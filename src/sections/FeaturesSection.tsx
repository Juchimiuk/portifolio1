// src/components/ProjectsSection.tsx
import React, { useMemo, useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub, FaMagnifyingGlass } from "react-icons/fa6";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  image?: string;
  featured?: boolean;
};

const ProjectsSection: React.FC = () => {
  const projects = useMemo<Project[]>(
    () => [
      {
        id: "p1",
        title: "EasyFinance - Gerenciador Financeiro ",
        description:
          "Interface Web para gerenciar finanças pessoais, com funcionalidades de lançamento, categorização e relatórios, dashboards ao vivo.",
        tags: ["React", "TypeScript", "APIs", "Componentização", "UI | UX", "Tailwind"],
        href: "#",
        repo: "#",
        image: "/EasyFinance1.png",
      },
      {
        id: "p2",
        title: "TripLanso - Planejador de Viagens",
        description:
          "Plataforma Web para planejar viagens, criar roteiros personalizados e compartilhar experiências, com foco em UI moderna e responsiva.",
        tags: ["React", "TypeScript", "Tailwind", "UI | UX","Componentização"],
        href: "https://trip-lanso.vercel.app/",
        repo: "https://github.com/Juchimiuk/TripLanso",
        featured: true,
        image: "/TripLanso.png",
      },

    ],
    []
  );

  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return ["Todos", ...Array.from(s)];
  }, [projects]);

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("Todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.join(" ").toLowerCase().includes(q);

      const matchesTag = activeTag === "Todos" || p.tags.includes(activeTag);

      return matchesQuery && matchesTag;
    });
  }, [projects, query, activeTag]);

  return (
    <section id="projects" className="relative overflow-hidden ">
      {/* Fundo coerente com o Hero */}
      <div className="fixed inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bgGray.jpg')" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[78rem] px-6 py-16 sm:px-8 sm:py-20">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-orange-500">
              PORTFÓLIO
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Projetos em destaque
            </h2>
            <p className="mt-3 max-w-[52rem] text-sm leading-relaxed text-white/80 sm:text-base">
              Alguns projetos que mostram minha evolução, foco em UI, UX, performance e boas práticas.
            </p>
          </div>

          {/* Busca */}
          <div className="mt-3 w-full sm:mt-0 sm:w-[360px]">
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white/90 shadow-2xl shadow-black/50 backdrop-blur-2xl">
              <FaMagnifyingGlass className="h-4 w-4 text-white/60" aria-hidden="true" />
              <label htmlFor="project-search" className="sr-only">
                Buscar projetos
              </label>
              <input
                id="project-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar projeto, stack ou feature..."
                aria-label="Buscar projetos por nome, stack ou feature"
                className="w-full bg-transparent text-sm outline-none placeholder:text-white/50"
              />
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="mt-8 flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const active = tag === activeTag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={[
                  "rounded-full px-4 py-2 text-xs font-semibold transition",
                  "border backdrop-blur",
                  active
                    ? "border-white/25 bg-white text-gray-900 shadow-lg shadow-black/15"
                    : "border-white/15 bg-white/10 text-white/85 hover:bg-white/15",
                ].join(" ")}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Destaque */}


        {/* Grid de cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur transition hover:bg-white/[0.14]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {p.title}
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href={p.repo || "#"}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/85 transition hover:bg-white/15"
                    title="Repositório"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                  <a
                    href={p.href || "#"}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/85 transition hover:bg-white/15"
                    title="Demo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaArrowUpRightFromSquare className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-white/55">Clique para ver mais</span>
                <span className="text-xs font-semibold text-white/70 group-hover:text-white transition">
                  Detalhes
                </span>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-3xl border border-white/15 bg-white/10 p-10 text-center text-white/80 backdrop-blur">
            Nenhum projeto encontrado com esse filtro.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
