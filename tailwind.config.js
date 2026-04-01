/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                ivory: '#F9F6F0',
                nude: '#E8D5C4',
                beige: '#D4B896',
                gold: '#C9A96E',
                'gold-light': '#E8D5A3',
                rose: '#C4A0A0',
                'rose-soft': '#F0E0E0',
                charcoal: '#1C1C1E',
                'charcoal-light': '#2C2C2E',
                muted: '#8E8E93',
                cream: '#FAF8F5',
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Playfair Display', 'Georgia', 'serif'],
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #E8D5A3 50%, #C9A96E 100%)',
                'dark-gradient': 'linear-gradient(180deg, #1C1C1E 0%, #2C2C2E 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 1.2s ease forwards',
                'slide-up': 'slideUp 0.8s ease forwards',
                'shimmer': 'shimmer 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '112': '28rem',
                '128': '32rem',
            },
            transitionTimingFunction: {
                'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            },
        },
    },
    plugins: [],
}
