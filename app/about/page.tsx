import type { Metadata } from 'next'
import { Leaf, Globe, Award, Heart } from 'lucide-react'

export const metadata: Metadata = {
    title: 'About Us — EABHAA Luxury Cosmetics',
    description: 'The story behind EABHAA — a luxury cosmetics brand born from the belief that beauty is a ritual, not a routine.',
}

const values = [
    { icon: Leaf, title: 'Pure by Nature', description: 'Every formula begins with rare botanical ingredients — Damascena rose, 24K gold, sea kelp, and precious oils sourced from the world\'s most pristine ecosystems.' },
    { icon: Globe, title: 'Global Heritage', description: 'Inspired by centuries-old beauty rituals from Paris, Tokyo, Marrakech, and Seoul — distilled into formulations that speak every language of luxury.' },
    { icon: Award, title: 'Award-Winning', description: 'Recognised by Vogue, Allure, and Harpers Bazaar. Over 12 international awards for innovation, sustainability, and luxury formulation excellence.' },
    { icon: Heart, title: 'Conscious Luxury', description: 'We believe in beauty without compromise — cruelty-free, sustainably sourced, and packaged in recyclable materials without sacrificing a single ounce of elegance.' },
]

const team = [
    { name: 'Isabelle Fontaine', role: 'Founder & Creative Director', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&q=90' },
    { name: 'Marcus Adeyemi', role: 'Chief Formulation Chemist', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&q=90' },
    { name: 'Yuki Tanaka', role: 'Head of Product Design', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&q=90' },
    { name: 'Sophie Laurent', role: 'Global Brand Director', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&q=90' },
]

export default function AboutPage() {
    return (
        <main style={{ background: '#FAF8F5', minHeight: '100vh', paddingTop: '120px' }}>

            {/* Hero Banner */}
            <div style={{ position: 'relative', height: '70vh', minHeight: '500px', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1920&h=900&fit=crop&q=95)',
                    backgroundSize: 'cover', backgroundPosition: 'center',
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28,28,30,0.45) 0%, rgba(28,28,30,0.65) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 40px' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '20px' }}>Est. 2024</p>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: '#F9F6F0', letterSpacing: '0.08em', lineHeight: 1.1, marginBottom: '24px' }}>
                        The Art of<br /><em>Pure Beauty</em>
                    </h1>
                    <div style={{ width: '60px', height: '1px', background: 'rgba(201,169,110,0.6)', margin: '0 auto 20px' }} />
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(249,246,240,0.6)', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 300, maxWidth: '540px' }}>
                        Born from the belief that beauty is a ritual, not a routine
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 40px' }}>
                <div className="about-story">
                    <div>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>Our Story</p>
                        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#1C1C1E', lineHeight: 1.2, marginBottom: '28px' }}>
                            Where Science<br />Meets Artistry
                        </h2>
                        <div style={{ width: '48px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E)', marginBottom: '28px' }} />
                        <p style={{ color: 'rgba(28,28,30,0.6)', fontSize: '0.95rem', lineHeight: 1.9, fontWeight: 300, marginBottom: '20px' }}>
                            EABHAA was founded in 2024 with a singular purpose: to create luxury cosmetics that transform the everyday into the extraordinary. We believe that what you put on your skin is as important as what you put in your body.
                        </p>
                        <p style={{ color: 'rgba(28,28,30,0.6)', fontSize: '0.95rem', lineHeight: 1.9, fontWeight: 300, marginBottom: '20px' }}>
                            Each product is the result of years of research, sourcing the finest ingredients from around the world, and working with master formulators to create textures and experiences that feel like nothing you've tried before.
                        </p>
                        <p style={{ color: 'rgba(28,28,30,0.6)', fontSize: '0.95rem', lineHeight: 1.9, fontWeight: 300 }}>
                            We are international by nature, inclusive by design, and luxurious in everything we do — from the formula to the final ribbon on your gift box.
                        </p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{ width: '100%', paddingBottom: '120%', backgroundImage: 'url(https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&h=840&fit=crop&q=90)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '4px' }} />
                        {/* Floating stat card */}
                        <div style={{
                            position: 'absolute', bottom: '-20px', left: '-20px',
                            background: '#1C1C1E', padding: '24px 28px',
                            borderLeft: '3px solid #C9A96E',
                        }}>
                            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#C9A96E', fontSize: '2.5rem', fontWeight: 300 }}>1M+</p>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(249,246,240,0.5)', marginTop: '4px' }}>Happy Clients Worldwide</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div style={{ background: '#F5EEEA', padding: '100px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>What We Believe</p>
                        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#1C1C1E' }}>Our Core Values</h2>
                        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)', margin: '20px auto 0' }} />
                    </div>
                    <div className="about-values">
                        {values.map((val, i) => {
                            const Icon = val.icon
                            return (
                                <div key={i} style={{ textAlign: 'center', padding: '40px 24px', background: '#FAF8F5', border: '1px solid rgba(201,169,110,0.1)' }}>
                                    <Icon size={24} style={{ color: '#C9A96E', margin: '0 auto 20px' }} strokeWidth={1} />
                                    <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.35rem', fontWeight: 300, color: '#1C1C1E', marginBottom: '14px' }}>{val.title}</h3>
                                    <p style={{ color: 'rgba(28,28,30,0.5)', fontSize: '0.85rem', lineHeight: 1.8, fontWeight: 300 }}>{val.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Team */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 40px' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>The Makers</p>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#1C1C1E' }}>Meet the Team</h2>
                    <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)', margin: '20px auto 0' }} />
                </div>
                <div className="about-team">
                    {team.map((member, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '100%', paddingBottom: '120%',
                                backgroundImage: `url(${member.image})`,
                                backgroundSize: 'cover', backgroundPosition: 'center top',
                                marginBottom: '20px', filter: 'grayscale(20%)',
                            }} />
                            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem', fontWeight: 300, color: '#1C1C1E' }}>{member.name}</h3>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A96E', marginTop: '6px' }}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
