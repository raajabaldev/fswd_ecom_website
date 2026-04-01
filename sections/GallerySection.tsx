'use client'
import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle } from 'lucide-react'

const galleryItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&q=90', likes: '4.2K', comments: '128' },
    { id: 2, image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop&q=90', likes: '6.8K', comments: '234' },
    { id: 3, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop&q=90', likes: '3.1K', comments: '89' },
    { id: 4, image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&h=600&fit=crop&q=90', likes: '8.9K', comments: '301' },
    { id: 5, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=90', likes: '5.3K', comments: '167' },
    { id: 6, image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=600&h=600&fit=crop&q=90', likes: '7.1K', comments: '214' },
    { id: 7, image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=600&fit=crop&q=90', likes: '2.9K', comments: '76' },
    { id: 8, image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2171?w=600&h=600&fit=crop&q=90', likes: '11.2K', comments: '445' },
]

export default function GallerySection() {
    return (
        <section id="gallery" style={{ background: '#FAF8F5', padding: '100px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>
                        Follow the World
                    </p>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#1C1C1E' }}>
                        @eabhaa
                    </h2>
                    <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)', margin: '16px auto 12px' }} />
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(28,28,30,0.45)', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: 300 }}>
                        Discover the art of EABHAA through our visual diary
                    </p>
                </div>

                {/* Gallery Grid — 4 cols, uses global .gallery-grid class */}
                <div className="gallery-grid">
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                        >
                            <div
                                className="gallery-bg"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="gallery-overlay-inner">
                                <Instagram size={18} className="gallery-icon" strokeWidth={1.5} />
                                <div className="gallery-stats" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}>
                                        <Heart size={12} strokeWidth={1.5} /> {item.likes}
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}>
                                        <MessageCircle size={12} strokeWidth={1.5} /> {item.comments}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: '36px' }}>
                    <a href="#" style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                        color: 'rgba(28,28,30,0.4)', textDecoration: 'none',
                        borderBottom: '1px solid rgba(28,28,30,0.2)', paddingBottom: '2px',
                    }}>
                        Follow @eabhaa on Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}
