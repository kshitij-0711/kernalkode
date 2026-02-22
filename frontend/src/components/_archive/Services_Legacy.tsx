'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Plus, Minus } from 'lucide-react';
import { fetchServices } from '@/lib/api';

const defaultServices = [
    {
        id: 1,
        title: 'Digital Strategy',
        description: 'Comprehensive roadmaps for digital transformation and market positioning.',
        icon: 'strategy',
    },
    {
        id: 2,
        title: 'Brand Identity',
        description: 'Visual systems that communicate essence and authority.',
        icon: 'brand',
    },
    {
        id: 3,
        title: 'Web Development',
        description: 'Performant, scalable, and aesthetically superior web solutions.',
        icon: 'code',
    },
    {
        id: 4,
        title: 'UI/UX Design',
        description: 'Intuitive interfaces crafted for engagement and conversion.',
        icon: 'design',
    },
];

export default function Services() {
    const { theme } = useTheme();
    const variant = 'v1' as string;
    const [services, setServices] = useState(defaultServices);

    useEffect(() => {
        fetchServices()
            .then((data) => {
                if (data && Array.isArray(data) && data.length > 0) {
                    console.log("Fetched services:", data);
                }
            })
            .catch((err) => console.log("Using default services:", err));
    }, []);

    return (
        <section id="services" className="min-h-screen transition-colors duration-500">
            {theme === 'midnight-luxe' && (
                <>
                    {variant === 'v1' && <MidnightLuxeServicesV1 services={services} />}
                    {variant === 'v2' && <MidnightLuxeServicesV2 services={services} />}
                    {variant === 'v3' && <MidnightLuxeServicesV3 services={services} />}
                </>
            )}
            {theme === 'soft-editorial' && (
                <>
                    {variant === 'v1' && <SoftEditorialServicesV1 services={services} />}
                    {variant === 'v2' && <SoftEditorialServicesV2 services={services} />}
                    {variant === 'v3' && <SoftEditorialServicesV3 services={services} />}
                </>
            )}
        </section>
    );
}

// --- MIDNIGHT LUXE VARIANTS ---

