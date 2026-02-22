'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Check, Plus, Minus, Star, Circle, Box, Cpu, Zap, Layers } from 'lucide-react';
import Link from 'next/link';
import { fetchServices } from '@/lib/api';

const defaultServices = [
    {
        id: 1,
        title: 'Website & Landing Page',
        headline: 'Turn your website into a 24/7 sales machine',
        description: 'Stop bleeding money on ads that lead nowhere. We design sites that convert cold traffic into booked calls without you lifting a finger.',
    },
    {
        id: 2,
        title: 'E-Commerce',
        headline: 'Build an online store that actually makes sales',
        description: 'Pretty product photos mean nothing if your checkout scares customers away. We create e-commerce sites that reduce cart abandonment and turn browsers into buyers.',
    },
    {
        id: 3,
        title: 'Branding',
        headline: "Look like you charge what you're worth",
        description: 'Generic brand = commodity pricing. We create visual identities that let you charge 2x-3x more than competitors selling the exact same thing.',
    }
];

export default function Services() {
    const { theme } = useTheme();
    const [services, setServices] = useState(defaultServices);

    useEffect(() => {
        // Temporarily bypassing the backend fetch so the new static services 
        // ALWAYS display perfectly without fighting the old database seeding.
        /*
        fetchServices()
            .then((data) => {
                if (data && Array.isArray(data) && data.length > 0) {
                    setServices(data);
                }
            })
            .catch((err) => console.log("Using default services:", err));
        */
    }, []);

    return (
        <section id="services" className="min-h-screen transition-colors duration-500 bg-[var(--background)] py-24 md:py-32">
            <ServicesUnio services={services} />
        </section>
    );
}

// ============================================================================
// Services: Unio Inspired (Minimalist List & Typography)
// ============================================================================
function ServicesUnio({ services }: { services: any[] }) {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

            {/* Section Header */}
            <div className="mb-20">
                <span className="text-[var(--primary)] text-xs font-mono uppercase tracking-widest font-bold mb-4 block">Expertise</span>
                <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tighter text-[var(--foreground)] uppercase mb-8">
                    What we do.
                </h2>
            </div>

            {/* List Layout */}
            <div className="flex flex-col border-t border-[var(--foreground)]/10">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 py-16 border-b border-[var(--foreground)]/10"
                    >
                        {/* Left: Title */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] tracking-tight">
                                {service.title}
                            </h3>
                        </div>

                        {/* Right: Details */}
                        <div className="flex flex-col gap-4">
                            {/* Headline */}
                            <h4 className="text-xl md:text-2xl text-[var(--foreground)] font-bold tracking-tight">
                                {service.headline || service.description}
                            </h4>

                            {/* Description Paragraph */}
                            {service.headline && (
                                <p className="text-base md:text-lg text-[var(--secondary)] font-normal leading-relaxed max-w-2xl">
                                    {service.description}
                                </p>
                            )}

                            {/* Fallback for old data with features */}
                            {service.features && service.features.length > 0 && (
                                <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4">
                                    {service.features.map((feature: string, i: number) => (
                                        <span key={i} className="text-sm text-[var(--secondary)] uppercase tracking-widest font-bold font-mono group flex items-center gap-2">
                                            <ArrowRight size={14} className="text-[var(--primary)]" />
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}



