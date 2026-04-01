'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function NewsletterSection() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) setSubmitted(true)
    }

    return (
        <section style={{ background: '#1C1C1E', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
            {/* Soft gold glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '700px', height: '350px',
                background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1, textAlign: 'center' }}>

                {/* Decorative top lines */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '32px' }}>
                    <div style={{ width: '60px', height: '1px', background: 'rgba(201,169,110,0.3)' }} />
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(201,169,110,0.5)' }} />
                    <div style={{ width: '60px', height: '1px', background: 'rgba(201,169,110,0.3)' }} />
                </div>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '20px' }}>
                    Join The Inner Circle
                </p>

                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#F9F6F0', lineHeight: 1.15, marginBottom: '20px' }}>
                    The Art of Discovery
                </h2>

                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(249,246,240,0.4)', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.8, marginBottom: '48px' }}>
                    Be the first to experience new collections, exclusive launches,<br />
                    and private access to our world.
                </p>

                {!submitted ? (
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            gap: '0',
                            maxWidth: '500px',
                            margin: '0 auto',
                            border: '1px solid rgba(201,169,110,0.2)',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            background: 'rgba(255,255,255,0.04)',
                            backdropFilter: 'blur(16px)',
                        }}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            required
                            style={{
                                flex: 1, background: 'transparent',
                                color: '#F9F6F0', border: 'none', outline: 'none',
                                padding: '16px 20px',
                                fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 300,
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '0 28px', flexShrink: 0,
                                background: 'linear-gradient(135deg, #C9A96E, #E8D5A3, #C9A96E)',
                                color: '#1C1C1E', border: 'none', cursor: 'pointer',
                                fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                                display: 'flex', alignItems: 'center', gap: '6px',
                            }}
                        >
                            Subscribe
                            <ArrowRight size={13} strokeWidth={1.5} />
                        </button>
                    </form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
                    >
                        <CheckCircle size={40} style={{ color: '#C9A96E' }} strokeWidth={1} />
                        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#F9F6F0', fontSize: '1.5rem', fontWeight: 300 }}>Welcome to EABHAA</p>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8E8E93' }}>Your exclusive experience begins now</p>
                    </motion.div>
                )}

                {/* Benefits */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '36px' }}>
                    {['Early Access', 'Exclusive Offers', 'Brand Stories', 'Private Events'].map((b) => (
                        <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                            <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(201,169,110,0.5)' }} />
                            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(249,246,240,0.3)' }}>{b}</span>
                        </div>
                    ))}
                </div>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.1em', color: 'rgba(249,246,240,0.15)', marginTop: '24px' }}>
                    By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                </p>
            </div>
        </section>
    )
}
