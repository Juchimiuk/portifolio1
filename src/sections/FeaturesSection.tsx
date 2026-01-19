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
        title: "Dashboard de Operações Aéreas",
        description:
          "Painel web responsivo para acompanhar voos, status e métricas, com foco em performance e UX.",
        tags: ["React", "TypeScript", "Tailwind", "UI, UX"],
        href: "#",
        repo: "#",
        featured: true,
        image: "/projects/project-1.png",
      },
      {
        id: "p2",
        title: "Sistema de Tickets e Atendimento",
        description:
          "Interface para abertura e acompanhamento de tickets com filtros, busca e estados bem definidos.",
        tags: ["React", "Node", "APIs", "Componentização"],
        href: "#",
        repo: "#",
        image: "/projects/project-2.png",
      },
      {
        id: "p3",
        title: "Landing Page de Produto",
        description:
          "Landing moderna com seções, animações leves e CTA, otimizada para conversão e SEO básico.",
        tags: ["React", "Tailwind", "SEO", "Acessibilidade"],
        href: "#",
        repo: "#",
        image: "/projects/project-3.png",
      },
      {
        id: "p4",
        title: "Gerenciador de Conteúdo Simples",
        description:
          "CRUD com formulários validados, listagem paginada e experiência consistente de usuário.",
        tags: ["React", "TypeScript", "Forms", "Validação"],
        href: "#",
        repo: "#",
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

  const featured = filtered.find((p) => p.featured) || filtered[0];

  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950">
      {/* Fundo coerente com o Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C2D] via-[#0F2A44] to-[#123A66]" />
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-black/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[78rem] px-6 py-16 sm:px-8 sm:py-20">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-white/70">
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
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white/90 shadow-lg shadow-black/20 backdrop-blur">
              <FaMagnifyingGlass className="h-4 w-4 text-white/60" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar projeto, stack ou feature..."
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
                    ? "border-white/25 bg-white text-[#123A66] shadow-lg shadow-black/15"
                    : "border-white/15 bg-white/10 text-white/85 hover:bg-white/15",
                ].join(" ")}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Destaque */}
        {featured && (
          <div className="mt-10 rounded-3xl border border-white/15 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
              <div className="lg:col-span-7 p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
                    Destaque
                  </span>
                  <span className="text-xs text-white/60">Projeto em evidência</span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                  {featured.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={featured.href || "#"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#123A66] shadow-lg shadow-black/25 transition hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-white/25"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver demo <FaArrowUpRightFromSquare className="h-4 w-4" />
                  </a>

                  <a
                    href={featured.repo || "#"}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/20"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <FaGithub className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-black/10">
                  {/* Placeholder visual, troque por imagem real quando tiver */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,163,255,0.35),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.14),transparent_60%)]" />
                  <div className="relative p-6">
                    <div className="h-44 sm:h-56 w-full rounded-xl border border-white/10 bg-white/5" />
                    <div className="mt-4 space-y-2">
                      <div className="h-3 w-2/3 rounded bg-white/10" />
                      <div className="h-3 w-5/6 rounded bg-white/10" />
                      <div className="h-3 w-1/2 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
