'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const QUESTIONS = [
    {
        q: "Do you handle everything from branding to website and e-commerce development?",
        a: "Yes. We’re a full-service digital partner, meaning we handle the entire project lifecycle—from visual identity and UX strategy to custom development and final deployment."
    },
    {
        q: "What's your process for delivering a project?",
        a: "We start with a deep-dive discovery to align on revenue goals. From there, we map the user journey, design the interface, develop the solution, and rigorously test before launch."
    },
    {
        q: "How long does a typical project take?",
        a: "For a landing page, it usually takes 1-2 weeks. Full-scale websites and e-commerce platforms typically span 4-8 weeks, depending on the complexity and feature requirements."
    },
    {
        q: "Do you provide marketing services as well?",
        a: "Our focus is purely on building high-converting digital assets. While we don't run ad campaigns, we ensure the platform is perfectly optimized to convert the traffic your marketing team generates."
    },
    {
        q: "Do you build MVPs or just full-scale products?",
        a: "We do both. For businesses validating new ideas, we build rapid, scalable MVPs. For established brands, we architect comprehensive, robust platforms tailored to complex operations."
    },
    {
        q: "Do you provide post-launch support?",
        a: "Absolutely. We stand by our work with continuous performance monitoring, security updates, and bug fixes to ensure your platform remains optimal post-launch."
    },
    {
        q: "What if I need ongoing updates and changes?",
        a: "We offer flexible retainer packages for continuous iteration, A/B testing, and feature development as your business evolves and scales."
    },
    {
        q: "Do you work with startups or only established businesses?",
        a: "We partner with ambitious teams across the spectrum. Whether you're a funded startup needing to make a splash or an established enterprise requiring a technical overhaul, we adapt to your scale."
    },
    {
        q: "What platforms do you build on?",
        a: "We are tech-agnostic but primarily utilize modern stacks like Next.js, React, and GSAP for custom builds, alongside leading e-commerce engines like Shopify when appropriate."
    }
];

export default function FAQ() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.faq-fade', 
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

            gsap.fromTo('.faq-row',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.faq-rows-container',
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
        <section id="faq" className="w-full px-6 md:px-12 py-[120px]" ref={containerRef}>
            <div className="max-w-[1000px] mx-auto">
                <div className="mb-16">
                    <p className="faq-fade font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-4">
                        — Questions
                    </p>
                    <h2 className="faq-fade font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-none">
                        We Got Answers.
                    </h2>
                </div>

                <div className="faq-rows-container border-t-[0.5px] border-[--border]">
                    {QUESTIONS.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const num = index < 9 ? `0${index + 1}` : index + 1;
                        return (
                            <div key={index} className="faq-row border-b-[0.5px] border-[--border]">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between py-[24px] hover:bg-[rgba(240,237,232,0.02)] transition-colors duration-300 text-left"
                                    data-cursor
                                >
                                    <div className="flex items-center gap-6 md:gap-10 pl-2">
                                        <span className="font-sans text-[11px] text-[--text-muted] min-w-[24px]">{num}</span>
                                        <span className={`font-sans text-[15px] md:text-[18px] transition-colors ${isOpen ? 'text-[--text]' : 'text-[--text-muted]'}`}>
                                            {faq.q}
                                        </span>
                                    </div>
                                    <div className={`pr-4 transform transition-transform duration-300 text-[--text-muted] ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
                                            <path d="M12 5V19M5 12H19" />
                                        </svg>
                                    </div>
                                </button>
                                <div 
                                    className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                                    style={{
                                        maxHeight: isOpen ? '250px' : '0px'
                                    }}
                                >
                                    <div className="pl-[54px] md:pl-[88px] pr-6 pb-[24px]">
                                        <p className="font-sans text-[14px] text-[--text-muted] leading-[1.8] max-w-[600px]">
                                            {faq.a}
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
