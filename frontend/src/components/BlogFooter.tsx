'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogFooter() {
    const [timeString, setTimeString] = useState('');
    const [phoneCopied, setPhoneCopied] = useState(false);

    const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
        if (!isMobile) {
            e.preventDefault();
            navigator.clipboard.writeText('+91 9644348997');
            setPhoneCopied(true);
            setTimeout(() => setPhoneCopied(false), 2000);
        }
    };

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTimeString(now.toLocaleTimeString('en-US', { hour12: false }));
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
      <section className="w-full pt-[80px]">
        {/* Large Display Text */}
        <div className="w-full overflow-hidden flex justify-center py-[4vw]">
          <Link
            href="/"
            className="font-serif text-[clamp(3rem,12vw,12rem)] font-light text-[--text] leading-none whitespace-nowrap tracking-tighter hover:text-[--text-muted] transition-colors duration-500"
            data-cursor
          >
            Boring Studios
          </Link>
        </div>

        {/* Footer Grid */}
        <footer className="w-full border-t-[0.5px] border-[--border] px-6 md:px-12 pt-[48px] pb-[32px]" role="contentinfo">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <nav aria-label="Contact information">
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-6 pb-2 border-b-[0.5px] border-[--border]">
                Directory
              </h4>
              <address className="flex flex-col gap-4 not-italic">
                <span className="font-sans text-[14px] text-[--text]">
                  Inquiries
                </span>
                <a
                  href="mailto:kshitij@boringstudious.pro"
                  className="font-sans text-[14px] text-[--text-muted] hover:text-[--text] transition-colors"
                  aria-label="Email Boring Studios at kshitij@boringstudious.pro"
                >
                  kshitij@boringstudious.pro
                </a>
                <a
                  href="tel:+919644348997"
                  onClick={handlePhoneClick}
                  className="font-sans text-[14px] text-[--text-muted] hover:text-[--text] transition-colors relative group w-fit"
                  data-cursor
                  aria-label="Call Boring Studios at +91 96443 48997"
                >
                  {phoneCopied ? 'Copied!' : '+91 96443 48997'}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[--text] transition-all duration-300 group-hover:w-full" />
                </a>
              </address>
            </nav>

            <nav aria-label="Pages">
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-6 pb-2 border-b-[0.5px] border-[--border]">
                Pages
              </h4>
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="font-sans text-[14px] text-[--text] hover:text-[--text-muted] transition-colors relative inline-block w-fit"
                  data-cursor
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="font-sans text-[14px] text-[--text] hover:text-[--text-muted] transition-colors relative inline-block w-fit"
                  data-cursor
                >
                  Blog
                </Link>
              </div>
            </nav>

            <nav aria-label="Social media links">
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-6 pb-2 border-b-[0.5px] border-[--border]">
                Follow
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/kshitij-kevat-42b81a280"
                  className="font-sans text-[14px] text-[--text] hover:text-[--text-muted] transition-colors relative inline-block w-fit"
                  data-cursor
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Boring Studios on LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/kshitij_00"
                  className="font-sans text-[14px] text-[--text] hover:text-[--text-muted] transition-colors relative inline-block w-fit"
                  data-cursor
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Boring Studios on Twitter"
                >
                  Twitter
                </a>
              </div>
            </nav>
          </div>
        </footer>

        {/* Footer Bar */}
        <div className="w-full border-t-[0.5px] border-[--border] px-6 md:px-12 py-[16px]">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-sans text-[12px] text-[--text-muted]">
              Worldwide
            </span>
            <span
              className="font-mono text-[12px] text-[--text-muted]"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {timeString || "00:00:00"}
            </span>
            <span className="font-sans text-[12px] text-[--text-muted]">
              © {new Date().getFullYear()} Boring Studios. All rights reserved.
            </span>
          </div>
        </div>
      </section>
    );
}
