import type { Metadata } from 'next'
import { Filter } from 'lucide-react'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
    title: 'All Products — EABHAA Luxury Cosmetics',
    description: 'Explore the complete EABHAA collection. Rare botanicals, 24K formulations, and luxurious rituals crafted for the discerning.',
}

const products = [
    { id: 1, category: 'Skincare', name: 'Vitamin C Serum', subtitle: 'Radiance & Renewal Complex', price: '₹350', rating: 4.9, reviews: 1240, badge: 'Bestseller', image: "/images/post8.webp" },
    { id: 2, category: 'Skincare', name: 'Hair Growth Serum', subtitle: 'Helps Generate New Hair Follicles', price: '₹499', rating: 4.8, reviews: 876, badge: 'New', image: "/images/post9.webp" },
    { id: 3, category: 'Skincare', name: 'Glutathione Face Cream', subtitle: 'Glutathione Face Cream', price: '₹420', rating: 4.7, reviews: 543, badge: null, image: "/images/post10.webp" },
    { id: 4, category: 'Makeup', name: 'Glutathione 3D Glow Serum', subtitle: 'Satin Finish ', price: '₹585', rating: 4.9, reviews: 2100, badge: 'Bestseller', image: "/images/post11.webp" },
    { id: 5, category: 'Makeup', name: 'Under Eye Gel', subtitle: 'To help Soothe those pretty eyes', price: '$95', rating: 4.8, reviews: 687, badge: null, image: "/images/post12.webp" },
    { id: 6, category: 'Makeup', name: 'Moisturiser', subtitle: 'Soft Touch', price: '₹135', rating: 4.7, reviews: 924, badge: 'New', image: "/images/6w.webp" },
    { id: 7, category: 'Fragrances', name: 'Glutathione Facewash', subtitle: 'Radiant Glow', price: '₹320', rating: 5.0, reviews: 312, badge: 'Limited', image: "/images/post14w.webp" },
    { id: 8, category: 'Fragrances', name: 'Sunscreen', subtitle: 'SPF 50+++ · 100ml', price: '$245', rating: 4.9, reviews: 489, badge: null, image: "/images/post7w.webp" },
    // { id: 9, category: 'Body', name: 'Gold Body Silk Oil', subtitle: '24K Infused · Dry Body Oil', price: '$165', rating: 4.8, reviews: 731, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=600&fit=crop&q=90' },
    // { id: 10, category: 'Body', name: 'Cashmere Body Butter', subtitle: 'Ultra-Rich Moisturiser', price: '$110', rating: 4.7, reviews: 562, badge: null, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&h=600&fit=crop&q=90' },
    // { id: 11, category: 'Skincare', name: 'Pearl Eye Contour', subtitle: 'Anti-Ageing Eye Cream', price: '$185', rating: 4.8, reviews: 423, badge: null, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=600&fit=crop&q=90' },
    // { id: 12, category: 'Body', name: 'Exfoliation Ritual Scrub', subtitle: 'Walnut & Honey Blend', price: '$95', rating: 4.6, reviews: 318, badge: 'New', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&h=600&fit=crop&q=90' },
]

const categories = ['All', 'Skincare', 'Makeup', 'Fragrances', 'Body']

export default function ProductsPage() {
    return (
        <main style={{ background: '#FAF8F5', minHeight: '100vh', paddingTop: '120px' }}>

            {/* Page Header */}
            <div style={{ textAlign: 'center', padding: '60px 40px 56px', borderBottom: '1px solid #E8D5C4' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>
                    The Edit
                </p>
                <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: '#1C1C1E', letterSpacing: '0.04em' }}>
                    All Products
                </h1>
                <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)', margin: '20px auto 16px' }} />
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(28,28,30,0.5)', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: 300 }}>
                    {products.length} curated formulations · Rare ingredients · Luxury rituals
                </p>
            </div>

            {/* Filter Bar */}
            <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            style={{
                                padding: '8px 22px',
                                background: cat === 'All' ? '#1C1C1E' : 'transparent',
                                color: cat === 'All' ? '#F9F6F0' : 'rgba(28,28,30,0.5)',
                                border: '1px solid ' + (cat === 'All' ? '#1C1C1E' : 'rgba(28,28,30,0.12)'),
                                fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                                cursor: 'pointer',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(28,28,30,0.4)', fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    <Filter size={13} strokeWidth={1.5} /> Sort by: Featured
                </div>
            </div>

            {/* Product Grid — uses ProductCard client component for interactivity */}
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>

        </main>
    )
}
