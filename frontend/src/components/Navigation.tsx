'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import gsap from 'gsap';

export default function Navigation() {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Work', href: '#work' },
        { label: 'Services', href: '#services' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full h-[64px] px-6 md:px-12 flex justify-between items-center z-[100] bg-transparent">
            {/* Logo */}
            <Link href="/" className="font-serif text-[20px] font-light">
                Boring.
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex gap-8 items-center">
                {links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="group relative font-sans text-[11px] uppercase tracking-[0.15em] text-[--text-muted] hover:text-[--text] transition-colors duration-300"
                    >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[--text] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                ))}
            </div>

            {/* Right Side: Theme Toggle & Hamburger */}
            <div className="flex items-center gap-6">
                <button
                    onClick={toggleTheme}
                    className="hidden md:block font-sans text-[11px] uppercase tracking-[0.15em] text-[--text-muted] hover:text-[--text] transition-colors duration-300 relative group"
                >
                    {theme === 'dark' ? 'Light' : 'Dark'}
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[--text] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </button>

                {/* Mobile Hamburger Menu Icon */}
                <button className="md:hidden flex flex-col justify-center items-center gap-[6px] w-[20px] h-[20px] relative z-[110]" onClick={toggleMobileMenu}>
                    <span className={`block w-full h-[1px] bg-[--text] transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
                    <span className={`block w-full h-[1px] bg-[--text] transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-[--bg] z-[105] flex flex-col items-center justify-center transition-all duration-500 ease-in-out overflow-hidden ${
                    isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100 pointer-events-auto' 
                    : '-translate-y-full opacity-0 pointer-events-none'
                }`}
            >
                {/* Re-add Theme toggle inside mobile menu for convenience */}
                <button
                    onClick={toggleTheme}
                    className="absolute top-[22px] right-[80px] font-sans text-[11px] uppercase tracking-[0.15em] text-[--text-muted] hover:text-[--text] transition-colors duration-300"
                >
                    {theme === 'dark' ? 'Light' : 'Dark'}
                </button>

                {links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-serif text-[clamp(2rem,8vw,4rem)] font-light my-4 hover:text-[--text-muted] transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
