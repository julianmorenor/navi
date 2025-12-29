import React from 'react';
import { Link } from 'react-router-dom';

const Manifesto = () => {
    return (
        <section className="container-fluid" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: 'white',
            position: 'relative',
            padding: '10rem 0'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1, marginTop: '-5vh' }}>
                <h3 className="font-display text-moss" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2.5rem' }}>
                    Manifiesto
                </h3>
                <p style={{ fontSize: '2.5rem', fontStyle: 'italic', maxWidth: '1000px', margin: '0 auto', color: 'var(--color-obsidian)', fontFamily: 'var(--font-display)', lineHeight: 1.3 }}>
                    "Navi es un santuario donde la ciencia y el espíritu se encuentran para recordarte <i className="text-moss">quién eres</i>."
                </p>
                <Link to="/philosophy" style={{ marginTop: '3rem', display: 'inline-block', color: 'var(--color-leaf-deep)', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.1em' }}>LEER MANIFESTO &rarr;</Link>
            </div>
            {/* Bottom Gradient Transition to Footer (sand-light) */}
            <div style={{
                position: 'absolute', bottom: -1, left: 0, right: 0, height: '100px',
                background: 'linear-gradient(to bottom, transparent, var(--color-sand-light))',
                pointerEvents: 'none',
                zIndex: 2
            }}></div>
        </section>
    );
};

export default Manifesto;
