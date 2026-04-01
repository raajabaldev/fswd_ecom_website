'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const categories = [
    {
        id: 1,
        label: 'Skincare',
        title: 'Radiant Skin',
        subtitle: 'Rare Botanicals',
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=580&fit=crop&q=90',
        items: '24 Products',
    },
    {
        id: 2,
        label: 'Makeup',
        title: 'Art of Color',
        subtitle: 'Refined Pigments',
        image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2171?w=800&h=580&fit=crop&q=90',
        items: '31 Products',
    },
    {
        id: 3,
        label: 'Fragrances',
        title: 'Olfactory',
        subtitle: 'Luxury Scents',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&h=580&fit=crop&q=90',
        items: '12 Products',
    },
    {
        id: 4,
        label: 'Body',
        title: 'Silk Rituals',
        subtitle: 'Full Body Luxury',
        image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=800&h=580&fit=crop&q=90',
        items: '18 Products',
    },
]

export default function CollectionGrid() {
    return (
        <section id="collections" style={{ background: '#FAF8F5', padding: '100px 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>
                        Curated For You
                    </p>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#1C1C1E', letterSpacing: '0.05em' }}>
                        Featured Collections
                    </h2>
                    <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)', margin: '24px auto 0' }} />
                </div>

                {/* 4-col grid — uses global .cat-grid class */}
                <div className="cat-grid">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            className="cat-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <Link href="/products" style={{ display: 'block', textDecoration: 'none', cursor: 'pointer' }}>
                                {/* Aspect-ratio image container */}
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '130%', overflow: 'hidden', background: '#F0E8E0' }}>
                                    <div
                                        className="cat-img"
                                        style={{ backgroundImage: `url(${cat.image})` }}
                                    />
                                    {/* Bottom gradient */}
                                    <div style={{
                                        position: 'absolute', bottom: 0, left: 0, right: 0, height: '65%',
                                        background: 'linear-gradient(to top, rgba(28,28,30,0.85) 0%, transparent 100%)',
                                    }} />
                                    {/* Text overlay */}
                                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '4px' }}>{cat.label}</p>
                                        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#F9F6F0', fontWeight: 300, fontSize: '1.5rem' }}>{cat.title}</h3>
                                        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(249,246,240,0.5)', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '2px' }}>{cat.subtitle}</p>
                                    </div>
                                    <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{cat.items}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: '56px' }}>
                    <Link href="/products" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '14px 40px', background: '#1C1C1E', color: '#F9F6F0',
                        fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                        textDecoration: 'none',
                    }}>
                        View All Collections <ArrowRight size={14} strokeWidth={1.5} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
