'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { useCart } from '@/components/CartContext'

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => { })
        }
    }, [])

    const { openCart } = useCart()

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-charcoal">
            {/* Video Background */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                poster="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80"
            >
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/20 to-charcoal/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-charcoal/40" />

            {/* Vignette */}
            <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, transparent 40%, rgba(28,28,30,0.6) 100%)'
            }} />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    className="flex items-center justify-center gap-4 mb-8"
                >
                    <div className="h-px w-12 bg-gold/60" />
                    <span className="section-label text-gold/80">New Collection 2024</span>
                    <div className="h-px w-12 bg-gold/60" />
                </motion.div>

                {/* Brand Name */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-serif-display text-ivory leading-none tracking-[0.15em] mb-6"
                    style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: 300 }}
                >
                    EABHAA
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.6 }}
                    className="font-serif-display text-ivory/60 text-xl lg:text-2xl font-light italic tracking-wide mb-12"
                >
                    Where Luxury Meets Ritual
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.9 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#collections" className="btn-luxury btn-gold">
                        Shop Collection
                    </a>
                    <a href="#brand-film" className="btn-luxury btn-outline">
                        Explore World
                    </a>
                </motion.div>
            </div>

            {/* Bottom scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent"
                />
                <span className="section-label text-ivory/40">Scroll</span>
            </motion.div>

            {/* Bottom bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0, duration: 0.8 }}
                className="absolute bottom-10 right-10 hidden lg:flex items-center gap-3"
            >
                <span className="section-label text-ivory/40">Est. 2024</span>
                <ArrowDownRight size={12} className="text-gold/60" />
            </motion.div>

            {/* Corner accent */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.2, duration: 0.8 }}
                className="absolute bottom-10 left-10 hidden lg:block"
            >
                <p className="section-label text-ivory/40">Luxury Cosmetics</p>
                <div className="h-px w-16 bg-gold/40 mt-2" />
            </motion.div>
        </section>
    )
}
