import React from "react";
import { journey } from "../data/profile";

const Journey: React.FC = () => {
  return (
    <section id="trajetoria" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-12">
        <div data-reveal className="md:col-span-4">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Trajetória</h2>
          <p className="mt-4 leading-relaxed text-graphite">Trabalho e formação, do começo até hoje.</p>
        </div>

        <ol className="timeline relative md:col-span-8">
          {/* Trilho cinza + preenchimento laranja que acompanha o scroll. */}
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-line" />
          <span aria-hidden="true" className="timeline-fill absolute top-2 bottom-2 left-[7px] w-px bg-signal" />

          {journey.map((item) => (
            <li key={item.id} data-reveal className="relative pb-12 pl-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-signal bg-paper"
              />
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="font-medium text-graphite tabular-nums">{item.period}</span>
                <span
                  className={[
                    "rounded-full px-2.5 py-0.5 text-xs font-medium",
                    item.type === "Trabalho"
                      ? "bg-ink text-white"
                      : "border border-line bg-surface text-graphite",
                  ].join(" ")}
                >
                  {item.type}
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="text-graphite">{item.place}</p>
              <p className="mt-3 max-w-[60ch] leading-relaxed text-ink/80">{item.description}</p>
              {item.points && (
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-signal" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Journey;
