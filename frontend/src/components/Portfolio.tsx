'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Eye, Grid } from 'lucide-react';
import Image from 'next/image';
import { fetchPortfolio } from '@/lib/api';

const defaultProjects = [
    {
        id: 1,
        title: 'Lumina',
        category: 'Digital Strategy',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2787',
        year: '2024'
    },
    {
        id: 2,
        title: 'Kroma',
        category: 'Brand Identity',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2764',
        year: '2023'
    },
    {
        id: 3,
        title: 'Aethel',
        category: 'E-Commerce',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2764',
        year: '2023'
    },
    {
        id: 4,
        title: 'Vanguard',
        category: 'Web Experience',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2700',
        year: '2024'
    }
];

export default function Portfolio() {
    const { variant } = useTheme();
    const [projects, setProjects] = useState(defaultProjects);

    useEffect(() => {
        fetchPortfolio()
            .then((data) => {
                if (data && Array.isArray(data) && data.length > 0) {
                    setProjects(data);
                }
            })
            .catch((err) => console.log("Using default portfolio:", err));
    }, []);

    return (
        <section id="portfolio" className="min-h-screen transition-colors duration-500 bg-[var(--background)]">
            {variant === 'v1' && <PortfolioV1 projects={projects} />}
            {variant === 'v2' && <PortfolioV2 projects={projects} />}
            {variant === 'v3' && <PortfolioV3 projects={projects} />}
            {/* Fallback */}
            {!['v1', 'v2', 'v3'].includes(variant) && <PortfolioV1 projects={projects} />}
        </section>
    );
}

// ============================================================================
// V1: "The Cinematic" (Base - Formerly V6)
// Focus: Large immersive imagery, slow scroll.
// ============================================================================
function PortfolioV1({ projects }: { projects: any[] }) {
    return (
        <div className="bg-[var(--background)]">
            {projects.map((project, index) => (
                <div key={project.id} className="h-screen relative flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.2 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover brightness-[0.4]"
                        />
                    </motion.div>

                    <div className="relative z-10 text-center px-6 mix-blend-screen">
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="block text-[#ffffff] text-xs uppercase tracking-[0.5em] mb-4"
                        >
                            {project.category}
                        </motion.span>
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-9xl font-bold text-[#ffffff] uppercase tracking-tighter mb-8"
                        >
                            {project.title}
                        </motion.h2>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <button className="px-8 py-3 border border-white text-white uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors">
                                Discover
                            </button>
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ============================================================================
// V2: "The Cinematic Grid" (Variation)
// Focus: Grid layout but with the dark, immersive feel.
// ============================================================================
function PortfolioV2({ projects }: { projects: any[] }) {
    return (
        <div className="py-32 bg-[var(--background)] px-6 min-h-screen">
            <div className="max-w-7xl mx-auto mb-16">
                <h2 className="text-5xl font-serif text-[var(--foreground)] italic">Selected Works</h2>
            </div>

            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[var(--foreground)] border-opacity-10">
                {projects.map((project, index) => (
                    <div key={project.id} className="group relative border-b border-r border-[var(--foreground)] border-opacity-10 h-[60vh] overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-[var(--background)] z-10 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                            <span className="text-[var(--primary)] text-xs uppercase tracking-widest mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                {project.category}
                            </span>
                            <h3 className="text-4xl md:text-6xl font-serif text-[var(--foreground)] mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                {project.title}
                            </h3>
                            <button className="w-16 h-16 rounded-full border border-[var(--foreground)] flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300 translate-y-4 group-hover:translate-y-0 delay-150">
                                <ArrowRight size={24} />
                            </button>
                        </div>
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

// ============================================================================
// V3: "The Horizontal Cinematic" (Variation)
// Focus: Side-scroll feel (vertical stack for now but styled differently).
// ============================================================================
function PortfolioV3({ projects }: { projects: any[] }) {
    return (
        <div className="py-24 bg-[var(--background)] min-h-screen flex items-center">
            <div className="w-full">
                {projects.map((project, index) => (
                    <div key={project.id} className={`flex flex-col md:flex-row h-[70vh] w-full border-t border-[var(--secondary)] border-opacity-20 ${index === projects.length - 1 ? 'border-b' : ''}`}>
                        <div className="w-full md:w-1/3 p-12 flex flex-col justify-between border-r border-[var(--secondary)] border-opacity-20 bg-[var(--background)] z-10">
                            <span className="text-[var(--primary)] font-mono text-xl">0{index + 1}</span>
                            <div>
                                <h3 className="text-5xl font-bold uppercase text-[var(--foreground)] mb-2 tracking-tight">{project.title}</h3>
                                <p className="text-[var(--secondary)] opacity-60 text-sm">{project.category} / {project.year}</p>
                            </div>
                            <button className="self-start text-[var(--foreground)] uppercase text-xs font-bold tracking-widest border-b border-[var(--foreground)] pb-1 hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors">
                                View Case Study
                            </button>
                        </div>
                        <div className="w-full md:w-2/3 relative overflow-hidden group">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-500" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

