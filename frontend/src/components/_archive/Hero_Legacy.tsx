'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Circle, Minus } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    const { theme } = useTheme();
    const variant = 'v1' as string;

    return (
        <section id="hero" className="relative transition-colors duration-500 overflow-hidden">
            {theme === 'midnight-luxe' && (
                <>
                    {variant === 'v1' && <MidnightLuxeHeroV1 />}
                    {variant === 'v2' && <MidnightLuxeHeroV2 />}
                    {variant === 'v3' && <MidnightLuxeHeroV3 />}
                </>
            )}
            {theme === 'soft-editorial' && (
                <>
                    {variant === 'v1' && <SoftEditorialHeroV1 />}
                    {variant === 'v2' && <SoftEditorialHeroV2 />}
                    {variant === 'v3' && <SoftEditorialHeroV3 />}
                </>
            )}
        </section>
    );
}

// --- MIDNIGHT LUXE VARIANTS ---

// V1: Alchemy (Original V2 - Minimal/Classic)
function MidnightLuxeHeroV1() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--secondary)_0%,_transparent_50%)] opacity-5 pointer-events-none" />

            <div className="max-w-5xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[var(--primary)] text-sm tracking-[0.3em] uppercase mb-6 block font-sans">
                        Digital Alchemy
                    </span>
                    <h1 className="text-6xl md:text-8xl font-serif text-[var(--foreground)] mb-6 tracking-tight">
                        Crafting <span className="italic text-[var(--secondary)]">Digital</span> <br />
                        <span className="text-[var(--primary)] text-7xl md:text-9xl">Excellence</span>
                    </h1>
                    <p className="text-[var(--secondary)] text-lg max-w-2xl mx-auto mb-10 font-light opacity-80 leading-relaxed">
                        We transmute ideas into digital gold. A premium web design studio for those who seek the extraordinary.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col items-center gap-8"
                >
                    <div className="h-24 w-px bg-gradient-to-b from-[var(--primary)] to-transparent" />
                    <Link href="#portfolio" className="group flex items-center gap-3 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                        <span className="uppercase text-xs tracking-widest">Explore Work</span>
                        <ArrowDown className="group-hover:translate-y-1 transition-transform" size={16} />
                    </Link>
                </motion.div>
            </div>

            <div className="absolute top-1/4 left-10 w-px h-32 bg-[var(--primary)] opacity-20 hidden md:block" />
            <div className="absolute bottom-1/4 right-10 w-px h-32 bg-[var(--primary)] opacity-20 hidden md:block" />
        </div>
    );
}

// V2: Art Deco / Geometric (Structured)
function MidnightLuxeHeroV2() {
    return (
        <div className="min-h-screen flex items-center bg-[var(--background)] relative px-6 border-x border-[var(--secondary)] border-opacity-10 mx-auto max-w-[1400px]">
            {/* Geometric Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-px bg-[var(--secondary)] opacity-10" />
                <div className="absolute left-1/4 top-0 w-px h-full bg-[var(--secondary)] opacity-10" />
                <div className="absolute right-1/4 top-0 w-px h-full bg-[var(--secondary)] opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="border-l-2 border-[var(--primary)] pl-8 py-4"
                >
                    <span className="text-[var(--secondary)] uppercase tracking-[0.4em] text-xs mb-4 block">Est. 2024</span>
                    <h1 className="text-6xl md:text-8xl font-serif text-[var(--foreground)] leading-none mb-8">
                        Luxe <br /> <span className="font-sans font-light text-[var(--primary)] tracking-tight">Logic.</span>
                    </h1>
                    <Link href="#contact">
                        <button className="px-8 py-3 bg-[var(--background)] border border-[var(--primary)] text-[var(--primary)] uppercase text-xs tracking-widest hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all duration-500">
                            Start Project
                        </button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96 border border-[var(--secondary)] border-opacity-20 rounded-full flex items-center justify-center">
                        <div className="absolute inset-0 border border-[var(--primary)] opacity-30 rounded-full scale-110" />
                        <div className="w-full h-px bg-[var(--primary)] absolute top-1/2 left-0 transform -rotate-45 opacity-50" />
                        <span className="font-serif italic text-[var(--secondary)] text-xl opacity-60">Precision.</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// V3: Bold Typography (Impactful)
function MidnightLuxeHeroV3() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-[var(--background)] py-24 px-6 relative overflow-hidden">
            <div className="flex justify-between items-start border-b border-[var(--secondary)] border-opacity-20 pb-4 z-10">
                <span className="text-[var(--primary)] uppercase text-xs tracking-widest">WebCraft Studio</span>
                <span className="text-[var(--secondary)] uppercase text-xs tracking-widest">Bespoke Digital</span>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[12vw] leading-[0.85] font-serif text-[var(--foreground)] tracking-tighter mix-blend-difference"
                >
                    DIGITAL
                    <br />
                    <span className="ml-[10vw] italic text-[var(--primary)] opacity-90">
                        MASTERY
                    </span>
                </motion.h1>
            </div>

            <div className="flex justify-between items-end z-10">
                <div className="w-1/3 text-[var(--secondary)] text-sm font-mono opacity-70">
                    (001) --- Defines the standard<br />
                    (002) --- Elevates the brand
                </div>
                <Circle size={12} className="text-[var(--primary)] fill-current animate-pulse" />
            </div>

            {/* Background elements */}
            <div className="absolute -right-20 top-1/3 w-96 h-96 bg-[var(--primary)] opacity-5 blur-[100px] rounded-full pointer-events-none" />
        </div>
    );
}

