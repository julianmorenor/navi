import React from 'react';
import { motion as Motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const Workshops = () => {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#FFFAF0' }}> {/* Warm Sand Bg */}
            <section className="container" style={{ padding: '6rem 2rem' }}>
                <PageHeader
                    title="Talleres de Consciencia"
                    subtitle="Un viaje a través de los tres estados del ser para integrar tu sombra, despertar tu luz y conectar con el todo."
                />

                {/* The 3 Levels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <LevelCard
                        title="Inconsciente"
                        icon="🌑"
                        desc="Explora la sombra, patrones heredados y heridas primarias. El primer paso para sanar es hacer visible lo invisible."
                    />
                    <LevelCard
                        title="Consciente"
                        icon="🌓"
                        desc="Integración y presencia. Herramientas para la gestión emocional, mindfulness y la toma de decisiones desde el centro."
                        highlight
                    />
                    <LevelCard
                        title="Supraconsciente"
                        icon="🌕"
                        desc="Conexión espiritual y propósito. Accede a la intuición superior y al flujo universal de la existencia."
                    />
                </div>

                {/* Pricing Tiers */}
                <h2 className="font-display text-3xl mb-12">Elige tu Modalidad</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <PricingCard
                        tier="Basic"
                        price="$150"
                        features={['Acceso a 1 Taller (Elegir Nivel)', 'Material Digital PDF', 'Comunidad en Discord']}
                    />
                    <PricingCard
                        tier="Classic"
                        price="$350"
                        features={['Acceso a los 3 Talleres', 'Cuaderno de Trabajo Físico', '1 Sesión Grupal Q&A', 'Comunidad en Discord']}
                        recommended
                    />
                    <PricingCard
                        tier="Premium"
                        price="$800"
                        features={['Acceso Total + Grabaciones', 'Kit de Bienvenida (Cacao + Diario)', '2 Sesiones Individuales de Mentoría', 'Retiro de Fin de Semana (Presencial)']}
                    />
                </div>
            </section>
        </div>
    );
};

const LevelCard = ({ title, icon, desc, highlight }) => (
    <div className={`p-8 rounded-3xl ${highlight ? 'bg-white shadow-xl scale-105' : 'bg-white/50 border border-sage/30'}`}>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-display text-2xl mb-3 text-obsidian">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
);

const PricingCard = ({ tier, price, desc, features, recommended }) => (
    <div className={`relative p-10 rounded-[32px] flex flex-col ${recommended ? 'bg-moss text-white shadow-2xl scale-105 z-10' : 'bg-white text-obsidian border border-gray-200 hover:shadow-xl'}`} style={{ transition: 'all 0.3s' }}>
        {recommended && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Recomendado</span>}
        <h3 className={`font-display text-3xl mb-2 ${recommended ? 'text-white' : 'text-obsidian'}`}>{tier}</h3>
        <p className={`text-sm mb-8 ${recommended ? 'text-white/80' : 'text-gray-400'}`}>{desc}</p>
        <div className="text-5xl font-bold mb-8 font-display">{price}</div>
        <ul className="mb-10 space-y-4 flex-grow text-left">
            {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                    <span className={`${recommended ? 'text-[#D4AF37]' : 'text-moss'} font-bold`}>✓</span>
                    <span className={recommended ? 'text-white/90' : 'text-gray-600'}>{feat}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all ${recommended ? 'bg-white text-moss hover:bg-[#FBF8F3]' : 'bg-obsidian text-white hover:bg-moss'}`}>
            Empezar Ahora
        </button>
    </div>
);

export default Workshops;
