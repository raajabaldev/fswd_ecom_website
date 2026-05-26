'use client'

import React, {
    createContext,
    useContext,
    useState,
    useCallback
} from 'react'

interface CartItem {
    id: number
    name: string
    price: string
    qty: number
    image?: string
}

interface CartContextType {
    isOpen: boolean
    items: CartItem[]

    openCart: () => void
    closeCart: () => void

    addItem: (item: Omit<CartItem, 'qty'>) => void
    removeItem: (id: number) => void
    updateQty: (id: number, delta: number) => void

    clearCart: () => void

    totalItems: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [isOpen, setIsOpen] = useState(false)

    const [items, setItems] = useState<CartItem[]>([])

    const openCart = useCallback(() => setIsOpen(true), [])

    const closeCart = useCallback(() => setIsOpen(false), [])

    const addItem = useCallback((item: Omit<CartItem, 'qty'>) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === item.id)

            if (existing) {
                return prev.map(i =>
                    i.id === item.id
                        ? { ...i, qty: i.qty + 1 }
                        : i
                )
            }

            return [...prev, { ...item, qty: 1 }]
        })

        setIsOpen(true)
    }, [])

    const removeItem = useCallback((id: number) => {
        setItems(prev => prev.filter(i => i.id !== id))
    }, [])

    const updateQty = useCallback((id: number, delta: number) => {
        setItems(prev =>
            prev
                .map(i =>
                    i.id === id
                        ? { ...i, qty: i.qty + delta }
                        : i
                )
                .filter(i => i.qty > 0)
        )
    }, [])

    /* CLEAR CART */
    const clearCart = useCallback(() => {
        setItems([])
    }, [])

    const totalItems = items.reduce(
        (sum, item) => sum + item.qty,
        0
    )

    return (
        <CartContext.Provider
            value={{
                isOpen,
                items,

                openCart,
                closeCart,

                addItem,
                removeItem,
                updateQty,

                clearCart,

                totalItems
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const ctx = useContext(CartContext)

    if (!ctx) {
        throw new Error(
            'useCart must be used within CartProvider'
        )
    }

    return ctx
}
