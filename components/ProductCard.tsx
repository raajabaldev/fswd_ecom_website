'use client'
import { useState } from 'react'
import { ShoppingBag, Plus, Minus, Star } from 'lucide-react'
import { useCart } from '@/components/CartContext'

interface ProductCardProps {
    id: number
    category: string
    name: string
    subtitle: string
    price: string
    rating: number
    reviews: number
    badge?: string | null
    image: string
}

export default function ProductCard({ id, category, name, subtitle, price, rating, reviews, badge, image }: ProductCardProps) {
    const { addItem, updateQty, items } = useCart()
    const cartItem = items.find(i => i.id === id)
    const qtyInCart = cartItem?.qty ?? 0

    const [localQty, setLocalQty] = useState(1)
    const [addedFlash, setAddedFlash] = useState(false)

    const handleAdd = () => {
        // Add localQty times (or update qty)
        for (let i = 0; i < localQty; i++) {
            addItem({ id, name, price, image })
        }
        setAddedFlash(true)
        setTimeout(() => setAddedFlash(false), 1500)
        setLocalQty(1)
    }

    return (
        <div className="product-card" style={{ cursor: 'default' }}>

            {/* ── Image container ─────────────────────────────── */}
            <div style={{ position: 'relative', width: '100%', paddingBottom: '120%', overflow: 'hidden', background: '#F0E8E0', marginBottom: '16px' }}>
                <div
                    className="pcard-img"
                    style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover', backgroundPosition: 'center',
                        transition: 'transform 0.7s ease',
                    }}
                />

                {/* Badge */}
                {badge && (
                    <div style={{
                        position: 'absolute', top: '14px', left: '14px',
                        padding: '4px 12px',
                        background: badge === 'Limited' ? '#1C1C1E' : 'linear-gradient(135deg, #C9A96E, #E8D5A3)',
                        color: badge === 'Limited' ? '#C9A96E' : '#1C1C1E',
                        fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                    }}>
                        {badge}
                    </div>
                )}

                {/* Cart badge (if already in cart) */}
                {qtyInCart > 0 && (
                    <div style={{
                        position: 'absolute', top: '14px', right: '14px',
                        width: '24px', height: '24px', borderRadius: '50%',
                        background: '#C9A96E', color: '#1C1C1E',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 600,
                    }}>
                        {qtyInCart}
                    </div>
                )}

                {/* Hover overlay with qty stepper + add to cart */}
                <div
                    className="pcard-overlay"
                    style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(28,28,30,0)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
                        padding: '14px', gap: '8px',
                        transition: 'background 0.35s ease',
                    }}
                >
                    {/* Qty stepper */}
                    <div
                        className="pcard-btn"
                        style={{
                            display: 'flex', alignItems: 'center', gap: 0,
                            background: 'rgba(249,246,240,0.95)', backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(201,169,110,0.3)',
                            opacity: 0, transition: 'opacity 0.3s',
                        }}
                    >
                        <button
                            onClick={() => setLocalQty(q => Math.max(1, q - 1))}
                            style={{
                                width: '32px', height: '32px', border: 'none', background: 'transparent',
                                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: localQty === 1 ? 'rgba(28,28,30,0.25)' : '#1C1C1E',
                            }}
                        >
                            <Minus size={11} strokeWidth={2} />
                        </button>
                        <span style={{
                            minWidth: '28px', textAlign: 'center',
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: '1rem', color: '#1C1C1E', fontWeight: 300,
                            borderLeft: '1px solid rgba(28,28,30,0.1)', borderRight: '1px solid rgba(28,28,30,0.1)',
                            padding: '4px 6px', lineHeight: '22px',
                        }}>
                            {localQty}
                        </span>
                        <button
                            onClick={() => setLocalQty(q => q + 1)}
                            style={{
                                width: '32px', height: '32px', border: 'none', background: 'transparent',
                                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#1C1C1E',
                            }}
                        >
                            <Plus size={11} strokeWidth={2} />
                        </button>
                    </div>

                    {/* Add to Cart button */}
                    <button
                        className="pcard-btn"
                        onClick={handleAdd}
                        style={{
                            width: '100%', padding: '11px',
                            background: addedFlash
                                ? 'rgba(60,180,110,0.9)'
                                : 'rgba(28,28,30,0.88)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(201,169,110,0.3)', color: addedFlash ? '#fff' : '#C9A96E',
                            fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                            opacity: 0, transition: 'opacity 0.3s, background 0.25s',
                        }}
                    >
                        <ShoppingBag size={12} strokeWidth={1.5} />
                        {addedFlash ? `Added ${localQty > 1 ? `×${localQty}` : ''}` : `Add to Cart${localQty > 1 ? ` ×${localQty}` : ''}`}
                    </button>
                </div>
            </div>

            {/* ── Info ────────────────────────────────────────── */}
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '5px' }}>{category}</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.15rem', fontWeight: 300, color: '#1C1C1E', marginBottom: '3px' }}>{name}</h3>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(28,28,30,0.45)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '10px' }}>{subtitle}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1C1C1E', fontSize: '1.1rem', fontWeight: 300 }}>{price}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={10} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', color: 'rgba(28,28,30,0.4)', letterSpacing: '0.05em' }}>{rating} ({reviews.toLocaleString()})</span>
                </div>
            </div>
        </div>
    )
}
