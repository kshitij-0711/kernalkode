'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    const { theme } = useTheme();

    return (
        <section id="contact" className="min-h-screen relative bg-[var(--background)] overflow-hidden flex items-center">
            {theme === 'midnight-luxe' ? <ContactLuxe /> : <ContactEditorial />}
        </section>
    );
}

// ============================================================================
// Midnight Luxe Contact (Dark/Gold/Premium)
// ============================================================================
function ContactLuxe() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* Left: Content */}
                <div>
                    <span className="text-[var(--primary)] text-xs font-mono uppercase tracking-[0.3em] mb-4 block">
                        Touch Base
                    </span>
                    <h2 className="text-6xl md:text-8xl font-serif text-[var(--foreground)] mb-8 leading-none">
                        Let's <br />
                        <span className="italic text-[var(--secondary)]">Collaborate.</span>
                    </h2>
                    <p className="text-[var(--secondary)] text-lg font-light leading-relaxed mb-12 max-w-md opacity-80">
                        We are currently accepting new projects for Q3 2024.
                        Let's build something extraordinary together.
                    </p>

                    <div className="flex flex-col gap-6">
                        <ContactItem icon={<Mail />} label="Email Us" value="hello@webcraft.com" delay={0.1} />
                        <ContactItem icon={<MapPin />} label="Visit Us" value="New York / London / Tokyo" delay={0.2} />
                    </div>

                    <div className="mt-12 flex gap-4">
                        <SocialButton icon={<Instagram size={20} />} />
                        <SocialButton icon={<Linkedin size={20} />} />
                        <SocialButton icon={<Twitter size={20} />} />
                    </div>
                </div>

                {/* Right: Calendar */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="bg-[var(--secondary)]/5 p-10 md:p-16 border border-[var(--secondary)]/10 backdrop-blur-sm relative"
                >
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[var(--primary)] opacity-20 pointer-events-none" />

                    <BookingCalendar />
                </motion.div>
            </div>
        </div>
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
            <div className="col-span-1 md:col-span-12 p-12 md:p-24 border-b border-[var(--secondary)]/20 text-center">
                <h2 className="text-[12vw] leading-[0.8] font-serif text-[var(--foreground)] tracking-tighter">
                    CONTACT <span className="text-[var(--secondary)] italic opacity-50">&</span> CONNECT
                </h2>
            </div>

            {/* Info Col */}
            <div className="col-span-1 md:col-span-4 p-12 border-r border-[var(--secondary)]/20 flex flex-col justify-between h-full bg-[var(--secondary)]/5">
                <div>
                    <span className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest mb-8 block">Directory</span>
                    <ul className="space-y-6">
                        <li className="flex flex-col">
                            <span className="text-[var(--secondary)] text-sm uppercase opacity-60 mb-1">Inquiries</span>
                            <span className="text-[var(--foreground)] text-xl font-serif">hello@webcraft.com</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-[var(--secondary)] text-sm uppercase opacity-60 mb-1">Careers</span>
                            <span className="text-[var(--foreground)] text-xl font-serif">join@webcraft.com</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <span className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest mb-4 block">Follow</span>
                    <div className="flex gap-4">
                        <Link href="#" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">Instagram</Link>
                        <Link href="#" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">LinkedIn</Link>
                    </div>
                </div>
            </div>

            {/* Calendar Col */}
            <div className="col-span-1 md:col-span-8 p-12 md:p-16 flex flex-col justify-center">
                <BookingCalendar />
            </div>
        </div>
    );
}

