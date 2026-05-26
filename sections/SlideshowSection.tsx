'use client'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
        id: 1,
        label: 'Campaign 01',
        title: 'The Art of',
        subtitle: 'Refinement',
        caption: 'Spring / Summer 2024 Collection',
        image: "/images/17w.webp",
        cta: 'Discover',
    },
    {
        id: 2,
        label: 'Campaign 02',
        title: 'Rare Beauty',
        subtitle: 'Distilled',
        caption: 'Signature Skincare Ritual',
        image: "/images/bannerrr.webp",
        cta: 'Explore',
    },
    {
        id: 3,
        label: 'New Drop',
        title: 'SALEE!!!',
        subtitle: '',
        caption: 'Limited Edition – Available Now',
        image: "/images/15w.webp",
        cta: 'Shop Now',
    },
    {
        id: 4,
        label: 'Exclusive',
        title: 'The Golden',
        subtitle: 'Series',
        caption: 'Love your skin',
        image: "/images/16w.webp",
        cta: 'View More',
    },
]

export default function SlideshowSection() {
    return (
        <section id="slideshow" style={{ position: 'relative', height: '85vh', minHeight: '600px', overflow: 'hidden' }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                navigation={{ prevEl: '.ss-prev', nextEl: '.ss-next' }}
                loop
                style={{ height: '100%' }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} style={{ position: 'relative', overflow: 'hidden' }}>
                        {/* Full bleed background image */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                        }} />
                        {/* Dark gradient overlay */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to right, rgba(28,28,30,0.75) 0%, rgba(28,28,30,0.35) 55%, rgba(28,28,30,0.1) 100%)',
                        }} />
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to top, rgba(28,28,30,0.5) 0%, transparent 50%)',
                        }} />

                        {/* Content */}
                        <div style={{
                            position: 'absolute', bottom: '96px', left: '80px', zIndex: 10,
                            maxWidth: '520px',
                        }}>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>
                                {slide.label}
                            </p>
                            <h2 style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                color: '#F9F6F0', fontWeight: 300, lineHeight: 1.05,
                                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                                marginBottom: '16px',
                            }}>
                                {slide.title}<br /><em>{slide.subtitle}</em>
                            </h2>
                            <div style={{ width: '60px', height: '1px', background: 'rgba(201,169,110,0.7)', margin: '20px 0' }} />
                            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(249,246,240,0.6)', fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '28px' }}>
                                {slide.caption}
                            </p>
                            <a href="#collections" style={{
                                display: 'inline-block', padding: '12px 36px',
                                background: 'linear-gradient(135deg, #C9A96E, #E8D5A3, #C9A96E)',
                                color: '#1C1C1E', fontFamily: 'Inter, sans-serif',
                                fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                                textDecoration: 'none', border: 'none', cursor: 'pointer',
                            }}>
                                {slide.cta}
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation */}
            <div style={{ position: 'absolute', bottom: '40px', right: '40px', zIndex: 20, display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button className="ss-prev" style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.25)', background: 'transparent',
                    color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button className="ss-next" style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    border: '1px solid rgba(201,169,110,0.5)', background: 'transparent',
                    color: '#C9A96E', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <ChevronRight size={18} strokeWidth={1.5} />
                </button>
            </div>
        </section>
    )
}
