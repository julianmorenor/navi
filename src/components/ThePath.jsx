import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ThePath = () => {
    return (
        <section className="container-fluid" style={{ padding: '10rem 0 20rem', position: 'relative', backgroundColor: 'var(--color-sand-light)' }}>
            <div className="container" style={{ position: 'relative' }}>
                {/* Decorative Background Elements */}
                <div style={{ position: 'absolute', left: 0, top: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(161, 173, 148, 0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: -1 }}></div>

                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <Motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ display: 'inline-block', marginBottom: '1rem', color: 'var(--color-moss-core)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 600 }}
                    >
                        El Camino
                    </Motion.span>
                    <Motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '3.5rem', lineHeight: 1.1 }}
                        className="font-display text-obsidian"
                    >
                        Despertar de la <br /><i className="font-serif italic text-moss">Consciencia</i>
                    </Motion.h2>
                </div>

                <div className="flex flex-col gap-12 max-w-6xl mx-auto">
                    {/* Psilocybin - Horizontal Card */}
                    <Link to="/experiences/psilocybin" className="no-underline group block">
                        <Motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row h-auto md:min-h-[320px]"
                        >
                            <div className="md:w-5/12 h-[300px] md:h-auto relative overflow-hidden">
                                <img src="/product_lions_mane.png" alt="Psilocibina" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-moss/20 mix-blend-multiply"></div>
                            </div>
                            <div className="md:w-7/12 p-10 flex flex-col justify-center relative">
                                <span className="text-moss font-bold tracking-widest text-xs uppercase mb-3">Medicina Ancestral</span>
                                <h3 className="text-3xl font-display text-obsidian mb-4">Psilocibina: El <i className="font-serif italic">Renacer</i></h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Una inmersión científica y espiritual en las profundidades de tu ser. Reprocesamiento emocional y expansión de consciencia.
                                </p>
                                <span className="flex items-center gap-2 text-moss font-bold uppercase text-sm group-hover:translate-x-2 transition-transform">
                                    Ver Detalles →
                                </span>
                            </div>
                        </Motion.div>
                    </Link>

                    {/* Talleres - Horizontal Card */}
                    <Link to="/experiences/workshops" className="no-underline group block">
                        <Motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-auto md:min-h-[320px]"
                        >
                            <div className="md:w-5/12 h-[300px] md:h-auto relative overflow-hidden bg-sand-light">
                                <img src="/service_couples.png" alt="Talleres" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                            </div>
                            <div className="md:w-7/12 p-10 flex flex-col justify-center">
                                <span className="text-moss font-bold tracking-widest text-xs uppercase mb-2">Educación</span>
                                <h3 className="text-3xl font-display text-obsidian mb-3">Talleres: <i className="font-serif italic">Arquitectura</i> de la Mente</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    Diseña tu realidad navegando el Inconsciente, Consciente y Supraconsciente a través de nuestros niveles formativos.
                                </p>
                                <span className="text-moss font-bold uppercase text-xs border-b border-moss self-start pb-0.5">Explorar Niveles</span>
                            </div>
                        </Motion.div>
                    </Link>

                    {/* DMT - Horizontal Card */}
                    <Link to="/experiences/dmt" className="no-underline group block">
                        <Motion.div
                            whileHover={{ y: -5 }}
                            className="bg-obsidian rounded-[40px] overflow-hidden shadow-2xl hover:shadow-moss/20 transition-all duration-500 flex flex-col md:flex-row h-auto md:min-h-[320px]"
                        >
                            <div className="md:w-5/12 h-[300px] md:h-auto relative overflow-hidden">
                                <img src="/hero_background.png" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" alt="DMT" />
                            </div>
                            <div className="md:w-7/12 p-10 flex flex-col justify-center text-white">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-moss font-bold tracking-widest text-xs uppercase">Experiencia Trascendental</span>
                                    <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] backdrop-blur text-white/80">Próximamente</span>
                                </div>
                                <h3 className="text-3xl font-display mb-3">DMT: La <i className="font-serif italic">Molécula</i> del Espíritu</h3>
                                <p className="text-white/70 mb-4 leading-relaxed">
                                    Una experiencia breve de trascendencia infinita que te conecta con el origen mismo de la existencia.
                                </p>
                                <span className="text-white font-bold uppercase text-xs border-b border-white self-start pb-0.5 group-hover:text-moss group-hover:border-moss transition-colors">Leer Más</span>
                            </div>
                        </Motion.div>
                    </Link>
                </div>
            </div>

            {/* Bottom Gradient for Smooth Transition - Moved outside container for better positioning */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '300px',
                background: 'linear-gradient(to bottom, transparent, white)',
                pointerEvents: 'none',
                zIndex: 2
            }}></div>
        </section>
    );
};

export default ThePath;
