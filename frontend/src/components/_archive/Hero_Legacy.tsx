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
                    Boring
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
