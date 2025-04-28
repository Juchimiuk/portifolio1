import React, { useState } from 'react';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Funcionalidades', href: '#features' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
];

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-sky-950 shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <img  className="w-35 " src="indexfly.png" alt="" />
                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-5 items-center">
                    {navItems.map(item => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-white hover:text-blue-600 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    {/* CTA Buttons */}
                    <a
                        href="/signup"
                        className="ml-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        Login
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none "
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
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col p-4 space-y-4">
                        {navItems.map(item => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                       
                        <a
                            href="/signup"
                            className="px-4 py-2 rounded-md bg-sky-950 text-white text-center hover:bg-blue-700 transition"
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
