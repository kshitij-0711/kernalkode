'use client';

import React, { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Fake submission for aesthetic purposes
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-[600px] flex flex-col gap-8 mt-12">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 flex flex-col">
                    <label htmlFor="name" className="font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-2">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        required
                        className="bg-transparent border-b-[0.5px] border-[--border] py-3 font-sans text-[15px] text-[--text] placeholder:text-[--text-muted] focus:outline-none focus:border-[--text] transition-colors rounded-none"
                        placeholder="John Doe"
                    />
                </div>
                <div className="flex-1 flex flex-col">
                    <label htmlFor="email" className="font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-2">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        required
                        className="bg-transparent border-b-[0.5px] border-[--border] py-3 font-sans text-[15px] text-[--text] placeholder:text-[--text-muted] focus:outline-none focus:border-[--text] transition-colors rounded-none"
                        placeholder="john@example.com"
                    />
                </div>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="message" className="font-sans text-[11px] uppercase tracking-[0.2em] text-[--text-muted] mb-2">Message</label>
                <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="bg-transparent border-b-[0.5px] border-[--border] py-3 font-sans text-[15px] text-[--text] placeholder:text-[--text-muted] focus:outline-none focus:border-[--text] transition-colors resize-none rounded-none"
                    placeholder="Tell us about your project..."
                />
            </div>

            <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="group relative self-start font-sans text-[12px] uppercase tracking-[0.12em] border-[0.5px] border-[--border-hover] py-[14px] px-[32px] overflow-hidden rounded-[2px] disabled:opacity-50"
                data-cursor
            >
                <span className={`relative z-10 transition-colors duration-300 ${status !== 'success' && status !== 'submitting' ? 'group-hover:text-[--bg]' : ''}`}>
                    {status === 'idle' && 'Send Inquiry →'}
                    {status === 'submitting' && 'Sending...'}
                    {status === 'success' && 'Sent'}
                </span>
                {status === 'idle' && (
                    <div className="absolute inset-0 bg-[--text] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0"></div>
                )}
            </button>
        </form>
    );
}
