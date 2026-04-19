'use client';

import React from 'react';

const ITEMS = [
    "Design Excellence",
    "Scalable Systems",
    "Revenue Focused",
    "Forward Thinking",
    "Pixel Perfect"
];

const SEPARATOR = "—";

export default function Marquee() {
    // Repeat items to fill wide screens
    const repeatedItems = Array(4).fill(ITEMS).flat();

    const marqueeRowPattern = repeatedItems.map((item, idx) => (
        <React.Fragment key={idx}>
            <span className="mx-4">{item}</span>
            <span className="mx-4">{SEPARATOR}</span>
        </React.Fragment>
    ));

    return (
        <section className="w-full border-y-[0.5px] border-[--border] overflow-hidden bg-transparent py-[14px]">
            {/* Top Row - Scrolling Left */}
            <div className="flex whitespace-nowrap animate-marquee w-fit mb-3">
                <div className="flex items-center font-sans text-[13px] uppercase tracking-[0.12em] text-[--text-muted]">
                    {marqueeRowPattern}
                </div>
                <div className="flex items-center font-sans text-[13px] uppercase tracking-[0.12em] text-[--text-muted]">
                    {marqueeRowPattern}
                </div>
            </div>

            {/* Bottom Row - Scrolling Right */}
            {/* 
               We start out shifted left and animate to 0 to simulate scrolling right.
               Alternatively, we can use `animate-marqueeRight` which goes from -50% to 0%.
            */}
            <div className="flex whitespace-nowrap animate-marqueeRight w-fit">
                <div className="flex items-center font-sans text-[13px] uppercase tracking-[0.12em] text-[--text-muted]">
                     {marqueeRowPattern}
                </div>
                <div className="flex items-center font-sans text-[13px] uppercase tracking-[0.12em] text-[--text-muted]">
                     {marqueeRowPattern}
                </div>
            </div>
        </section>
    );
}
