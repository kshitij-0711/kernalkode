'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from './SplitText';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollLineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateHero = () => {
            const tl = gsap.timeline();

            // Animate headline words
            tl.to('.hero-word', {
                y: '0%',
                duration: 0.7,
                stagger: 0.06,
                ease: 'power3.out',
            });

            // Animate label, subtext, and button
            tl.to('.hero-fade', {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out',
            }, "+=0.2");
        };

        // Listen for preloader completion to start hero animations
        const handlePreloaderComplete = () => {
            animateHero();
        };

        window.addEventListener('preloader-complete', handlePreloaderComplete);

        // Fallback in case preloader isn't used or already finished
        const fallbackTimer = setTimeout(() => {
            if (!document.querySelector('.hero-word[style*="transform"]')) {
               // animateHero(); // uncomment if we want standalone hero testing
            }
        }, 3000);

        return () => {
            window.removeEventListener('preloader-complete', handlePreloaderComplete);
            clearTimeout(fallbackTimer);
        };
    }, []);

    return (
        <section className="relative w-full h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-24" id="home">
            <div ref={containerRef} className="max-w-[1200px]">
                <h1 className="font-serif text-[clamp(2.5rem,8vw,7rem)] leading-[1.05] font-light mb-8 max-w-[1400px] tracking-[-0.05em]">
                    <div className="flex flex-wrap">
                        <SplitText 
                            text="We help businesses increase revenue" 
                            wordClass="hero-word inline-block translate-y-[100%]" 
                        />
                    </div>
                    <div className="flex flex-wrap">
                        <SplitText 
                            text="through strategy driven websites." 
                            wordClass="hero-word inline-block translate-y-[100%]" 
                        />
                    </div>
                </h1>

                <p className="hero-fade font-sans text-[15px] md:text-[16px] text-[--text-muted] max-w-[520px] leading-[1.8] mb-12 opacity-0 translate-y-5">
                    Revenue-first design and development for businesses that refuse to blend in.
                </p>

                <div className="hero-fade opacity-0 translate-y-5 inline-block">
                    {/* The Button */}
                    <a href="#contact" className="group relative inline-block font-sans text-[12px] uppercase tracking-[0.12em] border-[0.5px] border-[--border-hover] py-[14px] px-[32px] overflow-hidden rounded-[2px]" data-cursor>
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-[--bg]">
                            Book an Intro Call &rarr;
                        </span>
                        {/* Fill effect */}
                        <div className="absolute inset-0 bg-[--text] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
