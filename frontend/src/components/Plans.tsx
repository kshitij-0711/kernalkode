'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';


const plans = [
    {
        title: 'High-Converting Landing Page',
        description: 'For businesses launching products, testing offers or validating ideas fast without waiting weeks.',
        features: [
            'Strategy & discovery session',
            'Conversion copywriting',
            'Mobile-optimized design',
            'Unlimited revisions',
            'Analytics setup',
            '48-hour response time'
        ]
    },
    {
        title: 'Websites & E-Commerce',
        description: 'For businesses that need a website or online store that actually converts browsers into buyers.',
        features: [
            'Strategy & discovery session',
            'Up to 5-6 pages',
            'Conversion copywriting',
            'Development (Framer, Next.js, Shopify)',
            'Mobile-optimized & fast loading',
            '48-hour response time'
        ]
    }
];

export default function Plans() {
    return (
        <section id="plans" className="relative z-10 bg-[var(--background)] py-24 md:py-32 font-sans border-t border-[var(--foreground)]/10">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-[var(--foreground)] mb-12 tracking-tight uppercase"
                >
                    Plans
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="border border-[var(--foreground)]/10 rounded-2xl flex flex-col overflow-hidden bg-transparent"
                        >
                            {/* Card Header */}
                            <div className="bg-[var(--foreground)]/5 p-8 md:p-10 border-b border-[var(--foreground)]/10">
                                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                                    {plan.title}
                                </h3>
                                <p className="text-[var(--foreground)] opacity-60 text-sm leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Card Body */}
                            <div className="p-8 md:p-10 flex-1">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <Check size={18} className="text-[var(--foreground)] opacity-90 shrink-0 mt-[2px]" />
                                            <span className="text-[var(--foreground)] text-sm opacity-80 leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-20 text-center flex flex-col items-center"
                >
                    <p className="text-[var(--foreground)] text-base md:text-lg mb-8 opacity-90">
                        Let's see how we can fix the issues that are holding you back from driving more revenue today!
                    </p>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('booking-calendar')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative overflow-hidden px-8 py-3 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-full isolate hover:bg-[var(--primary)] text-center inline-block"
                    >
                        <span className="absolute inset-0 w-full h-full -z-10 bg-[var(--foreground)] -translate-y-full rounded-b-[50%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                        <span className="relative z-10 overflow-hidden block">
                            <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[150%]">Book an Intro Call</span>
                            <span className="absolute inset-0 flex items-center justify-center text-[var(--background)] -translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">Book an Intro Call</span>
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
