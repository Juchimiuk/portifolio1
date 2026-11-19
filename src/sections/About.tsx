import React from "react";
import { about } from "../data/profile";

const About: React.FC = () => {
  return (
    <section id="sobre" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 sm:px-8 md:grid-cols-12">
        <h2
          data-reveal
          className="font-display text-4xl font-bold tracking-tight md:col-span-4 sm:text-5xl"
        >
          Sobre mim
        </h2>

        <div className="md:col-span-8">
          <div data-reveal className="space-y-5 text-lg leading-relaxed text-ink/85 sm:text-xl">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-[62ch]">
                {p}
              </p>
            ))}
          </div>

          <dl data-reveal className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2">
            {about.facts.map((f) => (
              <div key={f.label} className="border-b border-line py-5 sm:pr-6">
                <dt className="text-sm text-graphite">{f.label}</dt>
                <dd className="mt-1 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