// V1: Grid Layout (Minimal Borders)
function MidnightLuxeServicesV1({ services }: { services: any[] }) {
    return (
        <div className="w-full py-24 bg-[var(--background)] px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 border-b border-[var(--secondary)] border-opacity-20 pb-8 flex justify-between items-end">
                    <div>
                        <span className="text-[var(--primary)] text-xs tracking-[0.3em] uppercase mb-4 block">Expertise</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-[var(--foreground)]">Capabilities</h2>
                    </div>
                    <div className="text-[var(--secondary)] font-mono text-sm opacity-60 hidden md:block">
                        / 002
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--secondary)] bg-opacity-10 border border-[var(--secondary)] border-opacity-10">
                    {services.map((service, index) => (
                        <div key={service.id} className="bg-[var(--background)] p-12 group hover:bg-[var(--secondary)] hover:bg-opacity-5 transition-colors duration-500 relative">
                            <span className="text-[var(--secondary)] font-mono text-xs opacity-40 mb-8 block">0{index + 1}</span>
                            <h3 className="text-3xl font-serif text-[var(--foreground)] mb-4 group-hover:text-[var(--primary)] transition-colors">{service.title}</h3>
                            <p className="text-[var(--secondary)] font-light opacity-70 max-w-sm leading-relaxed">{service.description}</p>

                            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[var(--primary)]">
                                <ArrowUpRight size={24} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// V2: Horizontal List (Accordion-like feel)
function MidnightLuxeServicesV2({ services }: { services: any[] }) {
    return (
        <div className="w-full py-32 bg-[var(--background)] px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif text-[var(--foreground)] mb-16 text-center">
                    Services <span className="text-[var(--primary)]">.</span>
                </h2>

                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <div key={service.id} className="group border-b border-[var(--secondary)] border-opacity-20 py-10 flex flex-col md:flex-row items-center justify-between hover:bg-[var(--secondary)] hover:bg-opacity-[0.02] transition-colors cursor-pointer px-4">
                            <div className="flex items-baseline gap-8 md:w-1/3">
                                <span className="text-[var(--primary)] font-mono text-sm">0{index + 1}</span>
                                <h3 className="text-3xl font-serif text-[var(--foreground)] group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                            </div>

                            <p className="text-[var(--secondary)] font-light opacity-0 md:opacity-0 md:group-hover:opacity-60 transition-opacity duration-500  md:w-1/3 text-center mt-4 md:mt-0">
                                {service.description}
                            </p>

                            <div className="md:w-1/3 flex justify-end mt-4 md:mt-0">
                                <div className="w-12 h-12 rounded-full border border-[var(--secondary)] border-opacity-30 flex items-center justify-center group-hover:border-[var(--primary)] group-hover:text-[var(--primary)] transition-all">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// V3: Interactive Cards (Hover Focus)
function MidnightLuxeServicesV3({ services }: { services: any[] }) {
    return (
        <div className="w-full py-24 bg-[var(--background)] px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-2 flex flex-col justify-center pr-12 mb-12 lg:mb-0">
                        <span className="text-[var(--primary)] text-xs tracking-widest uppercase mb-4">Our Craft</span>
                        <h2 className="text-5xl font-serif text-[var(--foreground)] mb-6 leading-tight">
                            Redefining <br /> <span className="italic text-[var(--secondary)] opacity-60">Possibility</span>
                        </h2>
                        <p className="text-[var(--secondary)] opacity-70 font-light">
                            We offer a bespoke suite of digital services designed to elevate your brand to the highest echelon.
                        </p>
                    </div>

                    {services.map((service, index) => (
                        <div key={service.id} className="min-h-[300px] border border-[var(--secondary)] border-opacity-20 p-8 flex flex-col justify-between hover:border-[var(--primary)] hover:-translate-y-2 transition-all duration-300 bg-[var(--background)] group shadow-2xl shadow-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                            <div className="flex justify-between items-start">
                                <span className="text-[var(--secondary)] font-mono text-xs opacity-50">/ 0{index + 1}</span>
                                <div className="w-2 h-2 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-serif text-[var(--foreground)] mb-4">{service.title}</h3>
                                <p className="text-[var(--secondary)] text-sm opacity-60 leading-relaxed group-hover:opacity-90 transition-opacity">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// --- SOFT EDITORIAL VARIANTS ---

// V1: Index Style (List)
function SoftEditorialServicesV1({ services }: { services: any[] }) {
    return (
        <div className="w-full py-32 bg-[var(--background)] px-6">
            <div className="max-w-5xl mx-auto">
                <div className="border-t border-[var(--secondary)] border-b mb-12 py-4 flex justify-between items-center opacity-80">
                    <span className="uppercase text-xs tracking-widest text-[var(--foreground)]">Index of Services</span>
                    <span className="uppercase text-xs tracking-widest text-[var(--foreground)]">Vol. 01</span>
                </div>

                {services.map((service, index) => (
                    <div key={service.id} className="group py-12 border-b border-[var(--secondary)] border-opacity-20 flex flex-col md:flex-row gap-8 md:items-baseline">
                        <span className="text-[var(--primary)] font-serif italic text-3xl w-16">0{index + 1}</span>
                        <div className="md:w-1/3">
                            <h3 className="text-4xl font-serif text-[var(--foreground)] group-hover:translate-x-4 transition-transform duration-500 ease-out">{service.title}</h3>
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <p className="text-[var(--secondary)] text-xl font-light opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// V2: Magazine Columns
function SoftEditorialServicesV2({ services }: { services: any[] }) {
    return (
        <div className="w-full py-24 bg-[var(--background)] px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[12vw] font-serif text-[var(--foreground)] leading-[0.8] mb-20 tracking-tighter opacity-10">
                    SERVICES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-[-10vw]">
                    {services.map((service, index) => (
                        <div key={service.id} className="flex flex-col pt-8 border-t border-[var(--primary)] relative z-10 bg-[var(--background)]">
                            <span className="text-[var(--secondary)] font-sans text-xs uppercase tracking-widest mb-6 block">
                                Fig. {index + 1}
                            </span>
                            <h3 className="text-3xl font-serif text-[var(--foreground)] mb-4 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-[var(--secondary)] text-sm leading-7 opacity-80 mb-8 border-l border-[var(--secondary)] border-opacity-20 pl-4">
                                {service.description}
                            </p>
                            <button className="self-start text-[var(--primary)] uppercase text-xs font-bold tracking-widest hover:underline">
                                Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// V3: Minimal Clean (Whitespace)
function SoftEditorialServicesV3({ services }: { services: any[] }) {
    return (
        <div className="w-full min-h-screen flex items-center bg-[var(--background)] px-6 py-24">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4 lg:col-span-3">
                    <div className="sticky top-32">
                        <span className="block w-8 h-1 bg-[var(--primary)] mb-8" />
                        <h2 className="text-5xl font-serif text-[var(--foreground)] mb-6">Offering.</h2>
                        <p className="text-[var(--secondary)] opacity-60 text-sm leading-relaxed">
                            Our approach is holistic, combining strategy, design, and technology.
                        </p>
                    </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9 space-y-24">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col md:flex-row gap-8 items-start group">
                            <div className="p-4 border border-[var(--secondary)] border-opacity-20 rounded-full text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--background)] transition-colors duration-500">
                                <Plus size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                            </div>
                            <div className="max-w-2xl">
                                <h3 className="text-4xl font-serif text-[var(--foreground)] mb-4">{service.title}</h3>
                                <p className="text-[var(--secondary)] text-xl font-light opacity-60 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
