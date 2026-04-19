'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const topHalfRef = useRef<HTMLDivElement>(null);
    const bottomHalfRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Counter animation
        const obj = { val: 0 };
        gsap.to(obj, {
            val: 100,
            duration: 1.8,
            ease: "power3.inOut",
            onUpdate: () => {
                setProgress(Math.floor(obj.val));
            },
            onComplete: () => {
                // Wipe animation
                const tl = gsap.timeline();
                
                tl.to(contentRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.out"
                }, 0);

                tl.to(topHalfRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power3.inOut"
                }, 0.2);

                tl.to(bottomHalfRef.current, {
                    yPercent: 100,
                    duration: 0.8,
                    ease: "power3.inOut"
                }, 0.2);

                // Start hero text entrance after wipe finishes (or near finish)
                // This assumes we trigger a global event or the hero component triggers itself on mount
                // We'll use a global JS custom event for simplicity
                tl.add(() => {
                    if (containerRef.current) {
                        containerRef.current.style.display = 'none';
                    }
                    window.dispatchEvent(new Event('preloader-complete'));
                }, "-=0.2");
            }
        });
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[9999] pointer-events-none flex flex-col">
            {/* Top Wipe Half */}
            <div ref={topHalfRef} className="flex-1 bg-[--bg] w-full transform origin-top will-change-transform"></div>
            {/* Bottom Wipe Half */}
            <div ref={bottomHalfRef} className="flex-1 bg-[--bg] w-full transform origin-bottom will-change-transform"></div>
            
            <div ref={contentRef} className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="font-serif text-[clamp(2.5rem,8vw,7rem)] font-light opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                    Boring.
                </h1>
                <p className="font-sans text-[12px] uppercase text-[--text-muted] tracking-widest mt-4">
                    {progress}%
                </p>
            </div>
        </div>
    );
}
