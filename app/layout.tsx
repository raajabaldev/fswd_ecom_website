import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import CartDrawer from '@/components/CartDrawer'
import { CartProvider } from '@/components/CartContext'

export const metadata: Metadata = {
    title: 'EABHAA — Luxury Cosmetics',
    description: 'EABHAA is a premium luxury cosmetics brand crafting elite skincare and beauty experiences. Discover our curated collections of rare formulations.',
    keywords: 'luxury cosmetics, premium skincare, EABHAA, elite beauty, luxury beauty brand',
    openGraph: {
        title: 'EABHAA — Luxury Cosmetics',
        description: 'Premium luxury cosmetics. Elite formulations for the discerning.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-cream">
                <CartProvider>
                    <LoadingScreen />
                    <Navbar />
                    <CartDrawer />
                    <main>{children}</main>
                    <Footer />
                </CartProvider>
            </body>
        </html>
    )
}
