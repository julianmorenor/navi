import React from 'react';
import GlassCard from './GlassCard';

const PillarsNavi = () => {
    return (
        <section className="container-fluid" style={{ backgroundColor: 'white', padding: '8rem 0', position: 'relative' }}>
            <div className="container text-center relative z-10">
                <h2 className="font-display" style={{ fontSize: '2.2rem', marginBottom: '3rem' }}>Los Pilares de Navi</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <GlassCard title="Vivencias" subtitle="Experiencias & Retiros" accent="var(--color-moss-core)" to="/experiences">
                        <p className="text-sm text-gray-600 mt-4">Espacios seguros para la transformation profunda.</p>
                    </GlassCard>
                    <GlassCard title="Boticario" subtitle="Tienda Unificada" accent="var(--color-obsidian)" to="/shop">
                        <p className="text-sm text-gray-600 mt-4">Productos Kaisen y Mevak para tu bienestar diario.</p>
                    </GlassCard>
                    <GlassCard title="Sinergias" subtitle="Aliados & Servicios" accent="var(--color-leaf-deep)" to="/allies">
                        <p className="text-sm text-gray-600 mt-4">Terapias complementarias y masajes al espíritu.</p>
                    </GlassCard>
                </div>
            </div>
            {/* Bottom Gradient */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px',
                background: 'linear-gradient(to bottom, transparent, var(--color-sand-light))',
                pointerEvents: 'none',
                zIndex: 2
            }}></div>
        </section>
    );
};

export default PillarsNavi;
