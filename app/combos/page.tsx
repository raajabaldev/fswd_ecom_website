import type { Metadata } from 'next'
import { ShoppingBag, Gift } from 'lucide-react'
import ComboAddButton from '@/components/ComboAddButton'

export const metadata: Metadata = {
    title: 'Luxury Combos & Sets — EABHAA',
    description: 'Curated EABHAA gift sets and ritual combos — the perfect expression of luxury, bundled for a complete experience.',
}

const combos = [
    {
        id: 1,
        name: 'The Radiance Ritual',
        subtitle: 'Complete Brightening Set',
        description: 'A curated trio of our most luminous formulations — the Lumière Élixir Serum, Rose Infusion Toner, and Pearl Eye Contour — designed for a complete glow ritual.',
        includes: ['Lumière Élixir Serum (30ml)', 'Rose Infusion Toner (150ml)', 'Pearl Eye Contour (15ml)', 'Silk Travel Pouch'],
        originalPrice: '$590',
        comboPrice: '$445',
        savings: 'Save $145',
        badge: 'Most Popular',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&h=800&fit=crop&q=90',
    },
    {
        id: 2,
        name: 'The Golden Hour Set',
        subtitle: 'Signature Makeup Edit',
        description: 'Everything you need to achieve a luminous, editorial look — our Velvet Lip Elixir, Glow Arcane Highlighter, and Silk Foundation Fluid in one elegant box.',
        includes: ['Silk Foundation Fluid (30ml)', 'Glow Arcane Highlighter', 'Velvet Lip Elixir · Rose Nude', 'Luxury Gift Box'],
        originalPrice: '$315',
        comboPrice: '$235',
        savings: 'Save $80',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=700&h=800&fit=crop&q=90',
    },
    {
        id: 3,
        name: 'The Olfactory Experience',
        subtitle: 'Fragrance Discovery Set',
        description: 'Our two signature parfums — Oud & Amber and White Rose — presented in a limited-edition handcrafted box with ribbons and a personal note card.',
        includes: ['Oud & Amber Parfum (50ml)', 'White Rose Eau de Parfum (100ml)', 'Fragrance Discovery Cards', 'Handcrafted Gift Box'],
        originalPrice: '$565',
        comboPrice: '$420',
        savings: 'Save $145',
        badge: 'Limited',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=700&h=800&fit=crop&q=90',
    },
    {
        id: 4,
        name: 'The Body Luxe Ritual',
        subtitle: 'Head-to-Toe Indulgence',
        description: 'Transform your daily body ritual with our luxurious trio — Gold Body Silk Oil, Cashmere Body Butter, and Exfoliation Ritual Scrub for silky, luminous skin.',
        includes: ['Gold Body Silk Oil (100ml)', 'Cashmere Body Butter (200ml)', 'Exfoliation Ritual Scrub (300g)', 'Satin Drawstring Bag'],
        originalPrice: '$370',
        comboPrice: '$278',
        savings: 'Save $92',
        badge: 'Bestseller',
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=700&h=800&fit=crop&q=90',
    },
]

export default function CombosPage() {
    return (
        <main style={{ background: '#FAF8F5', minHeight: '100vh', paddingTop: '120px' }}>

            {/* Header */}
            <div style={{ textAlign: 'center', padding: '60px 40px 56px', borderBottom: '1px solid #E8D5C4' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>
                    Gifting & Sets
                </p>
                <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: '#1C1C1E', letterSpacing: '0.04em' }}>
                    Curated Combos
                </h1>
                <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)', margin: '20px auto 16px' }} />
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(28,28,30,0.5)', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: 300 }}>
                    Thoughtfully bundled rituals — for you or someone extraordinary
                </p>
            </div>

            {/* Combos List */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px 100px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
                    {combos.map((combo, i) => (
                        <div key={combo.id} className="combo-row" style={{
                            direction: i % 2 === 0 ? 'ltr' : 'rtl',
                        }}>
                            {/* Image */}
                            <div style={{ direction: 'ltr', position: 'relative', overflow: 'hidden' }}>
                                <div style={{
                                    width: '100%', paddingBottom: '110%',
                                    backgroundImage: `url(${combo.image})`,
                                    backgroundSize: 'cover', backgroundPosition: 'center',
                                    borderRadius: '4px',
                                }} />
                                {/* Savings badge */}
                                <div style={{
                                    position: 'absolute', top: '20px', right: '20px',
                                    background: 'linear-gradient(135deg, #C9A96E, #E8D5A3)',
                                    color: '#1C1C1E', padding: '8px 16px', borderRadius: '100px',
                                    fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500,
                                }}>
                                    {combo.savings}
                                </div>
                                {combo.badge && (
                                    <div style={{
                                        position: 'absolute', top: '20px', left: '20px',
                                        background: combo.badge === 'Limited' ? '#1C1C1E' : 'rgba(249,246,240,0.9)',
                                        backdropFilter: 'blur(8px)',
                                        color: combo.badge === 'Limited' ? '#C9A96E' : '#1C1C1E',
                                        padding: '6px 14px',
                                        fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                                    }}>
                                        {combo.badge}
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div style={{ direction: 'ltr' }}>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '14px' }}>{combo.subtitle}</p>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 300, color: '#1C1C1E', lineHeight: 1.15, marginBottom: '20px' }}>
                                    {combo.name}
                                </h2>
                                <div style={{ width: '48px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E)', marginBottom: '20px' }} />
                                <p style={{ color: 'rgba(28,28,30,0.55)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '28px' }}>
                                    {combo.description}
                                </p>

                                {/* Includes */}
                                <div style={{ background: 'rgba(201,169,110,0.06)', border: '1px solid rgba(201,169,110,0.15)', borderRadius: '8px', padding: '20px', marginBottom: '28px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                                        <Gift size={13} style={{ color: '#C9A96E' }} strokeWidth={1.5} />
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A96E' }}>What's Included</p>
                                    </div>
                                    {combo.includes.map((item, j) => (
                                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: j < combo.includes.length - 1 ? '8px' : 0 }}>
                                            <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#C9A96E', flexShrink: 0 }} />
                                            <span style={{ color: 'rgba(28,28,30,0.6)', fontSize: '0.82rem', fontWeight: 300 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Price */}
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', marginBottom: '24px' }}>
                                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#C9A96E', fontSize: '2.2rem', fontWeight: 300 }}>{combo.comboPrice}</span>
                                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(28,28,30,0.3)', fontSize: '1.2rem', textDecoration: 'line-through', marginBottom: '4px' }}>{combo.originalPrice}</span>
                                </div>

                                <ComboAddButton
                                    id={combo.id + 200}
                                    name={combo.name}
                                    price={combo.comboPrice}
                                    image={combo.image}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
