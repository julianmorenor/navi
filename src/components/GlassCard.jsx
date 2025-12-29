import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GlassCard = ({ title, subtitle, accent, children, to }) => (
    <Link to={to || '#'} style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
        <Motion.div
            whileHover={{ y: -10, boxShadow: `0 24px 48px rgba(116, 133, 97, 0.1)` }}
            className="glass-panel"
            style={{ padding: '2.5rem 2rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '320px', backgroundColor: 'white', borderTop: `4px solid ${accent}` }}
        >
            <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-obsidian)' }}>{title}</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>{subtitle}</p>
            <div style={{ marginTop: '2rem' }}>
                {children}
            </div>
        </Motion.div>
    </Link>
);

export default GlassCard;
