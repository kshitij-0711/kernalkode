'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const defaultServices = [
    {
        id: 1,
        title: 'Website & Landing Page',
        description: 'Stop bleeding money on ads that lead nowhere. We design sites that convert cold traffic into booked calls without you lifting a finger.',
    },
    {
        id: 2,
        title: 'E-Commerce',
        description: 'Pretty product photos mean nothing if your checkout scares customers away. We create e-commerce sites that reduce cart abandonment and turn browsers into buyers.',
    },
    {
        id: 3,
        title: 'Branding',
        description: 'Generic brand = commodity pricing. We create visual identities that let you charge 2x-3x more than competitors selling the exact same thing.',
    }
];

export default function Services() {
    const [services] = useState(defaultServices);

    return (
        <section id="services" className="min-h-screen relative z-10 bg-[var(--background)] pt-32 pb-24 md:pt-48 md:pb-40 font-sans">

            {/* Top Blur Merge Effect */}
            <div
                className="absolute top-0 left-0 w-full h-48 md:h-64 pointer-events-none z-20"
                style={{
                    background: 'linear-gradient(to bottom, var(--background) 0%, transparent 100%)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-30">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Sticky Left Column (Restored to Bold Original) */}
                    <div className="lg:w-5/12 relative">
                        <div className="lg:sticky lg:top-40 flex flex-col items-start pr-0 lg:pr-10">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[var(--primary)] text-sm font-sans uppercase tracking-[0.2em] font-semibold mb-6 block"
                            >
                                Specialization
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-5xl md:text-7xl lg:text-8xl font-sans font-black tracking-tighter text-[var(--foreground)] uppercase leading-[0.9] mb-8"
                            >
                                What<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--primary)] to-[var(--foreground)]">We Do</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="font-sans text-[var(--secondary)] text-lg leading-relaxed max-w-sm"
                            >
                                We bridge the gap between aesthetics and conversion, formulating solutions that work relentlessly for your business.
                            </motion.p>
                        </div>
                    </div>

                    {/* Scrolling Right Column (Kept Ultra Minimalist) */}
                    <div className="lg:w-7/12 flex flex-col pt-12 lg:pt-0">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="py-12 border-b border-[var(--border)] last:border-0"
                            >
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-[var(--foreground)] mb-6">
                                    {service.title}
                                </h3>

                                <p className="text-lg md:text-xl text-[var(--secondary)] font-light leading-relaxed max-w-xl opacity-80">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
