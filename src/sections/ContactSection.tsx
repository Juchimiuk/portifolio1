import React from "react";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
};

const contacts: ContactLink[] = [
  {
    label: "Email",
    value: "juchimiukDev@gmail.com",
    href: "mailto:juchimiukDev@gmail.com",
    icon: <FaEnvelope className="h-5 w-5" aria-hidden="true" />,
  },
  {
    label: "WhatsApp",
    value: "(+55) 98847-8664",
    href: "https://wa.me/55988478664",
    icon: <FaWhatsapp className="h-5 w-5" aria-hidden="true" />,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/Juchimiuk",
    href: "https://github.com/Juchimiuk",
    icon: <FaGithub className="h-5 w-5" aria-hidden="true" />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/juchimiuk",
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin className="h-5 w-5" aria-hidden="true" />,
    external: true,
  },
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[78rem] px-6 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.22em] text-orange-500">CONTATO</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Vamos conversar
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
            Aberto a oportunidades, projetos freelance e colaborações. Responde rápido pelos canais abaixo.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 text-white/90 shadow-lg shadow-black/20 backdrop-blur transition hover:bg-white/[0.16]"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-orange-300">
                  {c.icon}
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    {c.label}
                  </span>
                  <span className="text-sm font-medium text-white">{c.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-2 text-sm text-white/80">
          <FaLocationDot className="h-4 w-4 text-white/60" aria-hidden="true" />
          Santa Catarina, Brasil
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
