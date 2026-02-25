'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do you handle everything from branding to website and e-commerce development?",
        answer: "Yes! We offer end-to-end digital solutions covering everything from brand identity to custom e-commerce experiences."
    },
    {
        question: "What's your process for delivering a project?",
        answer: "Our process typically involves a discovery phase, followed by design, development, content integration, and rigorous testing before we launch."
    },
    {
        question: "How long does a typical project take?",
        answer: "Most of our standard projects are completed within 4-8 weeks, depending on the complexity and scope of the work involved."
    },
    {
        question: "Do you provide marketing services as well?",
        answer: "Our primary focus is design and development, but we build with best-practices in SEO and provide a solid foundation for your marketing efforts."
    },
    {
        question: "Do you build MVPs or just full-scale products?",
        answer: "We do both! We can help you quickly launch an MVP to test the market, as well as scale existing products with new features."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Absolutely. We offer various support packages to ensure your website or application continues to operate smoothly post-launch."
    },
    {
        question: "What if I need ongoing updates and changes?",
        answer: "We offer monthly retainers or hourly rates for ongoing updates, giving you flexibility to grow your digital presence over time."
    },
    {
        question: "Do you work with startups or only established businesses?",
        answer: "We work with clients of all sizes! Whether you are an exciting new startup or an established enterprise, we can help elevate your brand."
    },
    {
        question: "What platforms do you build on?",
        answer: "We primarily use Framer for websites and custom design work, Shopify for e-commerce backends, and modern frameworks like React for web apps. We choose tools that give you speed, flexibility, and the ability to manage things yourself after launch."
    }
];

export default function FAQ() {
    return (
        <section id="faq" className="w-full bg-[var(--background)] py-24 md:py-32 font-sans border-t border-[var(--foreground)]/10 text-[var(--foreground)]">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold mb-16 tracking-tight uppercase text-[var(--foreground)]"
                >
                    Questions? We got answers.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-base md:text-lg py-5 hover:no-underline font-medium text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm md:text-base opacity-80 pb-6 pr-12">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
