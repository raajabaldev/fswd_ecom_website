import HeroSection from '@/sections/HeroSection'
import SlideshowSection from '@/sections/SlideshowSection'
import CollectionGrid from '@/sections/CollectionGrid'
import BrandStatsSection from '@/sections/BrandStatsSection'
import ProductShowcase from '@/sections/ProductShowcase'
import VideoTabSection from '@/sections/VideoTabSection'
import TestimonialSection from '@/sections/TestimonialSection'
import GallerySection from '@/sections/GallerySection'
import NewsletterSection from '@/sections/NewsletterSection'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <BrandStatsSection />
            <SlideshowSection />
            <CollectionGrid />
            <ProductShowcase />
            <VideoTabSection />
            <TestimonialSection />
            <GallerySection />
            <NewsletterSection />
        </>
    )
}
