import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DMT = () => {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#FBF8F3' }}>
            {/* Hero */}
            <section style={{
                height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(135deg, #2A3022 0%, #1a1a1a 100%)', color: 'white'
            }}>
                <div className="container text-center">
                    <Motion.h1
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="font-display" style={{ fontSize: '4rem', marginBottom: '1rem' }}
                    >
                        DMT
                    </Motion.h1>
                    <p style={{ fontSize: '1.2rem', letterSpacing: '0.2em', opacity: 0.8 }}>LA MOLÉCULA DEL ESPÍRITU</p>
                </div>
            </section>

            <section className="container" style={{ padding: '6rem 2rem' }}>
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Intro */}
                    <p className="text-xl text-center leading-relaxed font-light text-obsidian">
                        Una experiencia breve pero de profundidad infinita. El DMT (Dimetiltriptamina) es un compuesto presente en la naturaleza
                        y en nuestro propio cerebro, facilitando estados de consciencia expandida que desafían nuestra percepción de la realidad.
                    </p>

                    {/* Science vs Spirit Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-3xl shadow-sm">
                            <h2 className="text-2xl font-display text-obsidian mb-4">Perspectiva Científica</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Interactúa intensamente con los receptores sigma-1 y serotonina 5-HT2A. Estudios sugieren su potencial para
                                "resetear" redes neuronales disfuncionales, ofreciendo alivio rápido en casos de depresión resistente y TEPT.
                                La experiencia dura entre 15 y 30 minutos, pero la plasticidad cerebral persiste.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-moss/20">
                            <h2 className="text-2xl font-display text-moss mb-4">Perspectiva Espiritual</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Conocido como el umbral hacia otras dimensiones. Los viajeros reportan encuentros con lo divino,
                                sensaciones de muerte y renacimiento, y una comprensión visceral de la interconexión de toda la vida.
                                Es un catalizador para preguntas profundas sobre la existencia.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12 bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-2xl font-display mb-4">¿Te sientes llamado?</h3>
                        <p className="mb-6 max-w-lg mx-auto text-gray-600">
                            Nuestras sesiones son facilitadas por expertos en un entorno controlado y seguro.
                            Requiere una entrevista previa de preparación.
                        </p>
                        <button className="bg-obsidian text-white px-8 py-3 rounded-full hover:bg-moss transition-colors">
                            Solicitar Entrevista
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DMT;
