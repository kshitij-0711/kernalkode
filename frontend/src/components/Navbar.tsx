'use client';

import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
                ? 'bg-[var(--background)]/80 backdrop-blur-xl border-[var(--secondary)]/10 py-4'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group relative z-50">
                    <span className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-[var(--foreground)] mix-blend-difference transition-colors">
                        WebCraft.
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#portfolio">Work</NavLink>
                    <NavLink href="#contact">Contact</NavLink>


                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-[var(--foreground)] relative z-50 hover:bg-[var(--foreground)]/5 rounded-full transition-colors"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-[var(--background)] z-40 flex flex-col pt-32 px-6 md:hidden"
                    >
                        <div className="flex flex-col space-y-8">
                            <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
                            <MobileNavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>Work</MobileNavLink>
                            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>


                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="relative group overflow-hidden"
        >
            <span className="text-[var(--foreground)] text-xs font-mono uppercase tracking-[0.2em] group-hover:-translate-y-full block transition-transform duration-300">
                {children}
            </span>
            <span className="absolute top-0 left-0 text-[var(--primary)] text-xs font-mono uppercase tracking-[0.2em] translate-y-full group-hover:translate-y-0 block transition-transform duration-300">
                {children}
            </span>
        </Link>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-4xl md:text-6xl font-serif font-light text-[var(--foreground)] hover:text-[var(--primary)] hover:italic transition-all duration-300"
        >
            {children}
        </Link>
    );
}
