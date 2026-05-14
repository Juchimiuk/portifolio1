import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa6";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-[78rem] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-white/70">
          &copy; {year} Juchimiuk. Todos os direitos reservados.
        </p>

        <nav aria-label="Redes sociais" className="flex items-center gap-2">
          <a
            href="https://github.com/Juchimiuk"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 transition hover:bg-white/20"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 transition hover:bg-white/20"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:juchimiukDev@gmail.com"
            aria-label="Enviar email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 transition hover:bg-white/20"
          >
            <FaEnvelope className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/55988478664"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 transition hover:bg-white/20"
          >
            <FaWhatsapp className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
