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

  const headerBg = scrolled ? 'bg-gradient-to-l from-sky-900 to-sky-950' : 'bg-gradient-to-l from-sky-900 to-sky-950';
  const linkClass = scrolled
    ? 'text-white hover:text-gray-200'
    : 'text-white hover:text-blue-600';
  const loginBtnClass =
    'ml-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition';
  const mobileNavBg = scrolled ? 'bg-sky-950' : 'bg-sky-950 s';
  const mobileLinkClass = scrolled
    ? 'text-white hover:text-gray-200'
    : 'text-white hover:text-blue-600';

  return (
    <header
      className={`${headerBg} fixed top-0 left-0 w-full transition-colors duration-300 z-50`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img
          className="w-36 hidden md:block"
          src="indexfly.png"
          alt="IndexFly Logo"
        />
        <img
          className="w-12 block md:hidden"
          src="favicon.png"
          alt="IndexFly Logo"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-5 items-center">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className={`${linkClass} transition-colors`}
            >
              {item.label}
            </a>
          ))}
          <a href="/signup" className={loginBtnClass}>
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
            className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`}
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
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className={`${mobileLinkClass} transition-colors`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/signup"
              className="px-4 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700 transition"
              onClick={() => setMenuOpen(false)}
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
