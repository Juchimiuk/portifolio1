import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Showcase from "../components/Showcase";
import { projects, type Project } from "../data/profile";
import { delay } from "../hooks/useReveal";

const ProjectCard: React.FC<{ project: Project }> = ({ project: p }) => (
  <article className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
    <a
      href={p.caseUrl}
      data-reveal
      aria-label={`Ver o estudo de caso do ${p.title}`}
      className="group block transition-transform duration-700 ease-out hover:-translate-y-1 md:col-span-7"
    >
      <Showcase desktop={p.images.desktop} mobile={p.images.mobile} host={p.host} />
    </a>

    <div data-reveal style={delay(100)} className="md:col-span-5">
      <div className="flex items-center gap-4">
        {p.icon && <img src={p.icon} alt="" width={56} height={56} className="h-14 w-14 rounded-2xl" />}
        <div>
          <h3 className="font-display text-4xl font-bold tracking-tight">{p.title}</h3>
          <p className="text-graphite">{p.kind}</p>
        </div>
      </div>
      <p className="mt-6 text-lg leading-relaxed text-ink/85">{p.summary}</p>
      <p className="mt-3 leading-relaxed text-graphite">{p.role}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias principais">
        {p.tags.map((t) => (
          <li key={t} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-graphite">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <a
          href={p.caseUrl}
          className="inline-flex items-center rounded-full bg-signal-strong px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
        >
          Ver estudo de caso
        </a>
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline"
          >
            Ver o site
            <FaArrowUpRightFromSquare className="h-3 w-3" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  </article>
);

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div data-reveal className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Projetos</h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">
            Um produto completo que construí do zero: app, painel web, API e banco de dados.
          </p>
        </div>

        <div className="mt-14 space-y-28">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
