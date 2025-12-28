import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Leaf, Sparkles, Heart, Zap, Anchor } from 'lucide-react';

const icons = [
    { icon: Leaf, label: "Conexión Interior", color: "var(--color-moss-core)" },
    { icon: Sparkles, label: "Transformación", color: "var(--color-leaf-deep)" },
    { icon: Heart, label: "Bienestar", color: "var(--color-obsidian)" },
    { icon: Zap, label: "Espiritualidad", color: "var(--color-sage-muted)" },
    { icon: Anchor, label: "Acción Coherente", color: "var(--color-leaf-deep)" },
];

const Pillars = () => {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <div className="glass-panel" style={{
                display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', padding: '3rem 2rem', borderRadius: '32px',
                backgroundColor: 'rgba(255, 255, 255, 0.4)'
            }}>
                {icons.map((item, index) => (
                    <Motion.div
                        key={index}
                        whileHover={{ y: -8 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
                    >
                        <div style={{
                            width: '70px', height: '70px', borderRadius: '50%', background: `white`, border: `1px solid var(--glass-border)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 16px rgba(116, 133, 97, 0.08)`
                        }}>
                            <item.icon color={item.color} size={28} />
                        </div>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-obsidian)' }}>
                            {item.label}
                        </span>
                    </Motion.div>
                ))}
            </div>
        </div>
    );
};

export default Pillars;
