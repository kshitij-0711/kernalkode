'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PLANS = [
    {
        title: 'Landing Page',
        description: 'For businesses launching products, testing offers or validating ideas fast.',
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
        title: 'Website & E-Commerce',
        description: 'For businesses that need a site or store that actually converts browsers into buyers.',
        features: [
            'Strategy & discovery session',
            'Up to 5–6 pages',
            'Conversion copywriting',
            'Development (Framer, Next.js, Shopify)',
            'Mobile-optimized & fast loading',
            '48-hour response time'
        ]
    }
];

export default function Pricing() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.pricing-fade',
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
            
            gsap.fromTo('.pricing-card',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.pricing-cards-container',
                        start: 'top 85%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="pricing" className="w-full px-6 md:px-12 py-[120px]" ref={containerRef} aria-label="Web design pricing plans">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-20 text-center md:text-left">
                    <p className="pricing-fade font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-4">
                        — Plans
                    </p>
                    <h2 className="pricing-fade font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-none">
                        Simple, Honest Pricing
                    </h2>
                </div>

                <div className="pricing-cards-container grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {PLANS.map((plan, idx) => (
                        <div key={idx} className="pricing-card flex flex-col bg-transparent border-[0.5px] border-[--border] hover:border-[--border-hover] transition-colors duration-300 rounded-[2px] p-[40px] md:p-[48px]">
                            <h3 className="font-serif text-[32px] font-light text-[--text] mb-4">{plan.title}</h3>
                            <p className="font-sans text-[15px] text-[--text-muted] leading-[1.6] h-[72px]">
                                {plan.description}
                            </p>

                            <div className="mt-8 mb-12 border-t-[0.5px] border-[--border]">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="py-4 border-b-[0.5px] border-[--border] font-sans text-[14px] text-[--text-muted]">
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <a href="#contact" className="group relative inline-block font-sans text-[12px] uppercase tracking-[0.12em] border-[0.5px] border-[--border-hover] py-[14px] px-[32px] overflow-hidden rounded-[2px]" data-cursor>
                                    <span className="relative z-10 transition-colors duration-300 group-hover:text-[--bg]">
                                        Book an Intro Call &rarr;
                                    </span>
                                    <div className="absolute inset-0 bg-[--text] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0"></div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pricing-fade text-center max-w-[600px] mx-auto">
                    <p className="font-sans text-[16px] text-[--text-muted] leading-[1.8] mb-8">
                        Let's see how we can fix the issues holding you back from driving more revenue.
                    </p>
                    <a href="#contact" className="group relative inline-block font-sans text-[12px] uppercase tracking-[0.12em] border-[0.5px] border-[--border-hover] py-[14px] px-[32px] overflow-hidden rounded-[2px]" data-cursor>
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-[--bg]">
                            Book an Intro Call &rarr;
                        </span>
                        <div className="absolute inset-0 bg-[--text] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
