// src/components/Header.tsx

import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Parceiros', href: '#partners' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Contato', href: '#contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const headerBg = scrolled ? 'bg-[#f4f6f9] shadow-lg backdrop-blur-md' : 'bg-[#f4f6f9] backdrop-blur-md';
  const linkClass = 'text-sky-900 font-medium hover:text-blue-700 px-2 py-1 rounded transition text-sm';
  const loginBtnClass =
    'ml-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-sky-900 via-blue-800 to-blue-600 text-white font-bold shadow-lg hover:from-blue-800 hover:to-sky-700 hover:text-white transition text-sm ring-0 focus:ring-2 focus:ring-blue-200/60';
  const mobileNavBg = 'bg-[#f4f6f9] backdrop-blur-md';
  const mobileLinkClass = 'text-sky-900 font-medium hover:text-blue-700 px-2 py-1 rounded transition text-base';

  return (
    <header
      className={`${headerBg} fixed top-0 left-0 w-full transition-colors duration-300 z-50 h-14 md:h-16`}
    >
      <div className="container mx-auto px-4 py-1 flex items-center justify-between h-full min-h-0">
        {/* Logo */}
        <img
          className="w-28 hidden md:block drop-shadow-md"
          src="indexfly.png"
          alt="IndexFly Logo"
        />
        <img
          className="w-9 block md:hidden drop-shadow-md"
          src="favicon.png"
          alt="IndexFly Logo"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-1 items-center">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className={linkClass}
            >
              {item.label}
            </a>
          ))}
          <a href="https://indexfly-web.indexadm.com.br" className={loginBtnClass} target="_blank" rel="noopener noreferrer">
            Login
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className={`${mobileNavBg} shadow-md md:hidden`}>
          <nav className="flex flex-col p-4 space-y-3">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className={mobileLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://indexfly-web.indexadm.com.br"
              className="px-5 py-1.5 rounded-full bg-gradient-to-r from-white via-blue-100 to-sky-200 text-sky-950 font-bold text-center shadow-lg hover:from-blue-50 hover:to-sky-300 hover:text-sky-900 transition text-base ring-0 focus:ring-2 focus:ring-blue-200/60"
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
