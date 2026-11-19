import React from "react";
import { stack } from "../data/profile";
import { delay } from "../hooks/useReveal";

const Stack: React.FC = () => {
  return (
    <section id="stack" data-dark className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 data-reveal className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Com o que eu trabalho
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {stack.map((g, i) => (
            <div key={g.group} data-reveal style={delay(i * 100)}>
              <h3 className="border-b border-white/15 pb-3 text-sm font-medium text-signal">
                {g.group}
              </h3>
              <ul className="mt-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="hover-line border-b border-white/10 py-3 font-display text-xl font-medium text-white/90"
                  >
                    <span className="hover-slide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
