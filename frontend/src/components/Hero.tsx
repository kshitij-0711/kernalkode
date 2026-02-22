'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Globe, Circle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen relative bg-[var(--background)] overflow-hidden flex flex-col pt-24">
            <HeroEditorial />
        </section>
    );
}

// ============================================================================
// Hero Background (Unio Inspired blurred mesh & noise)
// ============================================================================
function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Noise Overlay */}
            <div
                className="absolute inset-0 z-10 opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Glowing Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full filter blur-[100px] opacity-[0.15] bg-[var(--primary)]"
            />
            <motion.div
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, 100, -50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full filter blur-[120px] opacity-[0.12] bg-[var(--secondary)]"
            />
        </div>
    );
}

// ============================================================================
// Hero: Unio Inspired (Typography Focused & Left Aligned)
// ============================================================================
function HeroEditorial() {
    return (
        <>
            <HeroBackground />
            <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl relative z-10 w-full mx-auto">



                <div className="mt-20 md:mt-0 max-w-5xl">
                    {/* Massive Left-Aligned Headline */}
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[12vw] md:text-[8vw] leading-[0.9] font-sans font-black tracking-tighter text-[var(--foreground)] mb-8"
                    >
                        WE BUILD DIGITAL <br />
                        <span className="text-[var(--primary)]">LEGACIES.</span>
                    </motion.h1>

                    {/* Sub-headline with text generation effect */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.015, delayChildren: 0.1 }
                            }
                        }}
                        initial="hidden"
                        animate="visible"
                        className="text-lg md:text-2xl text-[var(--secondary)] font-light leading-relaxed max-w-2xl mb-12 min-h-[4rem]"
                    >
                        {"Revenue-first design and development for businesses that refuse to blend in. We transform complex problems into elegant web experiences.".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 }
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>

                    {/* Pill CTAs */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="#contact" className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full hover:bg-[var(--primary)] hover:text-white transition-all duration-300 font-bold text-center">
                            Start a Project
                        </Link>
                        <Link href="#portfolio" className="px-8 py-4 bg-transparent border-2 border-[var(--foreground)]/20 text-[var(--foreground)] rounded-full hover:border-[var(--foreground)] transition-all duration-300 font-bold text-center flex items-center justify-center gap-2">
                            View Our Work <ArrowUpRight size={18} />
                        </Link>
                    </motion.div>
                </div>

                {/* Bottom Marquee (Absolute to stick to bottom of hero) */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--foreground)]/10 bg-[var(--background)]/80 backdrop-blur-sm py-4 overflow-hidden">
                    <div className="flex items-center">
                        <div className="flex-1 overflow-hidden relative">
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="flex whitespace-nowrap items-center gap-12 px-6 text-[var(--foreground)]/40 font-bold text-xl uppercase tracking-widest"
                            >
                                {/* Duplicate set for seamless looping */}
                                <span>Design Excellence</span> <Circle size={8} />
                                <span>Scalable Systems</span> <Circle size={8} />
                                <span>Revenue Focused</span> <Circle size={8} />
                                <span>Forward Thinking</span> <Circle size={8} />
                                <span>Pixel Perfect</span> <Circle size={8} />

                                <span>Design Excellence</span> <Circle size={8} />
                                <span>Scalable Systems</span> <Circle size={8} />
                                <span>Revenue Focused</span> <Circle size={8} />
                                <span>Forward Thinking</span> <Circle size={8} />
                                <span>Pixel Perfect</span> <Circle size={8} />
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