// ============================================================================
// Booking Calendar Component
// ============================================================================
function BookingCalendar() {
    const [step, setStep] = React.useState<'date' | 'time' | 'details' | 'success'>('date');
    const [activeMonth, setActiveMonth] = React.useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
    const [formData, setFormData] = React.useState({ name: '', email: '', topic: '' });

    // Calendar Calculations
    const year = activeMonth.getFullYear();
    const month = activeMonth.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 is Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const paddingDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);
    const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const timeSlots = ['10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:30 PM', '04:30 PM'];

    const handlePrevMonth = () => {
        setActiveMonth(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setActiveMonth(new Date(year, month + 1, 1));
    };

    const handleDateClick = (day: number) => {
        const date = new Date(year, month, day);
        if (date < today) return; // Prevent selecting past dates

        setSelectedDate(date);
        setStep('time');
    };

    const handleTimeClick = (time: string) => {
        setSelectedTime(time);
        setStep('details');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    date: selectedDate,
                    timeSlot: selectedTime,
                    topic: formData.topic
                })
            });

            if (response.ok) {
                setStep('success');
            } else {
                console.error('Booking failed');
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert('Network error. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-2xl min-h-[400px]">
            {/* Header / Nav */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-2xl font-serif text-[var(--foreground)]">
                    {step === 'date' && (
                        <div className="flex items-center gap-4">
                            <button onClick={handlePrevMonth} className="p-2 hover:bg-[var(--secondary)]/10 rounded-full transition-colors">
                                <ChevronLeft size={20} />
                            </button>
                            <span className="min-w-[150px] text-center">
                                {activeMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                            </span>
                            <button onClick={handleNextMonth} className="p-2 hover:bg-[var(--secondary)]/10 rounded-full transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                    {step === 'time' && 'Select a Time'}
                    {step === 'details' && 'Your Details'}
                    {step === 'success' && 'Confirmed'}
                </h3>
                {step !== 'date' && step !== 'success' && (
                    <button onClick={() => setStep(step === 'time' ? 'date' : 'time')} className="text-sm text-[var(--secondary)] hover:text-[var(--primary)] uppercase tracking-widest font-bold">
                        &larr; Back
                    </button>
                )}
            </div>

            {/* Step 1: Date Selection */}
            {step === 'date' && (
                <div className="grid grid-cols-7 gap-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
                        <div key={i} className="text-center text-xs uppercase tracking-widest text-[var(--secondary)] py-2 font-bold">{d}</div>
                    ))}

                    {/* Empty Padding Cells */}
                    {paddingDays.map(i => (
                        <div key={`pad-${i}`} className="aspect-square" />
                    ))}

                    {/* Actual Days */}
                    {monthDays.map(day => {
                        const date = new Date(year, month, day);
                        const isPast = date < today;
                        const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === month && selectedDate?.getFullYear() === year;

                        return (
                            <button
                                key={day}
                                onClick={() => handleDateClick(day)}
                                disabled={isPast}
                                className={`aspect-square flex items-center justify-center text-sm font-mono border transition-all 
                                    ${isPast
                                        ? 'opacity-20 cursor-not-allowed border-transparent text-[var(--foreground)]'
                                        : isSelected
                                            ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] scale-105 shadow-lg'
                                            : 'border-[var(--secondary)]/10 hover:border-[var(--primary)] text-[var(--foreground)] hover:text-[var(--primary)] hover:scale-105'
                                    }`}
                            >
                                {day}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Step 2: Time Selection */}
            {step === 'time' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {timeSlots.map(time => (
                        <button
                            key={time}
                            onClick={() => handleTimeClick(time)}
                            className="py-4 border border-[var(--secondary)]/20 text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors text-sm uppercase tracking-widest"
                        >
                            {time}
                        </button>
                    ))}
                </div>
            )}

            {/* Step 3: Details Form */}
            {step === 'details' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase tracking-widest text-[var(--primary)]">Selected Slot</span>
                        <p className="text-xl font-serif text-[var(--foreground)]">{selectedDate?.toDateString()} @ {selectedTime}</p>
                    </div>

                    <div className="space-y-4">
                        <input
                            required
                            type="text"
                            placeholder="NAME"
                            className="w-full bg-transparent border-b border-[var(--secondary)]/20 py-3 text-[var(--foreground)] outline-none focus:border-[var(--primary)] transition-colors"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                            required
                            type="email"
                            placeholder="EMAIL"
                            className="w-full bg-transparent border-b border-[var(--secondary)]/20 py-3 text-[var(--foreground)] outline-none focus:border-[var(--primary)] transition-colors"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="TOPIC (OPTIONAL)"
                            className="w-full bg-transparent border-b border-[var(--secondary)]/20 py-3 text-[var(--foreground)] outline-none focus:border-[var(--primary)] transition-colors"
                            value={formData.topic}
                            onChange={e => setFormData({ ...formData, topic: e.target.value })}
                        />
                    </div>

                    <button type="submit" className="w-full py-4 bg-[var(--foreground)] text-[var(--background)] uppercase text-xs font-bold tracking-[0.2em] hover:bg-[var(--primary)] transition-colors mt-8">
                        Confirm Booking
                    </button>
                </form>
            )}

            {/* Step 4: Success */}
            {step === 'success' && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 border border-[var(--secondary)]/10 bg-[var(--secondary)]/5"
                >
                    <CheckCircle size={48} className="text-[var(--primary)] mb-6" />
                    <h4 className="text-3xl font-serif text-[var(--foreground)] mb-2">Booking Confirmed</h4>
                    <p className="text-[var(--secondary)] max-w-sm mx-auto mb-8">
                        We have sent a Google Meet invitation to <span className="text-[var(--primary)]">{formData.email}</span>.
                    </p>
                    <button onClick={() => setStep('date')} className="text-xs uppercase tracking-widest border-b border-[var(--foreground)] pb-1 hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors">
                        Book Another
                    </button>
                </motion.div>
            )}
        </div>
    );
}

// ... (ContactItem & SocialButton remain unchanged)

function ContactItem({ icon, label, value, delay }: { icon: React.ReactNode, label: string, value: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="flex items-center gap-6 group cursor-pointer"
        >
            <div className="w-12 h-12 rounded-full border border-[var(--secondary)]/20 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--background)] transition-all duration-300">
                {icon}
            </div>
            <div>
                <span className="block text-xs uppercase tracking-widest text-[var(--secondary)] opacity-60 mb-1">{label}</span>
                <span className="text-[var(--foreground)] text-lg group-hover:text-[var(--primary)] transition-colors">{value}</span>
            </div>
        </motion.div>
    );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
    return (
        <a href="#" className="w-10 h-10 flex items-center justify-center border border-[var(--secondary)]/20 rounded-full text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
            {icon}
        </a>
    )
}
