'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause } from 'lucide-react'

const videoTabs = [
    {
        id: 'campaign',
        label: 'Campaign',
        title: 'The EABHAA Story',
        description: 'An intimate look into the making of our signature collection — crafted by artisans, perfected by ritual.',
        thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=680&fit=crop&q=95',
        duration: '3:42',
    },
    {
        id: 'ritual',
        label: 'Ritual',
        title: 'Morning Ritual',
        description: 'Begin every morning with intention. Discover our curated 5-step skincare ritual for luminous skin.',
        thumbnail: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1200&h=680&fit=crop&q=95',
        duration: '2:15',
    },
    {
        id: 'story',
        label: 'Our Story',
        title: 'Behind The Brand',
        description: "From Paris to Singapore — the international journey behind EABHAA's luxury heritage.",
        thumbnail: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1200&h=680&fit=crop&q=95',
        duration: '5:10',
    },
]

export default function VideoTabSection() {
    const [activeTab, setActiveTab] = useState(videoTabs[0])
    const [playing, setPlaying] = useState(false)

    return (
        <section id="brand-film" style={{ background: '#F9F6F0', padding: '100px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>
                        Visual Stories
                    </p>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#1C1C1E' }}>
                        The World of EABHAA
                    </h2>
                    <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)', margin: '20px auto 0' }} />
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid #E8D5C4', marginBottom: '48px' }}>
                    {videoTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => { setActiveTab(tab); setPlaying(false) }}
                            style={{
                                padding: '14px 40px',
                                background: 'none',
                                border: 'none',
                                borderBottom: activeTab.id === tab.id ? '2px solid #C9A96E' : '2px solid transparent',
                                marginBottom: '-1px',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '0.6rem',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: activeTab.id === tab.id ? '#C9A96E' : '#8E8E93',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '56px', alignItems: 'center' }}
                    >
                        {/* Video panel */}
                        <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                            {/* Thumbnail with aspect ratio */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                paddingBottom: '56.25%', // 16:9
                                backgroundImage: `url(${activeTab.thumbnail})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                                {/* Overlay */}
                                <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,28,30,0.35)' }} />

                                {/* Play button */}
                                <button
                                    onClick={() => setPlaying(!playing)}
                                    style={{
                                        position: 'absolute', inset: 0,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        background: 'none', border: 'none', cursor: 'pointer',
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            width: '72px', height: '72px', borderRadius: '50%',
                                            background: 'rgba(28,28,30,0.7)',
                                            backdropFilter: 'blur(12px)',
                                            border: '1px solid rgba(201,169,110,0.4)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}
                                    >
                                        {playing
                                            ? <Pause size={22} style={{ color: '#C9A96E' }} strokeWidth={1.5} />
                                            : <Play size={22} style={{ color: '#C9A96E', marginLeft: '4px' }} strokeWidth={1.5} />
                                        }
                                    </motion.div>
                                </button>

                                {/* Duration */}
                                <div style={{
                                    position: 'absolute', bottom: '16px', right: '16px',
                                    background: 'rgba(28,28,30,0.6)',
                                    backdropFilter: 'blur(8px)',
                                    padding: '4px 10px', borderRadius: '100px',
                                }}>
                                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)' }}>{activeTab.duration}</span>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>{activeTab.label}</p>
                            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.2rem', fontWeight: 300, color: '#1C1C1E', lineHeight: 1.2 }}>
                                {activeTab.title}
                            </h3>
                            <div style={{ width: '48px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E)', margin: '20px 0' }} />
                            <p style={{ color: 'rgba(28,28,30,0.55)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                                {activeTab.description}
                            </p>
                            <button
                                onClick={() => setPlaying(true)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    marginTop: '28px', padding: '13px 32px',
                                    background: '#1C1C1E', color: '#F9F6F0',
                                    border: 'none', cursor: 'pointer',
                                    fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                                }}
                            >
                                <Play size={12} strokeWidth={1.5} />
                                Watch Film
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
