'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(() => setLoading(false), 400)
                    return 100
                }
                return prev + 2
            })
        }, 25)
        return () => clearInterval(timer)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="loading-screen"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* Brand Monogram */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col items-center gap-8"
                    >
                        {/* Bold E monogram */}
                        <div className="relative">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-48 absolute -top-4"
                            />
                            <h1
                                className="text-gold-shimmer font-serif-display"
                                style={{ fontSize: '5rem', fontWeight: 300, letterSpacing: '0.3em', lineHeight: 1 }}
                            >
                                EABHAA
                            </h1>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-48 absolute -bottom-4"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="section-label text-muted tracking-widest"
                        >
                            Luxury Cosmetics
                        </motion.p>

                        {/* Progress bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="w-48 h-px bg-charcoal-light overflow-hidden"
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-gold to-gold-light"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
