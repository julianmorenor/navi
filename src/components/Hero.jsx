import React from 'react';
import { motion as Motion, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        // Highly responsive (divisor reduced from 10 to 5)
        mouseX.set((clientX - centerX) / 5);
        mouseY.set((clientY - centerY) / 5);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '80px', // Navbar offset
            }}>
            {/* Background with Subtle Animation */}
            <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                <Motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ width: '100%', height: '100%' }}
                >
                    <img src="/serene_hero_background.png" alt="Santuario" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none' }} />
                </Motion.div>

                {/* Soft Green Glow (Inspired by background-components) */}
                <Motion.div
                    style={{
                        position: 'absolute',
                        inset: '-50%', // Even larger inset to support high travel
                        backgroundImage: `radial-gradient(circle at center, var(--color-moss-core) 0%, transparent 40%)`,
                        opacity: 0.45,
                        mixBlendMode: "multiply",
                        x: mouseX,
                        y: mouseY,
                        pointerEvents: 'none',
                        zIndex: 1
                    }}
                />

                <div style={{ position: 'absolute', inset: 0, background: 'white' }}></div>
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px',
                    background: 'linear-gradient(to bottom, transparent, var(--color-sand-light))',
                    zIndex: 2
                }}></div>
            </div>

            {/* Floating Particles/Orbs for "Organic Solar" vibe */}
            <Motion.div
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px',
                    background: 'radial-gradient(circle, rgba(243, 156, 18, 0.1) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%', pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '100px' }}>
                <Motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
                    style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--color-obsidian)' }}
                    className="font-display"
                >
                    Bienestar <br /><i className="font-serif italic text-moss">Consciente</i>
                </Motion.h1>
                <Motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                    style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 2.5rem', color: 'var(--color-text-main)' }}
                >
                    Aquí la consciencia guía, el cuerpo habla, el alma recuerda.
                </Motion.p>
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-4"
                >
                    <Motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(116, 133, 97, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{ borderRadius: '50px' }}
                    >
                        <Link
                            to="/experiences"
                            className="btn-primary"
                            style={{
                                borderRadius: '50px',
                                padding: '0.8rem 2.8rem',
                                fontSize: '0.9rem',
                                background: 'var(--color-moss-core)',
                                border: 'none',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}
                        >
                            Vivencias
                        </Link>
                    </Motion.div>

                    <Motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(116, 133, 97, 0.2)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{ borderRadius: '50px' }}
                    >
                        <Link
                            to="/shop"
                            style={{
                                padding: '0.8rem 2.8rem',
                                borderRadius: '50px',
                                border: '2px solid var(--color-moss-core)',
                                color: 'var(--color-moss-core)',
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                display: 'inline-block',
                                background: 'rgba(255, 255, 255, 0.5)',
                                backdropFilter: 'blur(5px)',
                                transition: 'all 0.3s ease'
                            }}
                            className="hover:bg-moss hover:text-white"
                        >
                            Boticario
                        </Link>
                    </Motion.div>
                </Motion.div>
            </div>

            {/* Scroll Indicator */}
            <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    zIndex: 10
                }}
            >
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--color-moss-core)', fontWeight: 600 }}>Descubre</span>
                <Motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--color-moss-core), transparent)' }}
                />
            </Motion.div>

            <style>{`
                .hover\\:bg-moss:hover {
                    background-color: var(--color-moss-core) !important;
                    color: white !important;
                }
            `}</style>
        </section>
    );
};

export default Hero;