import React from "react";
import { FaArrowLeft, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import { ritza } from "../data/ritza";
import { delay, useReveal } from "../hooks/useReveal";

const SectionTitle: React.FC<{ title: string; intro?: string; dark?: boolean }> = ({
  title,
  intro,
  dark,
}) => (
  <div data-reveal className="max-w-2xl">
    <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    {intro && (
      <p className={["mt-4 text-lg leading-relaxed", dark ? "text-white/65" : "text-graphite"].join(" ")}>
        {intro}
      </p>
    )}
  </div>
);

/** Seta vertical entre camadas do diagrama. */
const Connector: React.FC<{ label?: string }> = ({ label }) => (
  <div className="flex flex-col items-center py-1" aria-hidden="true">
    <span className="h-6 w-px bg-white/25" />
    {label && <span className="my-1 text-xs text-white/50">{label}</span>}
    <span className="h-6 w-px bg-white/25" />
    <span className="-mt-1 h-2 w-2 rotate-45 border-r border-b border-white/40" />
  </div>
);

const Architecture: React.FC = () => {
  const a = ritza.architecture;
  return (
    <figure data-reveal className="mt-12">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {a.clients.map((c) => (
          <li key={c.name} className="rounded-xl border border-white/15 bg-white/[0.04] p-4">
            <p className="font-display text-lg font-semibold">{c.name}</p>
            <p className="mt-1 text-sm text-white/55">{c.tech}</p>
          </li>
        ))}
      </ul>

      <Connector label="HTTPS e WebSocket" />

      <div className="rounded-xl border border-signal/70 bg-ink-soft p-5 text-center">
        <p className="font-display text-2xl font-semibold">{a.api.name}</p>
        <p className="mt-1 text-sm text-white/60">{a.api.tech}</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {a.api.pieces.map((p) => (
            <li key={p} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-x-3 md:grid-cols-3">
        <div>
          <Connector label="Prisma" />
          <div className="rounded-xl border border-white/15 bg-white/[0.04] p-4 text-center">
            <p className="font-display text-lg font-semibold">{a.data.name}</p>
            <p className="mt-1 text-sm text-white/55">Banco relacional, 34 tabelas</p>
          </div>
        </div>
        <div className="md:col-span-2">
          <Connector label="Serviços externos" />
          <ul className="flex flex-wrap justify-center gap-2 rounded-xl border border-dashed border-white/20 p-4">
            {a.services.map((s) => (
              <li key={s} className="rounded-full bg-white/[0.07] px-3 py-1.5 text-sm text-white/85">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="sr-only">
        Os quatro clientes (app, web, admin e site) falam com a API Ritza por HTTPS e WebSocket. A API
        guarda os dados no PostgreSQL via Prisma e conversa com Stripe, Strava, Garmin, Google Cloud
        Storage, Resend e Expo Push.
      </figcaption>
    </figure>
  );
};

const RitzaPage: React.FC = () => {
  useReveal();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <Header home={false} />

      <main id="conteudo">
        {/* Abertura */}
        <section className="pt-28 pb-16 sm:pt-36">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <a
              href="/#projetos"
              className="enter inline-flex items-center gap-2 text-sm font-medium text-graphite transition-colors hover:text-ink"
              style={delay(0)}
            >
              <FaArrowLeft className="h-3 w-3" aria-hidden="true" />
              Voltar ao portfólio
            </a>

            <div className="enter mt-8 flex items-center gap-5" style={delay(100)}>
              <img src={ritza.icon} alt="" width={80} height={80} className="h-16 w-16 rounded-2xl sm:h-20 sm:w-20" />
              <div>
                <p className="text-sm font-medium text-graphite">Estudo de caso, {ritza.period.toLowerCase()}</p>
                <h1 className="font-display text-[clamp(3rem,10vw,7rem)] leading-[0.9] font-extrabold tracking-[-0.04em]">
                  {ritza.name}
                </h1>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="enter md:col-span-7" style={delay(250)}>
                <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{ritza.tagline}</p>
                <p className="mt-4 text-lg leading-relaxed text-graphite">{ritza.summary}</p>
              </div>
              <div className="enter md:col-span-5" style={delay(350)}>
                <p className="border-l-2 border-signal pl-5 leading-relaxed text-ink/85">{ritza.solo}</p>
                <div className="mt-6 flex flex-wrap gap-3 pl-5">
                  {ritza.links.map((l, i) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={[
                        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                        i === 0
                          ? "bg-signal-strong text-white hover:bg-signal-ink"
                          : "border border-ink/20 bg-surface text-ink hover:border-ink",
                      ].join(" ")}
                    >
                      {l.label}
                      <FaArrowUpRightFromSquare className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="enter mt-14" style={delay(450)}>
              <Showcase desktop={ritza.hero.desktop} mobile={ritza.hero.mobile} host="web.ritza.com.br" eager />
            </div>

            {/* Números */}
            <dl data-reveal className="mt-16 grid grid-cols-2 border-t border-line md:grid-cols-5">
              {ritza.numbers.map((n) => (
                <div key={n.label} className="border-b border-line py-6 pr-4 md:border-b-0">
                  <dt className="sr-only">{n.label}</dt>
                  <dd>
                    <span className="block font-display text-4xl font-bold tracking-tight sm:text-5xl">{n.value}</span>
                    <span className="mt-2 block text-sm leading-snug text-graphite">{n.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Papéis */}
        <section className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle
              title="Uma pessoa, todas as funções"
              intro="Não houve time por trás: cada camada do Ritza passou pelas minhas mãos."
            />
            <ul className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {ritza.roles.map((r, i) => (
                <li
                  key={r.title}
                  data-reveal
                  style={delay((i % 3) * 80)}
                  className="border-b border-line py-6 sm:pr-8"
                >
                  <h3 className="font-display text-xl font-semibold">{r.title}</h3>
                  <p className="mt-2 leading-relaxed text-graphite">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Arquitetura */}
        <section data-dark className="bg-ink py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle
              dark
              title="Arquitetura"
              intro="Quatro clientes, uma API e um banco. Tudo em TypeScript, do celular ao servidor."
            />
            <Architecture />
          </div>
        </section>

        {/* Partes */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle title="As partes do produto" intro="O que cada aplicação faz e com o que foi construída." />
            <div className="mt-12 border-t border-line">
              {ritza.parts.map((part) => (
                <article
                  key={part.name}
                  data-reveal
                  className="grid grid-cols-1 gap-6 border-b border-line py-10 md:grid-cols-12"
                >
                  <div className="md:col-span-5">
                    <h3 className="font-display text-3xl font-bold tracking-tight">{part.name}</h3>
                    <p className="mt-1 text-sm text-graphite">{part.size}</p>
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Tecnologias de ${part.name}`}>
                      {part.stack.map((t) => (
                        <li key={t} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink/75">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="space-y-3 md:col-span-7">
                    {part.points.map((pt) => (
                      <li key={pt} className="flex gap-3 leading-relaxed text-ink/85">
                        <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-signal" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Decisões */}
        <section className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle
              title="Decisões técnicas"
              intro="Os problemas mais interessantes que apareceram no caminho e como resolvi cada um."
            />
            <div className="mt-12 grid grid-cols-1 gap-x-12 md:grid-cols-2">
              {ritza.decisions.map((d, i) => (
                <article key={d.title} data-reveal style={delay((i % 2) * 100)} className="border-t border-line py-8">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/80">{d.text}</p>
                </article>
              ))}
            </div>

            <div data-reveal className="mt-10 rounded-2xl bg-surface p-8 ring-1 ring-line sm:p-10">
              <h3 className="font-display text-2xl font-semibold tracking-tight">{ritza.testing.title}</h3>
              <p className="mt-3 max-w-[70ch] leading-relaxed text-ink/80">{ritza.testing.text}</p>
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="border-t border-line py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle title="Telas" />
            <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-12">
              {ritza.gallery.map((g) => {
                const phone = g.height > g.width;
                return (
                  <figure
                    key={g.src}
                    data-reveal
                    className={phone ? "col-span-1 md:col-span-3" : "col-span-2 md:col-span-9"}
                  >
                    <div
                      className={
                        phone
                          ? "overflow-hidden rounded-[1.6rem] border-[5px] border-ink bg-ink"
                          : "overflow-hidden rounded-2xl border border-line bg-surface"
                      }
                    >
                      <img
                        src={g.src}
                        alt={g.alt}
                        width={g.width}
                        height={g.height}
                        loading="lazy"
                        className={phone ? "w-full rounded-[1.2rem]" : "w-full"}
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-graphite">{g.caption}</figcaption>
                  </figure>
                );
              })}
            </div>

            <div data-reveal className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-10">
              <p className="font-display text-2xl font-semibold tracking-tight">Quer ver mais de perto?</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
                >
                  Falar comigo
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  <FaArrowLeft className="h-3 w-3" aria-hidden="true" />
                  Voltar ao portfólio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer home={false} />
    </>
  );
};

export default RitzaPage;
