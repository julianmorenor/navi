import React from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
    const { cartOpen, toggleCart, cartItems, removeFromCart, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {cartOpen && (
                <>
                    {/* Backdrop */}
                    <Motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1999, backdropFilter: 'blur(4px)' }}
                    />

                    {/* Sidebar */}
                    <Motion.div
                        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed', top: 0, right: 0, height: '100%', width: '100%', maxWidth: '400px',
                            background: 'var(--color-cream-bg)', borderLeft: '1px solid var(--glass-border)', zIndex: 2000,
                            display: 'flex', flexDirection: 'column'
                        }}
                    >
                        <div style={{ padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 className="font-display" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <ShoppingBag size={20} color="var(--color-moss-core)" />
                                Tu Alquimia
                            </h2>
                            <button onClick={toggleCart} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-moss-core)' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
                            {cartItems.length === 0 ? (
                                <div style={{ textAlign: 'center', opacity: 0.5, marginTop: '2rem' }}>
                                    <p>Tu viaje aún no tiene provisiones.</p>
                                </div>
                            ) : (
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {cartItems.map((item, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px' }}>
                                            <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', background: '#000' }}>
                                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none' }} />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-display)' }}>{item.title}</h4>
                                                <span className="text-moss">{item.price}</span>
                                            </div>
                                            <button onClick={() => removeFromCart(idx)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)' }}>
                                                <Trash2 size={18} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div style={{ padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.25rem', fontFamily: 'var(--font-display)' }}>
                                <span>Total</span>
                                <span className="text-moss">${cartTotal.toFixed(2)}</span>
                            </div>
                            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Continuar Compra
                            </button>
                        </div>
                    </Motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
