'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useCart } from './CartContext'

const navLinks = [
    { label: 'Products', href: '/products' },
   // { label: 'Combos', href: '/combos' },
    { label: 'Makeup', href: '/products#makeup' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const { openCart, totalItems } = useCart()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-3' : 'py-6 bg-black/30 backdrop-blur-md'
}`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Left Nav */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="hover-underline font-sans-luxury text-ivory/80 hover:text-gold transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Logo Center */}
                    <Link
                        href="/"
                        className="font-serif-display text-ivory tracking-[0.4em] text-xl font-light hover:text-gold transition-colors duration-500"
                    >
                        EABHAA
                    </Link>

                    {/* Right Nav */}
                    <div className="flex items-center gap-8">
                        <nav className="hidden lg:flex items-center gap-10">
                            {navLinks.slice(2).map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="hover-underline font-sans-luxury text-ivory/80 hover:text-gold transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Icons */}
                        <div className="flex items-center gap-5">
                            <button className="text-ivory/70 hover:text-gold transition-colors duration-300 hidden lg:flex">
                                <Search size={16} strokeWidth={1.5} />
                            </button>
                            <button
                                onClick={openCart}
                                className="text-ivory/70 hover:text-gold transition-colors duration-300 relative"
                            >
                                <ShoppingBag size={16} strokeWidth={1.5} />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gold text-charcoal text-[9px] flex items-center justify-center font-medium">
                                        {totalItems}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => setMobileOpen(true)}
                                className="text-ivory/70 hover:text-gold transition-colors duration-300 lg:hidden"
                            >
                                <Menu size={18} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] glass-dark flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6">
                            <span className="font-serif-display text-ivory tracking-[0.4em] text-xl font-light">EABHAA</span>
                            <button onClick={() => setMobileOpen(false)} className="text-ivory/70 hover:text-gold transition-colors">
                                <X size={20} strokeWidth={1.5} />
                            </button>
                        </div>
                        <div className="h-px gold-line-full mx-6" />
                        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="font-serif-display text-3xl text-ivory/80 hover:text-gold transition-colors duration-300 font-light tracking-widest"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <p className="text-center section-label text-muted pb-8">Luxury Cosmetics est. 2024</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
