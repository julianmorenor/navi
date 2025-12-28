import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Psilocybin = () => {
    return (
        <div className="bg-[#FBF8F3] min-h-screen">
            {/* Parallax Hero */}
            <div className="relative h-screen overflow-hidden flex items-center justify-center">
                <Motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="absolute inset-0 z-0"
                >
                    <img src="/serene_experience.png" alt="Psilocibina Background" className="w-full h-full object-cover filter brightness-[0.6]" />
                </Motion.div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <Motion.span
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="inline-block border border-white/30 px-4 py-1 rounded-full text-xs text-white tracking-[0.3em] uppercase mb-6 backdrop-blur-sm"
                    >
                        Medicina Sagrada
                    </Motion.span>
                    <Motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                        className="font-display text-7xl md:text-9xl text-white mb-6 leading-none"
                    >
                        Psilocibina
                    </Motion.h1>
                    <Motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                        className="text-white/80 text-xl font-light tracking-wide max-w-2xl mx-auto"
                    >
                        Donde la neurociencia moderna se encuentra con la sabiduría ancestral.
                    </Motion.p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <span className="text-white text-sm opacity-50">Descubre</span>
                </div>
            </div>

            {/* Dual Perspective: Sticky Scroll Section */}
            <section className="py-24 px-6 md:px-12 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        {/* Science Column */}
                        <div className="sticky top-32 p-8 rounded-[32px] bg-white border border-gray-100 shadow-xl">
                            <span className="text-xs font-bold text-obsidian uppercase tracking-widest border-b border-obsidian pb-1 mb-6 inline-block">Perspectiva Científica</span>
                            <h3 className="text-4xl font-display text-obsidian mb-6">Neuroplasticidad & <br /> Renacimiento Neuronal</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
                                Estudios de Johns Hopkins revelan que la psilocibina desactiva temporalmente la "Red Neuronal por Defecto" (DMN),
                                permitiendo que regiones del cerebro que normalmente no se comunican, lo hagan libremente.
                            </p>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-obsidian"></div>
                                    <span>Reducción de actividad en patrones rígidos</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-obsidian"></div>
                                    <span>Aumento de entropía cerebral (creatividad)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-obsidian"></div>
                                    <span>Inducción de estados de plasticidad rápida</span>
                                </li>
                            </ul>
                        </div>

                        {/* Spirit Column (Scrolls) */}
                        <div className="space-y-12 pt-12 md:pt-0">
                            <div className="bg-[#748561] text-white p-10 rounded-[32px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-white/20 transition-all duration-700"></div>
                                <span className="text-xs font-bold text-white/80 uppercase tracking-widest border-b border-white/50 pb-1 mb-6 inline-block">Perspectiva Espiritual</span>
                                <h3 className="text-4xl font-display mb-6">Disolución del Ego</h3>
                                <p className="text-white/90 leading-relaxed text-lg font-light">
                                    Al silenciar el "yo" narrativo, emergemos a una consciencia oceánica. La psilocibina no solo cura,
                                    revela la interconexión fundamental de toda la vida. Es un rito de paso hacia la madurez espiritual.
                                </p>
                            </div>

                            <div className="bg-[#2A3022] text-white p-10 rounded-[32px] shadow-2xl relative overflow-hidden">
                                <h3 className="text-3xl font-display mb-4">El Maestro Interior</h3>
                                <p className="text-white/80 leading-relaxed font-light">
                                    "No te da lo que quieres, te da lo que necesitas." <br /><br />
                                    La experiencia se adapta a tu momento vital, mostrándote verdades que tu mente consciente ha ocultado por protección,
                                    pero que tu alma necesita integrar para sanar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Protocol & Shop CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-5xl mx-auto bg-[#FBF8F3] rounded-[48px] p-12 md:p-20 relative overflow-hidden text-center border border-[#748561]/20">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#748561] to-[#A1AD94]"></div>

                        <h2 className="text-4xl md:text-5xl font-display text-obsidian mb-6">Tu Viaje Microdosificado</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16 font-light">
                            Integra la medicina de forma sutil. Sin viajes alucinógenos, solo claridad sostenida y presencia.
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 text-left">
                            <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden relative">
                                <img src="/serene_lions_mane.png" alt="Kit Microdosis" className="w-full h-full object-cover" />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-obsidian font-bold">
                                    Protocolo Fademan
                                </div>
                            </div>

                            <div className="w-full md:w-1/2">
                                <h3 className="text-3xl font-display text-[#748561] mb-2">Kit Renovación</h3>
                                <div className="text-4xl font-bold text-obsidian mb-6">$85.00</div>
                                <p className="text-gray-500 mb-8 leading-relaxed">
                                    Cápsulas de psilocibina estandarizada (0.2g) combinadas con Melena de León para potenciar la neurogénesis.
                                </p>
                                <Link to="/shop" className="block w-full text-center bg-obsidian text-white py-4 rounded-xl font-bold tracking-wide hover:bg-[#748561] transition-colors">
                                    ADQUIRIR EN BOTICARIO
                                </Link>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    *Requiere breve cuestionario de salud al finalizar la compra.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Psilocybin;
