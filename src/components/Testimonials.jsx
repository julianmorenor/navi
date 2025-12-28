import React from 'react';
import { motion as Motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        { name: "Ana M.", role: "Psiconauta", text: "La experiencia de Microdosis cambió mi enfoque diario. Siento una claridad mental que no había experimentado en años." },
        { name: "Carlos R.", role: "Alumno Taller", text: "El taller de Inconsciente me dio herramientas reales para entender mis patrones. No es solo teoría, es pura vivencia." },
        { name: "Sofia L.", role: "Terapeuta", text: "Navi es el puente perfecto entre la medicina ancestral y la seguridad moderna. Un espacio indispensable hoy en día." }
    ];

    return (
        <section className="container-fluid" style={{ padding: '8rem 0', backgroundColor: 'var(--color-sand-light)', position: 'relative' }}>
            <div className="container" style={{ position: 'relative' }}>
                <h2 className="font-display text-center text-3xl mb-12 text-obsidian">Voces de la Comunidad</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-white/70 backdrop-blur border border-sand-dark/20"
                        >
                            <div className="text-moss text-4xl font-serif leading-none mb-4">"</div>
                            <p className="text-gray-600 italic mb-6 leading-relaxed">{t.text}</p>
                            <div>
                                <h5 className="font-bold text-obsidian">{t.name}</h5>
                                <span className="text-xs uppercase tracking-wider text-gray-400">{t.role}</span>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
            {/* Bottom Gradient Transition to White */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px',
                background: 'linear-gradient(to bottom, transparent, white)',
                pointerEvents: 'none',
                zIndex: 2
            }}></div>
        </section>
    );
};

export default Testimonials;
