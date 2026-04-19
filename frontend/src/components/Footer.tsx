'use client';

import React, { useEffect, useState } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import ContactForm from './ContactForm';

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
        <div id="booking-calendar" className="cal-inline-container w-full min-h-[600px] flex items-center justify-center border-[0.5px] border-[--border] rounded-[2px] mb-12" style={{ overflow: 'hidden' }}>
            <Cal
                namespace="30min"
                calLink="gothamsbat/30min"
                style={{ width: "100%", height: "100%", overflow: "hidden", minHeight: "600px" }}
                config={{ "layout": "month_view" }}
            />
        </div>
    );
}

export default function Footer() {
    const [timeString, setTimeString] = useState('');
    const [phoneCopied, setPhoneCopied] = useState(false);

    const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // On desktop, copy to clipboard; on mobile, let tel: link open dialer
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
      <section id="contact" className="w-full pt-[120px]">
        {/* Contact Form Area */}
        <div className="px-6 md:px-12 mb-32 max-w-[1200px] mx-auto">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-4">
            — Get In Touch
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-none mb-12">
            Let's Build Something
          </h2>

          <BookingCalendar />

          <ContactForm />
        </div>

        {/* Large Display Text */}
        <div className="w-full overflow-hidden flex justify-center py-[4vw]">
          <h1 className="font-serif text-[clamp(3rem,12vw,12rem)] font-light text-[--text] leading-none whitespace-nowrap tracking-tighter">
            Boring Studios
          </h1>
        </div>

        {/* Footer Grid */}
        <div className="w-full border-t-[0.5px] border-[--border] px-6 md:px-12 pt-[48px] pb-[32px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-6 pb-2 border-b-[0.5px] border-[--border]">
                Directory
              </h4>
              <div className="flex flex-col gap-4">
                <span className="font-sans text-[14px] text-[--text]">
                  Inquiries
                </span>
                <a
                  href="mailto:hello@boringstudios.pro"
                  className="font-sans text-[14px] text-[--text-muted] hover:text-[--text] transition-colors"
                >
                  kshitij@boringstudious.pro
                </a>
                <a
                  href="tel:+919644348997"
                  onClick={handlePhoneClick}
                  className="font-sans text-[14px] text-[--text-muted] hover:text-[--text] transition-colors relative group w-fit"
                  data-cursor
                >
                  {phoneCopied ? 'Copied!' : '+91 96443 48997'}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[--text] transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-6 pb-2 border-b-[0.5px] border-[--border]">
                Follow
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/kshitij-kevat-42b81a280"
                  className="font-sans text-[14px] text-[--text] hover:text-[--text-muted] transition-colors relative inline-block w-fit"
                  data-cursor
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/kshitij_00"
                  className="font-sans text-[14px] text-[--text] hover:text-[--text-muted] transition-colors relative inline-block w-fit"
                  data-cursor
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

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
              © 2025. Boring Studios. All rights reserved
            </span>
          </div>
        </div>
      </section>
    );
}
