'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { fetchPortfolio } from '@/lib/api';

const defaultProjects = [
    {
        id: 1,
        title: 'Lumina',
        category: 'Digital Strategy',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2787',
        year: '2024',
        role: 'Strategy & Identity',
    },
    {
        id: 2,
        title: 'Aethel',
        category: 'Brand Identity',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2787',
        year: '2023',
        role: 'Full Stack Dev',
    },
    {
        id: 3,
        title: 'Kroma',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564',
        year: '2024',
        role: 'UI/UX Design',
    },
    {
        id: 4,
        title: 'Vesper',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1549419195-25e2da816b3f?auto=format&fit=crop&q=80&w=2480',
        year: '2023',
        role: 'Art Direction',
    },
];

export default function Portfolio() {
    const { theme } = useTheme();
    const variant = 'v1' as string;
    const [projects, setProjects] = useState(defaultProjects);

    useEffect(() => {
        fetchPortfolio()
            .then((data) => {
                if (data && Array.isArray(data) && data.length > 0) {
                    setProjects(data);
                }
            })
            .catch((err) => console.log("Using default portfolio projects:", err));
    }, []);

    return (
        <section id="portfolio" className="min-h-screen transition-colors duration-500">
            {theme === 'soft-editorial' && (
                <>
                    {variant === 'v1' && <SoftEditorialPortfolioV1 projects={projects} />}
                    {variant === 'v2' && <SoftEditorialPortfolioV2 projects={projects} />}
                    {variant === 'v3' && <SoftEditorialPortfolioV3 projects={projects} />}
                </>
            )}
        </section>
    );
}

// --- SOFT EDITORIAL VARIANTS ---

// V1: Editorial Spreads (Classic)
function SoftEditorialPortfolioV1({ projects }: { projects: any[] }) {
    return (
        <div className="w-full py-32 bg-[var(--background)] px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-32">
                    <span className="font-serif italic text-2xl text-[var(--secondary)] opacity-60">Visual Stories</span>
                </div>

                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center group`}>
                            <div className="w-full md:w-1/2 relative aspect-[3/4]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                                />
                                <div className="absolute -bottom-6 -right-6 text-[10rem] font-serif text-[var(--foreground)] opacity-5 md:opacity-10 leading-none z-[-1] group-hover:translate-x-4 transition-transform">
                                    {index + 1}
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <span className="text-[var(--primary)] text-xs uppercase tracking-widest border-b border-[var(--primary)] pb-1 mb-6 inline-block">
                                    {project.category}
                                </span>
                                <h3 className="text-5xl md:text-7xl font-serif text-[var(--foreground)] mb-8">{project.title}</h3>
                                <p className="text-[var(--secondary)] text-lg font-light leading-relaxed max-w-md opacity-80 mb-8">
                                    An exploration of form and function. {project.role} for a leading brand in the sector.
                                </p>
                                <button className="text-[var(--foreground)] text-sm font-bold uppercase tracking-widest hover:text-[var(--primary)] transition-colors">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// V2: Minimal List (Text Focus)
function SoftEditorialPortfolioV2({ projects }: { projects: any[] }) {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <div className="w-full py-24 bg-[var(--background)] min-h-screen relative flex items-center">

            {/* Background Image Preview */}
            {projects.map((project) => (
                <div
                    key={project.id}
                    className={`fixed inset-0 z-0 transition-opacity duration-700 ${hoveredProject === project.id ? 'opacity-20' : 'opacity-0'}`}
                >
                    <Image src={project.image} alt="" fill className="object-cover grayscale" />
                </div>
            ))}

            <div className="max-w-5xl mx-auto w-full px-6 relative z-10">
                <h2 className="text-xs font-sans text-[var(--secondary)] uppercase tracking-widest mb-12 border-b border-[var(--secondary)] border-opacity-20 pb-4">
                    Index of Works
                </h2>

                <div>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className="flex justify-between items-baseline py-8 border-b border-[var(--secondary)] border-opacity-20 cursor-pointer group hover:pl-8 transition-all duration-300"
                        >
                            <h3 className="text-5xl md:text-8xl font-serif text-[var(--foreground)] opacity-80 group-hover:opacity-100 group-hover:italic transition-all">
                                {project.title}
                            </h3>
                            <span className="text-[var(--secondary)] text-sm uppercase tracking-widest group-hover:text-[var(--primary)]">
                                {project.category}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// V3: Magazine Grid (Mixed Sizes)
function SoftEditorialPortfolioV3({ projects }: { projects: any[] }) {
    return (
        <div className="w-full py-24 bg-[var(--background)] px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[12vw] leading-none font-serif text-[var(--foreground)] text-center mb-12 opacity-90 border-b border-[var(--foreground)] pb-8">
                    SELECTION
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
                    {projects.map((project, index) => {
                        // Simple logic to vary grid spans
                        const colSpan = index % 3 === 0 ? 'md:col-span-8' : index % 3 === 1 ? 'md:col-span-4' : 'md:col-span-12';

                        return (
                            <div key={project.id} className={`${colSpan} relative group overflow-hidden border border-[var(--secondary)] border-opacity-10 min-h-[400px]`}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-500" />

                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-[var(--background)] text-[var(--foreground)] text-xs uppercase px-2 py-1 tracking-widest">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="absolute bottom-6 left-6 z-10">
                                    <h3 className="text-4xl md:text-6xl font-serif text-white mb-2">{project.title}</h3>
                                    <p className="text-white text-sm opacity-80 max-w-xs hidden group-hover:block transition-all animate-fadeIn">
                                        Designed to capture the essence of the brand through minimal aesthetics.
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
