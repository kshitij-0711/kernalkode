'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SERVICES = [
    {
        id: '01',
        title: 'Website & Landing Page',
        description: 'Stop bleeding money on ads that lead nowhere. We design sites that convert cold traffic into booked calls without you lifting a finger.'
    },
    {
        id: '02',
        title: 'E-Commerce',
        description: 'Pretty product photos mean nothing if your checkout scares customers away. We create e-commerce sites that reduce cart abandonment and turn browsers into buyers.'
    },
    {
        id: '03',
        title: 'Branding',
        description: 'Generic brand = commodity pricing. We create visual identities that let you charge 2x–3x more than competitors selling the exact same thing.'
    }
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.services-fade', 
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

            gsap.fromTo('.service-row',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.services-rows-container',
                        start: 'top 90%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="services" className="w-full px-6 md:px-12 py-[120px]" ref={containerRef} aria-label="Web design and development services">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <p className="services-fade font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-4">
                        — Specialization
                    </p>
                    <h2 className="services-fade font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-none mb-8">
                        What We Do
                    </h2>
                    <p className="services-fade font-sans text-[16px] text-[--text-muted] max-w-[560px] leading-[1.8]">
                        We bridge the gap between aesthetics and conversion, formulating solutions that work relentlessly for your business.
                    </p>
                </div>

                {/* Rows */}
                <div className="services-rows-container border-t-[0.5px] border-[--border]">
                    {SERVICES.map((service, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={service.id}
                                className="service-row border-b-[0.5px] border-[--border]"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full group flex items-center justify-between py-[28px] hover:bg-[rgba(240,237,232,0.02)] transition-colors duration-300 text-left cursor-none"
                                    data-cursor
                                >
                                    <div className="flex items-center gap-6 md:gap-12 pl-2">
                                        <span className="font-sans text-[11px] text-[--text-muted] min-w-[48px]">{service.id}</span>
                                        <span className="font-serif text-[clamp(1.1rem,2.5vw,2.2rem)] font-light text-[--text] transition-colors">{service.title}</span>
                                    </div>
                                    <div className={`pr-2 transform transition-transform duration-500 ease-out ${isOpen ? 'rotate-90 text-[--text]' : 'text-[--text-muted] group-hover:translate-x-1'}`}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </button>
                                
                                {/* Accordion Content container */}
                                <div 
                                    className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                                    style={{
                                        maxHeight: isOpen ? '500px' : '0px'
                                    }}
                                >
                                    <div className="pl-[72px] md:pl-[108px] pr-6 pb-[28px]">
                                        <p className="font-sans text-[15px] text-[--text-muted] leading-[1.8] max-w-[600px]">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
