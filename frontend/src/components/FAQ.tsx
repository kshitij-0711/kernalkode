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
        answer: "Yes. We're a full-stack shop, which means you're not juggling 3 different agencies who all blame each other when something breaks. You get one team, one point of contact, and one clear timeline. Branding, design, development, and launch, all handled."
    },
    {
        question: "What’s your process for delivering a project?",
        answer: "Week 1 is strategy call and wireframes. Week 2-3 is design plus your feedback. Week 3-4 is development and testing. Week 4 is launch and handoff. No endless revision cycles. No surprise delays. We move fast because we ask the right questions upfront instead of guessing what you want."
    },
    {
        question: "How long does a typical project take?",
        answer: "Websites take 4 weeks. E-commerce takes 6-8 weeks. Branding takes 2 weeks. Web apps take 8-12 weeks if you need them. These are real timelines, not agency math where 4 weeks means 4 months. We hit deadlines because we don't overbook."
    },
    {
        question: "Do you provide marketing services as well?",
        answer: "Yes, but only if your foundation is solid first. We don't run ads to broken websites. We'll tell you if you need to fix your site before spending money on traffic. Then we build campaigns that actually convert."
    },
    {
        question: "Do you build MVPs or just full-scale products?",
        answer: "Yes. Every project includes 30 days of post-launch support. After that, you can keep us on retainer for updates, maintenance, and optimization. Or handle it yourself. Your call."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "If you need ongoing tweaks and updates, we offer monthly retainers starting at $2K per month. Includes updates, optimizations, new pages, and priority support. For one-off fixes, we're probably not the right fit. We focus on bigger projects that move the needle."
    },
    {
        question: "What if I need ongoing updates and changes?",
        answer: "We offer monthly retainers starting at $2K per month for ongoing support. Includes updates, optimizations, new pages, and priority support. Most clients stay with us because it's easier than hiring in-house and you get agency-level quality without the overhead."
    },
    {
        question: "Do you work with startups or only established businesses?",
        answer: "Both. We work with early-stage startups that need to launch fast and established businesses ready to scale. As long as you're serious about growth and have a budget to invest in quality, we're a good fit."
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
                    className="text-3xl md:text-5xl lg:text-6xl font-excon font-bold mb-16 tracking-tight uppercase text-[var(--foreground)]"
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
