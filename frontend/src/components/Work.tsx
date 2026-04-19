'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const WORKS = [
    {
        id: '01',
        name: 'Innovative Design Build',
        description: 'Premium architectural firm website — brutalist dark-mode design with full-bleed imagery and bold typography.',
        tags: ['Next.js', 'Design', 'Development'],
        link: 'https://innovative-design-build.vercel.app/',
        image: '/idb.png'
    },
    {
        id: '02',
        name: 'Curator Site',
        description: 'Online art gallery and curation agency — editorial luxury aesthetic with a sophisticated layout.',
        tags: ['UI/UX', 'Branding', 'Framer'],
        link: 'https://curator-site-gamma.vercel.app/',
        image: '/curated.png'
    }
];

export default function Work() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.work-header-fade', 
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                    }
                }
            );

            gsap.fromTo('.work-card',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.work-cards-container',
                        start: 'top 90%',
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Floating image follows mouse
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!imageRef.current || activeIndex === null) return;
            
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(imageRef.current, {
                x: x - 160,
                y: y - 100,
                duration: 0.4,
                ease: 'power2.out',
            });
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            container?.removeEventListener('mousemove', handleMouseMove);
        };
    }, [activeIndex]);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'power3.out',
            });
        }
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
                ease: 'power3.in',
            });
        }
    };

    return (
        <section id="work" className="w-full px-6 md:px-12 py-[120px]" ref={containerRef}>
            <div className="max-w-[1200px] mx-auto relative">
                {/* Header */}
                <div className="mb-20">
                    <div className="overflow-hidden mb-4">
                        <p className="work-header-fade font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted]">
                            — Selected Work
                        </p>
                    </div>
                    <div className="overflow-hidden">
                        <h2 className="work-header-fade font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-none">
                            Our Portfolio
                        </h2>
                    </div>
                    <div className="overflow-hidden mt-8 max-w-[560px]">
                        <p className="work-header-fade font-sans text-[clamp(0.8rem,1.5vw,1rem)] text-[--text-muted] leading-[1.8]">
                            A curated selection of our recent digital experiences.
                        </p>
                    </div>
                </div>

                {/* Floating Image Element (hidden by default, appears on hover)
                <div
                    ref={imageRef}
                    className="hidden md:block absolute z-20 pointer-events-none w-[320px] h-[200px] rounded-[2px] overflow-hidden opacity-0 scale-90"
                    style={{ willChange: 'transform, opacity' }}
                >
                    {activeIndex !== null && (
                        <Image
                            src={WORKS[activeIndex].image}
                            alt={WORKS[activeIndex].name}
                            fill
                            className="object-cover"
                            sizes="320px"
                        />
                    )}
                </div> */}

                {/* Project Cards */}
                <div className="work-cards-container grid grid-cols-1 md:grid-cols-2 gap-6">
                    {WORKS.map((work, index) => (
                        <a 
                            key={work.id}
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work-card group block border-[0.5px] border-[--border] hover:border-[--border-hover] rounded-[2px] overflow-hidden transition-all duration-500"
                            data-cursor
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Card Image */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden">
                                <Image
                                    src={work.image}
                                    alt={work.name}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Subtle dark overlay for readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[--bg] via-transparent to-transparent opacity-60" />

                                {/* Arrow indicator */}
                                <div className="absolute top-4 right-4 w-10 h-10 border-[0.5px] border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 md:p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span className="font-sans text-[11px] text-[--text-muted] uppercase tracking-[0.15em] block mb-2">{work.id}</span>
                                        <h3 className="font-serif text-[clamp(1.2rem,2vw,1.8rem)] font-light text-[--text] leading-tight">
                                            {work.name}
                                        </h3>
                                    </div>
                                </div>
                                <p className="font-sans text-[clamp(0.75rem,1.2vw,0.9rem)] text-[--text-muted] leading-[1.7] mb-6 max-w-[400px]">
                                    {work.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {work.tags.map((tag) => (
                                        <span 
                                            key={tag} 
                                            className="font-sans text-[10px] uppercase tracking-[0.12em] text-[--text-muted] border-[0.5px] border-[--border] px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
