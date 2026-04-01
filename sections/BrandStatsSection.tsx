'use client'
import { motion } from 'framer-motion'
import useScrollReveal from '@/hooks/useScrollReveal'
import { Leaf, Award, Globe, Sparkles } from 'lucide-react'

const stats = [
    { icon: Award, value: '12+', label: 'Awards Won', sub: 'International Beauty Awards' },
    { icon: Globe, value: '40+', label: 'Countries', sub: 'Global Presence' },
    { icon: Leaf, value: '100%', label: 'Natural', sub: 'Rare Botanical Ingredients' },
    { icon: Sparkles, value: '1M+', label: 'Happy Clients', sub: 'Worldwide Community' },
]

export default function BrandStatsSection() {
    const sectionRef = useScrollReveal()

    return (
        <section ref={sectionRef} className="reveal" style={{ background: '#FAF8F5', borderTop: '1px solid #E8D5C4', borderBottom: '1px solid #E8D5C4' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
                <div className="stats-grid">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                style={{ textAlign: 'center' }}
                            >
                                <Icon size={22} style={{ color: '#C9A96E', margin: '0 auto 16px' }} strokeWidth={1} />
                                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.5rem', fontWeight: 300, color: '#1C1C1E', lineHeight: 1 }}>{stat.value}</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginTop: '8px' }}>{stat.label}</p>
                                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(28,28,30,0.4)', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '4px' }}>{stat.sub}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
