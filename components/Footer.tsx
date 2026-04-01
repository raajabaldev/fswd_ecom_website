'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Youtube, Twitter, ArrowUpRight } from 'lucide-react'

const collections = [
    { label: 'All Products', href: '/products' },
    { label: 'Skincare', href: '/products' },
    { label: 'Makeup', href: '/products' },
    { label: 'Fragrances', href: '/products' },
    { label: 'Sets & Kits', href: '/combos' },
    { label: 'Bestsellers', href: '/products' },
]
const company = [
    { label: 'Our Story', href: '/about' },
    { label: 'Sustainability', href: '/about' },
    { label: 'Press', href: '/about' },
    { label: 'Careers', href: '/contact' },
]
const support = [
    { label: 'FAQ', href: '/contact' },
    { label: 'Shipping', href: '/contact' },
    { label: 'Returns', href: '/contact' },
    { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
    return (
        <footer className="bg-charcoal text-ivory">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h2 className="font-serif-display text-4xl font-light tracking-widest text-ivory mb-6">
                            EABHAA
                        </h2>
                        <div className="gold-line mb-6" />
                        <p className="text-ivory/50 text-sm leading-relaxed font-light max-w-xs">
                            A luxury cosmetics house dedicated to the art of rare formulations,
                            crafted for those who demand excellence in every detail.
                        </p>
                        <div className="flex items-center gap-5 mt-8">
                            {[
                                { icon: Instagram, href: '#' },
                                { icon: Youtube, href: '#' },
                                { icon: Twitter, href: '#' },
                            ].map(({ icon: Icon, href }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    whileHover={{ y: -2 }}
                                    className="w-9 h-9 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold transition-all duration-300"
                                >
                                    <Icon size={14} strokeWidth={1.5} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="section-label text-gold mb-6">Collections</p>
                        <ul className="space-y-3">
                            {collections.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover-underline text-ivory/50 hover:text-ivory text-sm font-light transition-colors duration-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="section-label text-gold mb-6">Company</p>
                        <ul className="space-y-3">
                            {company.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover-underline text-ivory/50 hover:text-ivory text-sm font-light transition-colors duration-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="section-label text-gold mb-6">Support</p>
                        <ul className="space-y-3">
                            {support.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover-underline text-ivory/50 hover:text-ivory text-sm font-light transition-colors duration-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Gold Divider */}
            <div className="gold-line-full mx-6" />

            {/* Bottom */}
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-4">
                <p className="section-label text-ivory/30">
                    © 2024 EABHAA Luxury Cosmetics. All rights reserved.
                </p>
                <div className="flex items-center gap-8">
                    {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map(link => (
                        <Link key={link} href="#" className="hover-underline section-label text-ivory/30 hover:text-ivory/60 transition-colors duration-300">
                            {link}
                        </Link>
                    ))}
                </div>
                <motion.a
                    href="#"
                    whileHover={{ x: 3 }}
                    className="section-label text-ivory/30 hover:text-gold flex items-center gap-2 transition-colors duration-300"
                >
                    Back to top <ArrowUpRight size={12} />
                </motion.a>
            </div>
        </footer>
    )
}
