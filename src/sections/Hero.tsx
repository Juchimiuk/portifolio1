import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ScrambleText from "../components/ScrambleText";
import { contacts, profile } from "../data/profile";
import { delay } from "../hooks/useReveal";

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p
          className="enter flex items-center gap-2.5 text-sm font-medium text-graphite"
          style={delay(0)}
        >
          <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-600 text-emerald-600" />
          {profile.availability}
        </p>

        <h1 className="mt-5 font-display text-[clamp(3.5rem,18vw,12.5rem)] leading-[0.86] font-extrabold tracking-[-0.045em] text-ink">
          <ScrambleText text={profile.name} delay={150} />
        </h1>

        <div className="draw-line mt-8 h-px bg-ink" style={delay(450)} />

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p
              className="enter font-display text-2xl font-semibold tracking-tight sm:text-3xl"
              style={delay(650)}
            >
              {profile.role}
            </p>
            <p
              className="enter mt-4 max-w-xl text-lg leading-relaxed text-graphite"
              style={delay(750)}
            >
              {profile.headline}
            </p>

            <div className="enter mt-8 flex flex-wrap gap-3" style={delay(850)}>
              <a
                href="#projetos"
                className="inline-flex items-center rounded-full bg-signal-strong px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
              >
                Ver projetos
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center rounded-full border border-ink/20 bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                Baixar currículo
              </a>
            </div>
          </div>

          <div
            className="enter flex items-end gap-5 md:col-span-5 md:justify-end"
            style={delay(950)}
          >
            <img
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              width={442}
              height={565}
              className="h-auto w-28 rounded-2xl object-cover sm:w-36"
            />
            <div className="pb-1 text-sm">
              <p className="text-graphite">{profile.location}</p>
              <div className="mt-3 flex gap-2">
                <a
                  href={contacts.github.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-ink"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
                <a
                  href={contacts.linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-ink"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
