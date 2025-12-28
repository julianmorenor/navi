import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Star } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Allies = () => {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#FBF8F3' }}>
            <section className="container" style={{ padding: '6rem 2rem' }}>
                <PageHeader
                    title="Sinergias & Aliados"
                    subtitle="Red de expertos y terapeutas unidos por una visión común: el bienestar integral del ser."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
                    {/* Featured Service: Massage */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col md:flex-row">
                        <div className="md:w-2/5 relative h-64 md:h-auto">
                            <img src="/serene_experience.png" alt="Masaje" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-moss">
                                TERAPIA CORPORAL
                            </div>
                        </div>
                        <div className="p-8 md:w-3/5 flex flex-col justify-center">
                            <h3 className="font-display text-2xl text-obsidian mb-2">Masajes Musculares al Espíritu</h3>
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-accent-gold text-accent-gold" />)}
                                <span className="text-sm text-gray-400 ml-2">(Nuevo)</span>
                            </div>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                Más que un masaje, una ceremonia de reconexión. A través del tacto consciente desbloqueamos memorias celulares
                                y tensiones que residen en el cuerpo, permitiendo que la energía vital vuelva a fluir libremente.
                            </p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-xl font-bold text-moss">$90 / 60min</span>
                                <button className="px-6 py-2 bg-obsidian text-white rounded-full hover:bg-moss transition-colors text-sm font-semibold">
                                    Reservar Cita
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for future allies */}
                    <div className="bg-sand-light rounded-3xl p-8 flex flex-col justify-center items-center text-center border-2 border-dashed border-sage/30">
                        <h3 className="font-display text-xl text-gray-500 mb-4">¿Eres Terapeuta?</h3>
                        <p className="text-gray-500 mb-6 max-w-xs">
                            Buscamos aliados alineados con la filosofía Navi para expandir nuestra red de sanación.
                        </p>
                        <button className="text-moss font-semibold border-b-2 border-moss hover:text-obsidian hover:border-obsidian transition-colors">
                            Únete a la Sinergia
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Allies;