// --- SOFT EDITORIAL VARIANTS ---

// V1: Narrative (Original V2 - Storytelling)
function SoftEditorialHeroV1() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-6">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="font-serif italic text-2xl md:text-3xl text-[var(--primary)] mb-4">Volume I</span>
                    <h1 className="text-7xl md:text-9xl font-serif text-[var(--foreground)] tracking-tight leading-none mb-8">
                        The <span className="italic text-[var(--secondary)] opacity-80">Silent</span> <br /> Narrative
                    </h1>
                    <div className="w-full max-w-lg h-px bg-[var(--secondary)] opacity-30 my-8" />
                    <p className="text-[var(--secondary)] text-xl md:text-2xl font-light font-sans max-w-2xl leading-relaxed">
                        We build digital experiences that read like a well-curated magazine. Timeless, structured, and profoundly human.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

// V2: Brutalist Grid (Magazine Layout)
function SoftEditorialHeroV2() {
    return (
        <div className="min-h-screen flex items-center bg-[var(--background)] px-6 pt-20">
            <div className="max-w-7xl mx-auto w-full h-[75vh] border border-[var(--secondary)] border-opacity-20 grid grid-cols-1 md:grid-cols-12 grid-rows-6">

                {/* Title */}
                <div className="col-span-12 md:col-span-8 row-span-4 p-8 border-b md:border-b-0 md:border-r border-[var(--secondary)] border-opacity-20 flex items-end">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-serif text-[var(--foreground)] leading-[0.9]"
                    >
                        Structure <br /> <span className="italic text-[var(--secondary)]"> & Soul.</span>
                    </motion.h1>
                </div>

                {/* Subtitle/Nav */}
                <div className="col-span-12 md:col-span-4 row-span-2 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <span className="text-[var(--primary)] font-bold text-xs uppercase">Issue 84</span>
                        <ArrowRight size={20} className="text-[var(--foreground)]" />
                    </div>
                    <p className="text-[var(--secondary)] text-sm leading-relaxed">
                        A study in grid systems and typographic hierarchy for the modern web.
                    </p>
                </div>

                {/* Decorative Empty Cell */}
                <div className="col-span-6 md:col-span-4 row-span-2 border-t md:border-t-0 border-r border-[var(--secondary)] border-opacity-20 bg-[var(--secondary)] bg-opacity-5 relative group">
                    <div className="absolute inset-2 border border-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* CTA */}
                <div className="col-span-6 md:col-span-8 row-span-2 border-t border-[var(--secondary)] border-opacity-20 p-8 flex items-center justify-between hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors cursor-pointer group">
                    <span className="text-2xl md:text-4xl font-serif">Read the Manifesto</span>
                    <ArrowRight size={40} className="transform group-hover:translate-x-4 transition-transform" />
                </div>
            </div>
        </div>
    );
}

// V3: Centered Elegant (Cover Page)
function SoftEditorialHeroV3() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] px-6 text-center relative">
            <div className="absolute top-24 uppercase text-[var(--secondary)] text-xs tracking-[0.5em] opacity-50">
                Editorial Collection
            </div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="relative z-10"
            >
                <h1 className="text-5xl md:text-7xl font-sans font-light text-[var(--foreground)] mb-2 tracking-wide uppercase">
                    We Are
                </h1>
                <div className="text-7xl md:text-9xl font-serif text-[var(--primary)] italic mb-8 relative">
                    WebCraft
                    <span className="absolute -top-4 -right-8 text-2xl font-sans not-italic text-[var(--secondary)] opacity-50">TM</span>
                </div>
                <p className="text-xl text-[var(--secondary)] italic font-serif opacity-80">
                    Curators of the digital aesthetic.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-4"
            >
                <span className="text-[var(--secondary)] text-xs uppercase tracking-widest bg-[var(--background)] px-2 z-10">Scroll</span>
                <div className="h-16 w-px bg-[var(--secondary)] opacity-30" />
            </motion.div>
        </div>
    );
}
