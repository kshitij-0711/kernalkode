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
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative z-50"
                >
                    <span className="text-2xl md:text-3xl font-sans font-bold tracking-tighter text-[var(--foreground)] mix-blend-difference transition-colors">
                        Boring.
                    </span>
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">

                    {/* CTA Button */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('booking-calendar')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative overflow-hidden px-6 py-2.5 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-full isolate hover:bg-[var(--primary)] text-center text-sm inline-block"
                    >
                        <span className="absolute inset-0 w-full h-full -z-10 bg-[var(--foreground)] -translate-y-full rounded-b-[50%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                        <span className="relative z-10 overflow-hidden block">
                            <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[150%]">Book an Intro Call</span>
                            <span className="absolute inset-0 flex items-center justify-center text-[var(--background)] -translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">Book an Intro Call</span>
                        </span>
                    </button>
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

                            {/* CTA Button */}
                            <div className="pt-8">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsMenuOpen(false);
                                        setTimeout(() => {
                                            document.getElementById('booking-calendar')?.scrollIntoView({ behavior: 'smooth' });
                                        }, 100);
                                    }}
                                    className="group relative overflow-hidden px-10 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-full isolate hover:bg-[var(--primary)] text-center text-xl inline-block w-full"
                                >
                                    <span className="absolute inset-0 w-full h-full -z-10 bg-[var(--foreground)] -translate-y-full rounded-b-[50%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                                    <span className="relative z-10 overflow-hidden block">
                                        <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[150%]">Book an Intro Call</span>
                                        <span className="absolute inset-0 flex items-center justify-center text-[var(--background)] -translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">Book an Intro Call</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
