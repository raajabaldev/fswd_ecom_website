'use client'
import { useState } from 'react'
import { ShoppingBag, Plus, Minus } from 'lucide-react'
import { useCart } from '@/components/CartContext'

interface ComboAddProps {
    id: number
    name: string
    price: string
    image: string
}

export default function ComboAddButton({ id, name, price, image }: ComboAddProps) {
    const { addItem } = useCart()
    const [qty, setQty] = useState(1)
    const [flash, setFlash] = useState(false)

    const handleAdd = () => {
        for (let i = 0; i < qty; i++) {
            addItem({ id, name, price, image })
        }
        setFlash(true)
        setTimeout(() => setFlash(false), 1500)
        setQty(1)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {/* Qty stepper */}
            <div style={{
                display: 'flex', alignItems: 'center',
                border: '1px solid rgba(28,28,30,0.15)', borderRadius: '2px',
                overflow: 'hidden',
            }}>
                <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    style={{
                        width: '34px', height: '40px', background: 'transparent', border: 'none',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: qty === 1 ? 'rgba(28,28,30,0.2)' : 'rgba(28,28,30,0.5)',
                    }}
                >
                    <Minus size={11} strokeWidth={2} />
                </button>
                <span style={{
                    minWidth: '36px', textAlign: 'center',
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.05rem', color: '#1C1C1E', fontWeight: 300,
                    borderLeft: '1px solid rgba(28,28,30,0.08)',
                    borderRight: '1px solid rgba(28,28,30,0.08)',
                    padding: '4px 8px', lineHeight: '30px',
                }}>
                    {qty}
                </span>
                <button
                    onClick={() => setQty(q => q + 1)}
                    style={{
                        width: '34px', height: '40px', background: 'transparent', border: 'none',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'rgba(28,28,30,0.5)',
                    }}
                >
                    <Plus size={11} strokeWidth={2} />
                </button>
            </div>

            {/* Add to Cart */}
            <button
                onClick={handleAdd}
                style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '12px 32px',
                    background: flash
                        ? 'linear-gradient(135deg, #4CAF82, #6EE7B7)'
                        : 'linear-gradient(135deg, #C9A96E, #E8D5A3, #C9A96E)',
                    color: '#1C1C1E', border: 'none', cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    transition: 'background 0.3s',
                }}
            >
                <ShoppingBag size={14} strokeWidth={1.5} />
                {flash ? 'Added to Cart!' : `Add Set${qty > 1 ? ` ×${qty}` : ''} to Cart`}
            </button>
        </div>
    )
}
