import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X, ChevronDown } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { toggleCart, cartItems } = useCart();

    const navLinks = [
        {
            name: 'Vivencias', path: '/experiences', sub: [
                { name: 'Psilocibina', path: '/experiences/psilocybin' },
                { name: 'Talleres', path: '/experiences/workshops' },
                { name: 'DMT', path: '/experiences/dmt' },
                { name: 'Constelaciones', path: '/experiences/constellations' }
            ]
        },
        {
            name: 'Boticario', path: '/shop', sub: [
                { name: 'Kaisen', path: '/shop?filter=Kaisen' },
                { name: 'Mevak', path: '/shop?filter=Mevak' }
            ]
        },
        {
            name: 'Sinergias', path: '/allies', sub: [
                { name: 'Masajes', path: '/allies' }
            ]
        },
        { name: 'Manifiesto', path: '/philosophy', sub: [] }
    ];

    return (
        <header className="glass-header" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
            {/* Container */}
            <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Toggle (Mobile Left) */}
                <div className="mobile-toggle" style={{ display: 'none' }}>
                    <Menu size={24} onClick={() => setIsMenuOpen(true)} style={{ cursor: 'pointer', color: 'var(--color-obsidian)' }} />
                </div>

                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <Motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <img src="/logo/navi-logo2.svg" alt="NAVI" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                    </Motion.div>
                </Link>

                {/* Desktop Mega Menu */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none', margin: 0, padding: 0 }}>
                        {navLinks.map((link) => (
                            <li key={link.name} style={{ position: 'relative' }} className="nav-item">
                                <Link to={link.path} className="font-display" style={{
                                    fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600,
                                    color: location.pathname.includes(link.path) ? 'var(--color-leaf-deep)' : 'var(--color-obsidian)',
                                    display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none', transition: 'all 0.3s'
                                }}>
                                    {link.name} {link.sub.length > 0 && <ChevronDown size={12} />}
                                </Link>
                                {/* Dropdown */}
                                {link.sub.length > 0 && (
                                    <div className="dropdown" style={{
                                        position: 'absolute', top: '100%', left: '-1rem', width: '220px',
                                        background: 'rgba(255, 255, 255, 0.98)', border: '1px solid var(--glass-border)',
                                        padding: '1.5rem', borderRadius: '0 0 12px 12px',
                                        display: 'none', flexDirection: 'column', gap: '0.75rem',
                                        backdropFilter: 'blur(16px)', boxShadow: '0 20px 40px rgba(243, 156, 18, 0.08)'
                                    }}>
                                        {link.sub.map(subItem => (
                                            <Link key={subItem.name} to={subItem.path} style={{ textDecoration: 'none' }}>
                                                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-main)', cursor: 'pointer', display: 'block' }} className="hover:text-moss">
                                                    {subItem.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ position: 'relative', cursor: 'pointer' }} onClick={toggleCart}>
                        <ShoppingBag size={20} color="var(--color-obsidian)" />
                        {cartItems.length > 0 && (
                            <span style={{
                                position: 'absolute', top: -5, right: -5, width: '8px', height: '8px',
                                background: 'var(--color-moss-core)', borderRadius: '50%'
                            }}></span>
                        )}
                    </div>
                    {/* Mobile Right Toggle */}
                    <Menu className="mobile-toggle-right" size={24} onClick={() => setIsMenuOpen(true)} style={{ cursor: 'pointer', display: 'none', color: 'var(--color-obsidian)' }} />
                </div>
            </div>

            {/* Global Style overrides for responsive visibility */}
            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle, .mobile-toggle-right { display: none !important; }
        }
        @media (max-width: 767px) {
           .mobile-toggle-right { display: block !important; }
        }
        .nav-item:hover .dropdown { display: flex !important; }
        .hover\\:text-moss:hover { color: var(--color-moss-core) !important; }
      `}</style>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <Motion.div
                        initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
                        style={{
                            position: 'fixed', inset: 0, background: 'var(--color-sand-bg)', zIndex: 2000,
                            padding: '2rem', display: 'flex', flexDirection: 'column'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4rem', alignItems: 'center' }}>
                            <img src="/logo/navi-logo2.svg" alt="NAVI" style={{ height: '28px' }} />
                            <X size={24} onClick={() => setIsMenuOpen(false)} style={{ cursor: 'pointer', color: 'var(--color-obsidian)' }} />
                        </div>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {navLinks.map(link => (
                                <li key={link.name} onClick={() => setIsMenuOpen(false)}>
                                    <Link to={link.path} className="font-display" style={{
                                        fontSize: '2rem', color: 'var(--color-obsidian)', textDecoration: 'none',
                                        display: 'block'
                                    }}>
                                        {link.name}
                                    </Link>
                                    {link.sub.length > 0 && (
                                        <div style={{ paddingLeft: '1rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            {link.sub.map(subItem => (
                                                <Link key={subItem.name} to={subItem.path} style={{ textDecoration: 'none' }}>
                                                    <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>{subItem.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </Motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
