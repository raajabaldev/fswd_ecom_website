'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        text: "EABHAA has completely transformed my morning ritual. The Lumière Serum gave me results I hadn't achieved in years of trying premium skincare. It's truly in a league of its own.",
        author: 'Sophia Laurent',
        title: 'Beauty Editor, Vogue Paris',
        initials: 'SL',
    },
    {
        id: 2,
        text: "The packaging alone tells you this is something extraordinary. But the formula — the texture, the scent, the results — this is what luxury beauty should always feel like.",
        author: 'Amara Okonkwo',
        title: 'Creative Director',
        initials: 'AO',
    },
    {
        id: 3,
        text: "I've reviewed thousands of luxury beauty products, and EABHAA stands apart. Their commitment to rare ingredients and sensory experience is unmatched.",
        author: 'Isabelle Chen',
        title: 'Luxury Lifestyle Correspondent',
        initials: 'IC',
    },
    {
        id: 4,
        text: "From the glass bottle to the last drop — EABHAA delivers an experience that feels like it was made exclusively for you. Worth every penny.",
        author: 'Marcus Delacroix',
        title: 'Fragrance & Beauty Curator',
        initials: 'MD',
    },
]

const pressList = ['VOGUE', 'HARPERS BAZAAR', 'ELLE', 'TATLER', 'ALLURE']

export default function TestimonialSection() {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
    const next = () => setCurrent((c) => (c + 1) % testimonials.length)

    return (
        <section id="testimonials" style={{ background: '#F5EEEA', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle texture stripe */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.15,
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(201,169,110,0.08) 80px, rgba(201,169,110,0.08) 82px)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>
                        What They Say
                    </p>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#1C1C1E' }}>
                        Editorial Reviews
                    </h2>
                    <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)', margin: '20px auto 0' }} />
                </div>

                {/* Testimonial */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.5 }}
                        style={{ textAlign: 'center' }}
                    >
                        <Quote size={32} style={{ color: 'rgba(201,169,110,0.35)', margin: '0 auto 32px' }} strokeWidth={1} />

                        <blockquote style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                            color: 'rgba(28,28,30,0.75)',
                            fontWeight: 300,
                            lineHeight: 1.7,
                            fontStyle: 'italic',
                            maxWidth: '800px',
                            margin: '0 auto 40px',
                        }}>
                            &ldquo;{testimonials[current].text}&rdquo;
                        </blockquote>

                        {/* Author */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
                            <div style={{
                                width: '44px', height: '44px', borderRadius: '50%',
                                background: 'rgba(201,169,110,0.15)',
                                border: '1px solid rgba(201,169,110,0.3)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#C9A96E', fontSize: '0.9rem' }}>
                                    {testimonials[current].initials}
                                </span>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1C1C1E', fontWeight: 300, fontSize: '1rem' }}>{testimonials[current].author}</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8E8E93', marginTop: '3px' }}>{testimonials[current].title}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '56px' }}>
                    <button onClick={prev} style={{
                        width: '44px', height: '44px', borderRadius: '50%',
                        border: '1px solid rgba(28,28,30,0.15)', background: 'transparent',
                        color: '#1C1C1E', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.3s',
                    }}>
                        <ChevronLeft size={16} strokeWidth={1.5} />
                    </button>

                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                style={{
                                    background: i === current ? '#C9A96E' : 'rgba(28,28,30,0.15)',
                                    border: 'none', cursor: 'pointer', borderRadius: '100px',
                                    width: i === current ? '24px' : '8px',
                                    height: '4px',
                                    transition: 'all 0.3s',
                                }}
                            />
                        ))}
                    </div>

                    <button onClick={next} style={{
                        width: '44px', height: '44px', borderRadius: '50%',
                        border: '1px solid rgba(28,28,30,0.15)', background: 'transparent',
                        color: '#1C1C1E', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.3s',
                    }}>
                        <ChevronRight size={16} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Press Logos */}
                <div style={{ marginTop: '80px', paddingTop: '48px', borderTop: '1px solid rgba(28,28,30,0.1)' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8E8E93', textAlign: 'center', marginBottom: '32px' }}>
                        As Featured In
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        {pressList.map((mag) => (
                            <span key={mag} style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                color: 'rgba(28,28,30,0.2)',
                                fontSize: '1.15rem',
                                fontWeight: 300,
                                letterSpacing: '0.2em',
                                cursor: 'default',
                                transition: 'color 0.3s',
                            }}>
                                {mag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
