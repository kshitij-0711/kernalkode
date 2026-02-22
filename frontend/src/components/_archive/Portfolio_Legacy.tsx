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
            {theme === 'midnight-luxe' && (
                <>
                    {variant === 'v1' && <MidnightLuxePortfolioV1 projects={projects} />}
                    {variant === 'v2' && <MidnightLuxePortfolioV2 projects={projects} />}
                    {variant === 'v3' && <MidnightLuxePortfolioV3 projects={projects} />}
                </>
            )}
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

// --- MIDNIGHT LUXE VARIANTS ---

// V1: Masonry Grid (Classic)
function MidnightLuxePortfolioV1({ projects }: { projects: any[] }) {
    return (
        <div className="w-full py-24 bg-[var(--background)] px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex justify-between items-end border-b border-[var(--secondary)] border-opacity-20 pb-8">
                    <div>
                        <span className="text-[var(--primary)] text-xs tracking-[0.3em] uppercase mb-4 block">Selected Works</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-[var(--foreground)]">Portfolio</h2>
                    </div>
                    <button className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors text-sm uppercase tracking-widest hidden md:block">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className={`group ${index % 2 === 1 ? 'md:mt-24' : ''}`}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden mb-8">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-500" />
                                <div className="absolute top-4 right-4 bg-[var(--background)] text-[var(--foreground)] w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>

                            <div className="flex justify-between items-baseline border-t border-[var(--secondary)] border-opacity-20 pt-6">
                                <div>
                                    <h3 className="text-3xl font-serif text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">{project.title}</h3>
                                    <span className="text-[var(--secondary)] text-sm tracking-widest uppercase opacity-70">{project.category}</span>
                                </div>
                                <span className="text-[var(--secondary)] font-mono text-xs opacity-50">/{project.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// V2: Horizontal Scroll (Gallery)
function MidnightLuxePortfolioV2({ projects }: { projects: any[] }) {
    const scrollRef = React.useRef(null);

    return (
        <div className="w-full py-32 bg-[var(--background)] overflow-hidden">
            <div className=" px-6 mb-16 flex justify-between items-center max-w-7xl mx-auto">
                <h2 className="text-5xl font-serif text-[var(--foreground)]">Gallery <span className="text-[var(--primary)]">.</span></h2>
                <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full border border-[var(--secondary)] border-opacity-20 flex items-center justify-center hover:bg-[var(--primary)] hover:text-[var(--background)] transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-[var(--secondary)] border-opacity-20 flex items-center justify-center hover:bg-[var(--primary)] hover:text-[var(--background)] transition-colors">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            <div className="flex gap-8 px-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
                {projects.map((project) => (
                    <div key={project.id} className="min-w-[85vw] md:min-w-[600px] snap-center group cursor-pointer relative">
                        <div className="aspect-video relative overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="text-[var(--primary)] uppercase text-xs tracking-widest mb-2 block">{project.category}</span>
                                <h3 className="text-5xl font-serif text-white mb-4">{project.title}</h3>
                                <div className="w-full h-px bg-[var(--secondary)] opacity-30 group-hover:bg-[var(--primary)] group-hover:opacity-100 transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// V3: Spotlight (One by one)
function MidnightLuxePortfolioV3({ projects }: { projects: any[] }) {
    return (
        <div className="w-full bg-[var(--background)] py-24">
            {projects.map((project, index) => (
                <div key={project.id} className="min-h-screen flex items-center sticky top-0 bg-[var(--background)] border-t border-[var(--secondary)] border-opacity-10">
                    <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                            <span className="text-[var(--primary)] text-sm font-mono mb-4 block">0{index + 1} / 0{projects.length}</span>
                            <h2 className="text-6xl md:text-8xl font-serif text-[var(--foreground)] mb-8 leading-none">{project.title}</h2>

                            <div className="grid grid-cols-2 gap-8 mb-12 border-t border-[var(--secondary)] border-opacity-20 pt-8">
                                <div>
                                    <span className="text-[var(--secondary)] text-xs uppercase tracking-widest opacity-60 block mb-2">Role</span>
                                    <span className="text-[var(--foreground)] text-sm">{project.role}</span>
                                </div>
                                <div>
                                    <span className="text-[var(--secondary)] text-xs uppercase tracking-widest opacity-60 block mb-2">Year</span>
                                    <span className="text-[var(--foreground)] text-sm">{project.year}</span>
                                </div>
                            </div>

                            <button className="flex items-center gap-4 text-[var(--primary)] uppercase text-xs tracking-[0.2em] group">
                                View Case Study
                                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                        <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} h-[60vh] relative overflow-hidden`}>
                            <div className="absolute inset-4 border border-[var(--primary)] opacity-30 z-10" />
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-80"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
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
