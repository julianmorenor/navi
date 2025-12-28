import React from 'react';
import { Link } from 'react-router-dom';

const Manifesto = () => {
    return (
        <section className="container-fluid" style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: 'white',
            position: 'relative',
            padding: '4rem 0'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h3 className="font-display text-moss" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2.5rem' }}>Manifiesto</h3>
                <p style={{ fontSize: '2rem', fontStyle: 'italic', maxWidth: '900px', margin: '0 auto', color: 'var(--color-obsidian)', fontFamily: 'var(--font-display)', lineHeight: 1.4 }}>
                    "Navi es un santuario donde la ciencia y el espíritu se encuentran para recordarte quién eres."
                </p>
                <Link to="/philosophy" style={{ marginTop: '2rem', display: 'inline-block', color: 'var(--color-leaf-deep)', fontWeight: 600, textDecoration: 'none' }}>LEER MANIFESTO &rarr;</Link>
            </div>
            {/* Bottom Gradient Transition to Footer (sand-light) */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px',
                background: 'linear-gradient(to bottom, transparent, var(--color-sand-light))',
                pointerEvents: 'none',
                zIndex: 2
            }}></div>
        </section>
    );
};

export default Manifesto;
