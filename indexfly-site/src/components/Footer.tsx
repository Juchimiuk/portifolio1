import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
  { label: 'Termos de Uso', href: '/terms' },
  { label: 'Política de Privacidade', href: '/privacy' },
];

const Footer: React.FC = () => (
  <footer className="bg-sky-950 text-white py-2">
    <div className="container  mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <img className="w-15 " src="favicon.png" alt="Logo Index Fly" />
      <span className="text-sm">&copy; {new Date().getFullYear()} IndexFly. Todos os direitos reservados.</span>
      <nav className="flex space-x-4 mt-4 md:mt-0">
        {footerLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-gray-900 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
