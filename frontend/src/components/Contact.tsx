'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Cal, { getCalApi } from "@calcom/embed-react";
import { ArrowUpRight, Mail, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen relative bg-[var(--background)] overflow-hidden flex items-center">
            <ContactEditorial />
        </section>
    );
}

// ============================================================================
// Soft Editorial Contact (Light/Magazine/Structured)
// ============================================================================
// ... (previous imports)
import { ChevronLeft, ChevronRight, Calendar, Clock, User, CheckCircle } from 'lucide-react';

// ... (Contact export)

// ============================================================================
// Soft Editorial Contact (Light/Magazine/Structured)
// ============================================================================
function ContactEditorial() {
    return (
        <div className="w-full h-full min-h-screen grid grid-cols-1 md:grid-cols-12 border-t border-[var(--secondary)]/20">
            {/* Title Section */}
            <div className="col-span-1 md:col-span-12 py-16 px-6 border-b border-[var(--secondary)]/20 text-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-excon font-bold text-[var(--foreground)] tracking-tight">
                    CONTACT{" "}
                    <span className="text-[var(--secondary)] opacity-50 mx-2 font-bold">
                        &
                    </span>{" "}
                    CONNECT
                </h2>
            </div>

            {/* Calendar Col */}
            <div className="col-span-1 md:col-span-12 p-4 md:p-12 border-b border-[var(--secondary)]/20 flex flex-col justify-center w-full max-w-5xl mx-auto">
                <BookingCalendar />
            </div>

            {/* Info Col */}
            <div className="col-span-1 md:col-span-12 p-12 flex flex-col md:flex-row justify-between items-start md:items-center bg-[var(--secondary)]/5">
                <div>
                    <span className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest mb-8 block">
                        Directory
                    </span>
                    <ul className="space-y-6 md:space-y-0 md:flex md:gap-16">
                        <li className="flex flex-col group cursor-pointer w-fit">
                            <span className="text-[var(--secondary)] text-sm uppercase opacity-60 mb-1">
                                Inquiries
                            </span>
                            <a
                                href="mailto:kshitij@boringstudious.pro"
                                className="relative w-fit block"
                            >
                                <span className="text-[var(--foreground)] text-xl font-sans font-light">
                                    kshitij@boringstudious.pro
                                </span>
                                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[var(--foreground)] transition-all duration-500 group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mt-12 md:mt-0">
                    <span className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest mb-4 md:mb-8 block md:text-right">
                        Follow
                    </span>
                    <div className="flex gap-6 md:justify-end">
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="relative group text-[var(--foreground)] text-lg w-fit"
                        >
                            {/* <span>X</span> */}
                            
                            <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[var(--foreground)] transition-all duration-500 group-hover:w-full"></span>
                        </button>
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="relative group text-[var(--foreground)] text-lg w-fit"
                        >
                            <span>LinkedIn</span>
                            <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[var(--foreground)] transition-all duration-500 group-hover:w-full"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// Booking Calendar Component
// ============================================================================
function BookingCalendar() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", {
                "hideEventTypeDetails": false,
                "layout": "month_view",
                "cssVarsPerTheme": {
                    "light": { "cal-bg": "transparent" },
                    "dark": { "cal-bg": "transparent" }
                }
            });
        })();
    }, []);

    return (
        <div id="booking-calendar" className="cal-inline-container w-full h-full min-h-[600px] flex items-center justify-center" style={{ overflow: 'hidden' }}>
            <Cal
                namespace="30min"
                calLink="gothamsbat/30min"
                style={{ width: "100%", height: "100%", overflow: "hidden", minHeight: "700px" }}
                config={{ "layout": "month_view" }}
            />
        </div>
    );
}

// ... (ContactItem & SocialButton remain unchanged)

function ContactItem({ icon, label, value, delay }: { icon: React.ReactNode, label: string, value: string, delay: number }) {
    const [copied, setCopied] = useState(false);
    const isEmail = value.includes('@');

    const handleCopy = () => {
        if (isEmail) return;
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const content = (
        <>
            <div className="w-12 h-12 rounded-full border border-[var(--secondary)]/20 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--background)] transition-all duration-300">
                {icon}
            </div>
            <div>
                <span className="block text-xs uppercase tracking-widest text-[var(--secondary)] opacity-60 mb-1">{label}</span>
                <div className="relative w-fit">
                    <span className="text-[var(--foreground)] text-lg">{copied ? "Copied!" : value}</span>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[var(--foreground)] transition-all duration-500 group-hover:w-full"></span>
                </div>
            </div>
        </>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="group cursor-pointer"
            onClick={handleCopy}
        >
            {isEmail ? (
                <a href={`mailto:${value}`} className="flex items-center gap-6">
                    {content}
                </a>
            ) : (
                <div className="flex items-center gap-6">
                    {content}
                </div>
            )}
        </motion.div>
    );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
    return (
        <button onClick={(e) => e.preventDefault()} className="w-10 h-10 flex items-center justify-center border border-[var(--secondary)]/20 rounded-full text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
            {icon}
        </button>
    )
}
