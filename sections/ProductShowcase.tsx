'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Star, Plus, Minus } from 'lucide-react'
import { useCart } from '@/components/CartContext'

const product = {
    id: 101,
    name: 'Lumière Élixir Serum',
    subtitle: 'Radiance & Renewal Complex',
    price: '$285',
    description: 'A concentrated luxury serum infused with rare Damascena rose extract, 24K gold particles, and peptide complex. Visibly transforms skin luminosity in 14 days.',
    notes: ['Damascena Rose Extract', '24K Gold Particles', 'Peptide Complex', 'Hyaluronic Acid'],
    rating: 4.9,
    reviews: 1240,
}

export default function ProductShowcase() {
    const { addItem } = useCart()
    const [qty, setQty] = useState(1)
    const [addedFlash, setAddedFlash] = useState(false)

    const handleAdd = () => {
        for (let i = 0; i < qty; i++) {
            addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=240&fit=crop&q=80',
            })
        }
        setAddedFlash(true)
        setTimeout(() => setAddedFlash(false), 1500)
        setQty(1)
    }

    return (
        <section style={{ background: '#1C1C1E', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle ambient glow — no dots */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px', height: '500px',
                background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
                <div className="product-grid">

                    {/* Left — product image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ position: 'relative' }}
                    >
                        {/* Soft glow behind product */}
                        <div style={{
                            position: 'absolute', inset: '10%',
                            background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.12) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(20px)',
                        }} />

                        {/* Product image - proper scaling */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '380px',
                            margin: '0 auto',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                        }}>
                            <div style={{
                                width: '100%',
                                paddingBottom: '120%',
                                backgroundImage: 'url(https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=960&fit=crop&q=95)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }} />
                        </div>

                        {/* Floating bestseller badge */}
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute', top: '40px', right: '0',
                                background: 'rgba(28,28,30,0.85)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(201,169,110,0.25)',
                                borderRadius: '12px',
                                padding: '12px 18px',
                            }}
                        >
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E' }}>Bestseller</p>
                            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#F9F6F0', fontSize: '1.2rem', fontWeight: 300, marginTop: '2px' }}>#1 Serum</p>
                        </motion.div>

                        {/* Rating badge */}
                        <motion.div
                            animate={{ y: [5, -5, 5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute', bottom: '50px', left: '0',
                                background: 'rgba(28,28,30,0.85)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(201,169,110,0.25)',
                                borderRadius: '12px',
                                padding: '12px 18px',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Star size={12} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
                                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#F9F6F0', fontSize: '1.2rem', fontWeight: 300 }}>{product.rating}</span>
                            </div>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8E8E93', marginTop: '4px' }}>{product.reviews.toLocaleString()} reviews</p>
                        </motion.div>
                    </motion.div>

                    {/* Right — glass card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div style={{
                            background: 'rgba(255,255,255,0.04)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(201,169,110,0.15)',
                            borderRadius: '24px',
                            padding: '48px',
                        }}>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '14px' }}>Signature Product</p>

                            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#F9F6F0', fontWeight: 300, fontSize: '2.2rem', lineHeight: 1.2 }}>
                                {product.name}
                            </h2>
                            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(249,246,240,0.45)', fontSize: '1rem', fontStyle: 'italic', marginTop: '6px' }}>
                                {product.subtitle}
                            </p>

                            <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.5), transparent)', margin: '24px 0' }} />

                            <p style={{ color: 'rgba(249,246,240,0.55)', fontSize: '0.875rem', lineHeight: 1.7, fontWeight: 300 }}>
                                {product.description}
                            </p>

                            {/* Ingredients */}
                            <div style={{ marginTop: '28px' }}>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '12px' }}>Key Ingredients</p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                    {product.notes.map((note, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#C9A96E', flexShrink: 0 }} />
                                            <span style={{ color: 'rgba(249,246,240,0.45)', fontSize: '0.8rem', fontWeight: 300 }}>{note}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price, Qty & CTA */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '36px', gap: '16px', flexWrap: 'wrap' }}>
                                <div>
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8E8E93' }}>Prix / Price</p>
                                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#C9A96E', fontSize: '2rem', fontWeight: 300, marginTop: '4px' }}>{product.price}</p>
                                </div>

                                {/* Qty stepper + Add to Cart */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {/* Stepper */}
                                    <div style={{
                                        display: 'flex', alignItems: 'center',
                                        border: '1px solid rgba(201,169,110,0.25)', borderRadius: '4px',
                                        overflow: 'hidden',
                                    }}>
                                        <button
                                            onClick={() => setQty(q => Math.max(1, q - 1))}
                                            style={{
                                                width: '34px', height: '34px', background: 'transparent', border: 'none',
                                                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: qty === 1 ? 'rgba(249,246,240,0.2)' : 'rgba(249,246,240,0.6)',
                                            }}
                                        >
                                            <Minus size={11} strokeWidth={2} />
                                        </button>
                                        <span style={{
                                            minWidth: '32px', textAlign: 'center',
                                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                                            fontSize: '1rem', color: '#F9F6F0', fontWeight: 300,
                                            borderLeft: '1px solid rgba(201,169,110,0.15)',
                                            borderRight: '1px solid rgba(201,169,110,0.15)',
                                            padding: '4px 8px', lineHeight: '24px',
                                        }}>
                                            {qty}
                                        </span>
                                        <button
                                            onClick={() => setQty(q => q + 1)}
                                            style={{
                                                width: '34px', height: '34px', background: 'transparent', border: 'none',
                                                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: 'rgba(249,246,240,0.6)',
                                            }}
                                        >
                                            <Plus size={11} strokeWidth={2} />
                                        </button>
                                    </div>

                                    {/* Add to Cart */}
                                    <button
                                        onClick={handleAdd}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                            padding: '10px 22px',
                                            background: addedFlash
                                                ? 'linear-gradient(135deg, #4CAF82, #6EE7B7)'
                                                : 'linear-gradient(135deg, #C9A96E, #E8D5A3, #C9A96E)',
                                            color: '#1C1C1E', border: 'none', cursor: 'pointer',
                                            fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                                            transition: 'background 0.3s',
                                        }}
                                    >
                                        <ShoppingBag size={13} strokeWidth={1.5} />
                                        {addedFlash ? 'Added!' : `Add${qty > 1 ? ` ×${qty}` : ''}`}
                                    </button>
                                </div>
                            </div>

                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(249,246,240,0.2)', textAlign: 'center', marginTop: '20px' }}>
                                Complimentary shipping & gift wrapping
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}
