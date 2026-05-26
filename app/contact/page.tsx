'use client'
import { useState } from 'react'
import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Send, Instagram, Youtube } from 'lucide-react'

const offices = [
    { city: 'Paris', address: '14 Rue du Faubourg Saint-Honoré, 75008', role: 'Global HQ & Creative Studio' },
    { city: 'Singapore', address: '1 Raffles Quay, #50-01, 048583', role: 'Asia Pacific Headquarters' },
    { city: 'Dubai', address: 'Level 21, Boulevard Plaza, Tower 1', role: 'Middle East & Africa Office' },
]

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSent(true)
    }

    return (
        <main style={{ background: '#FAF8F5', minHeight: '100vh', paddingTop: '120px' }}>

            {/* Header */}
            <div style={{ textAlign: 'center', padding: '60px 40px 56px', borderBottom: '1px solid #E8D5C4' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>
                    Get In Touch
                </p>
                <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: '#1C1C1E', letterSpacing: '0.04em' }}>
                    Contact Us
                </h1>
                <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)', margin: '20px auto 16px' }} />
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(28,28,30,0.5)', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: 300 }}>
                    We'd love to hear from you — our team responds within 24 hours
                </p>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px 100px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'start' }}>

                    {/* Left: Contact info */}
                    <div>
                        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', fontWeight: 300, color: '#1C1C1E', marginBottom: '8px' }}>Let's Connect</h2>
                        <p style={{ color: 'rgba(28,28,30,0.5)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '40px' }}>
                            Whether you have a question about our products, need help with an order, or want to explore a collaboration — we're here for you.
                        </p>

                        {/* Contact methods */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
                            <a href="mailto:hello@eabhaa.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(201,169,110,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Mail size={16} style={{ color: '#C9A96E' }} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8E8E93' }}>Email</p>
                                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1C1C1E', fontSize: '1.05rem', fontWeight: 300, marginTop: '2px' }}>hello@eabhaa.com</p>
                                </div>
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(201,169,110,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Phone size={16} style={{ color: '#C9A96E' }} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8E8E93' }}>Phone</p>
                                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1C1C1E', fontSize: '1.05rem', fontWeight: 300, marginTop: '2px' }}>+91 98765 43210 EABHAA-1</p>
                                </div>
                            </div>
                        </div>

                        {/* Global Offices */}
                        <div>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '20px' }}>Global Offices</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {offices.map((office, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '16px', paddingBottom: '20px', borderBottom: i < offices.length - 1 ? '1px solid rgba(28,28,30,0.07)' : 'none' }}>
                                        <MapPin size={15} style={{ color: '#C9A96E', flexShrink: 0, marginTop: '2px' }} strokeWidth={1.5} />
                                        <div>
                                            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1C1C1E', fontSize: '1.05rem', fontWeight: 300 }}>{office.city}</p>
                                            <p style={{ color: 'rgba(28,28,30,0.4)', fontSize: '0.8rem', fontWeight: 300, marginTop: '2px' }}>{office.address}</p>
                                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A96E', marginTop: '4px' }}>{office.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social */}
                        <div style={{ marginTop: '40px', display: 'flex', gap: '12px' }}>
                            {[Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" style={{
                                    width: '40px', height: '40px', borderRadius: '50%',
                                    border: '1px solid rgba(28,28,30,0.12)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'rgba(28,28,30,0.4)', textDecoration: 'none',
                                    transition: 'all 0.3s',
                                }}>
                                    <Icon size={14} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div style={{
                        background: '#fff',
                        border: '1px solid rgba(201,169,110,0.1)',
                        padding: '48px',
                    }}>
                        {!sent ? (
                            <>
                                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.8rem', fontWeight: 300, color: '#1C1C1E', marginBottom: '32px' }}>
                                    Send a Message
                                </h3>
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                        <div>
                                            <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8E8E93', display: 'block', marginBottom: '8px' }}>Full Name</label>
                                            <input
                                                type="text" required placeholder="Your name"
                                                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                                style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(28,28,30,0.12)', background: '#FAF8F5', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', color: '#1C1C1E', outline: 'none', transition: 'border-color 0.2s' }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8E8E93', display: 'block', marginBottom: '8px' }}>Email Address</label>
                                            <input
                                                type="email" required placeholder="your@email.com"
                                                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                                style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(28,28,30,0.12)', background: '#FAF8F5', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', color: '#1C1C1E', outline: 'none', transition: 'border-color 0.2s' }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8E8E93', display: 'block', marginBottom: '8px' }}>Subject</label>
                                        <select
                                            value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                                            style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(28,28,30,0.12)', background: '#FAF8F5', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', color: '#1C1C1E', outline: 'none' }}
                                        >
                                            <option value="">Select a subject</option>
                                            <option>Product Enquiry</option>
                                            <option>Order Support</option>
                                            <option>Press & Media</option>
                                            <option>Wholesale & Retail</option>
                                            <option>Collaboration</option>
                                            <option>General Question</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8E8E93', display: 'block', marginBottom: '8px' }}>Message</label>
                                        <textarea
                                            rows={5} required placeholder="Tell us how we can help..."
                                            value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                            style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(28,28,30,0.12)', background: '#FAF8F5', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', color: '#1C1C1E', outline: 'none', resize: 'vertical' }}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                            padding: '15px 32px',
                                            background: 'linear-gradient(135deg, #C9A96E, #E8D5A3, #C9A96E)',
                                            color: '#1C1C1E', border: 'none', cursor: 'pointer',
                                            fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                                        }}
                                    >
                                        <Send size={13} strokeWidth={1.5} /> Send Message
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid rgba(201,169,110,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                                    <Send size={22} style={{ color: '#C9A96E' }} strokeWidth={1} />
                                </div>
                                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', fontWeight: 300, color: '#1C1C1E', marginBottom: '12px' }}>Message Sent</h3>
                                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(28,28,30,0.5)', fontSize: '1.05rem', fontStyle: 'italic', fontWeight: 300 }}>
                                    Thank you, {form.name}. We'll be in touch within 24 hours.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
