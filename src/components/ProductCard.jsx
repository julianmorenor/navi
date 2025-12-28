import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ title, price, image, role, tag }) => {
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart({ title, price, image });
    };

    return (
        <Motion.div
            whileHover={{ y: -8 }}
            className="glass-panel"
            style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'white' }}
        >
            <div style={{ position: 'relative', height: '320px', backgroundColor: 'var(--color-sand-light)', overflow: 'hidden' }}>
                {/* Tag */}
                {tag && (
                    <div style={{
                        position: 'absolute', top: '1rem', left: '1rem', zIndex: 2,
                        background: 'rgba(255, 255, 255, 0.9)', color: 'var(--color-moss-core)',
                        padding: '0.25rem 0.75rem', borderRadius: '12px',
                        fontSize: '0.7rem', fontWeight: 600, border: '1px solid var(--glass-border)',
                        textTransform: 'uppercase', letterSpacing: '0.05em'
                    }}>
                        {tag}
                    </div>
                )}

                {/* Image */}
                <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    onError={(e) => { e.target.style.display = 'none' }}
                />
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="font-display" style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--color-obsidian)' }}>{title}</h3>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {role === 'service' ? (
                        <button className="btn-primary" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.8rem' }}>
                            Reservar Viaje <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
                        </button>
                    ) : (
                        <>
                            <span className="font-display" style={{ fontSize: '1.5rem', color: 'var(--color-moss-core)', fontWeight: 600 }}>{price}</span>
                            <button
                                onClick={handleAdd}
                                style={{
                                    background: 'var(--color-moss-core)', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                                    transition: 'all 0.3s ease', color: 'white'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.backgroundColor = 'var(--color-leaf-deep)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = 'var(--color-moss-core)'; }}
                            >
                                <ShoppingBag size={18} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </Motion.div>
    );
};

export default ProductCard;
