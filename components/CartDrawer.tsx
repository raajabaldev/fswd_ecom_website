'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Trash2, ArrowRight, Plus, Minus } from 'lucide-react'
import { useCart } from './CartContext'

export default function CartDrawer() {
    const { isOpen, closeCart, items, removeItem, updateQty, totalItems } = useCart()

    const subtotal = items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''))
        return sum + price * item.qty
    }, 0)

    return (
        <>
            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-40"
                    />
                )}
            </AnimatePresence>

            {/* Drawer */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isOpen ? 0 : '100%' }}
                transition={{ type: 'tween', duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-8 border-b border-nude/50">
                    <div>
                        <h2 className="font-serif-display text-2xl text-charcoal font-light tracking-wide">Your Selection</h2>
                        <p className="section-label text-muted mt-1">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
                    </div>
                    <button
                        onClick={closeCart}
                        className="w-10 h-10 rounded-full border border-nude/60 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                    >
                        <X size={14} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-8">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
                            <ShoppingBag size={40} strokeWidth={1} className="text-beige" />
                            <div>
                                <p className="font-serif-display text-xl text-charcoal font-light">Your cart is empty</p>
                                <p className="section-label text-muted mt-2">Discover our curated collections</p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <AnimatePresence>
                                {items.map((item) => {
                                    const unitPrice = parseFloat(item.price.replace(/[^0-9.]/g, ''))
                                    const lineTotal = (unitPrice * item.qty).toFixed(2)
                                    return (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                                            className="flex gap-4"
                                        >
                                            {/* Thumbnail */}
                                            <div className="w-20 h-24 bg-nude/30 rounded flex-shrink-0 overflow-hidden">
                                                {item.image && (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                )}
                                            </div>

                                            {/* Info + Stepper */}
                                            <div className="flex-1 min-w-0">
                                                <p className="font-serif-display text-base font-light text-charcoal leading-tight">{item.name}</p>
                                                <p className="section-label text-muted mt-1">{item.price} each</p>

                                                {/* +/- Stepper */}
                                                <div style={{
                                                    display: 'flex', alignItems: 'center',
                                                    marginTop: '10px', width: 'fit-content',
                                                    border: '1px solid rgba(28,28,30,0.1)', borderRadius: '2px',
                                                }}>
                                                    <button
                                                        onClick={() => updateQty(item.id, -1)}
                                                        title={item.qty === 1 ? 'Remove item' : 'Decrease quantity'}
                                                        style={{
                                                            width: '30px', height: '30px',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            background: 'transparent', border: 'none', cursor: 'pointer',
                                                            color: item.qty === 1 ? '#C9A96E' : 'rgba(28,28,30,0.45)',
                                                        }}
                                                    >
                                                        {item.qty === 1
                                                            ? <Trash2 size={11} strokeWidth={1.5} />
                                                            : <Minus size={11} strokeWidth={2} />
                                                        }
                                                    </button>
                                                    <span style={{
                                                        minWidth: '32px', textAlign: 'center',
                                                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                                                        fontSize: '1rem', fontWeight: 300, color: '#1C1C1E',
                                                        borderLeft: '1px solid rgba(28,28,30,0.08)',
                                                        borderRight: '1px solid rgba(28,28,30,0.08)',
                                                        padding: '4px 8px', lineHeight: '22px',
                                                    }}>
                                                        {item.qty}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQty(item.id, +1)}
                                                        style={{
                                                            width: '30px', height: '30px',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            background: 'transparent', border: 'none', cursor: 'pointer',
                                                            color: 'rgba(28,28,30,0.45)',
                                                        }}
                                                    >
                                                        <Plus size={11} strokeWidth={2} />
                                                    </button>
                                                </div>

                                                {/* Line total */}
                                                <p style={{
                                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                                    color: '#C9A96E', fontSize: '1.05rem', fontWeight: 300, marginTop: '6px',
                                                }}>
                                                    ${lineTotal}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </AnimatePresence>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="p-8 border-t border-nude/50 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="section-label text-charcoal">Subtotal</span>
                            <span className="font-serif-display text-xl text-charcoal font-light">
                                ${subtotal.toFixed(2)}
                            </span>
                        </div>
                        <p className="section-label text-muted text-center">Complimentary shipping on orders over $150</p>
                        <button className="btn-luxury btn-dark w-full justify-center flex items-center gap-3">
                            Proceed to Checkout
                            <ArrowRight size={14} strokeWidth={1.5} />
                        </button>
                    </div>
                )}
            </motion.div>
        </>
    )
}
