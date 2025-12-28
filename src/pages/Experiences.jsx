import React, { useState } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Experiences = () => {
    const [activeTab, setActiveTab] = useState('Parejas');

    const categories = ['Individual', 'Parejas', 'Grupos', 'Empresas'];

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '4rem' }}>
            <div className="container">
                <PageHeader
                    title="El Santuario"
                    subtitle="Espacios diseñados para la reconexión, el silencio y la transformación profunda en comunidad o soledad."
                />

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '3rem' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            style={{
                                background: 'none', border: 'none',
                                paddingBottom: '1rem',
                                color: activeTab === cat ? 'var(--color-moss-core)' : 'var(--color-text-muted)',
                                borderBottom: activeTab === cat ? '2px solid var(--color-moss-core)' : '2px solid transparent',
                                cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '1.1rem'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="glass-panel" style={{ borderRadius: '24px', overflow: 'hidden', display: 'flex', minHeight: '500px' }}>
                    {/* Image Side */}
                    <div style={{ width: '40%', position: 'relative' }}>
                        <img src="/service_couples.png" alt="Experience" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.5), transparent)' }}></div>
                    </div>

                    {/* Info Side */}
                    <div style={{ width: '60%', padding: '4rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: '2rem' }}>
                            <Calendar size={16} color="var(--color-moss-core)" />
                            <span style={{ fontSize: '0.875rem' }}>Próxima disponibilidad: Hoy</span>
                        </div>

                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            {activeTab === 'Parejas' ? 'Caminata Consciente + Conversación' : 'Sesión de Profundidad'}
                        </h2>

                        <p style={{ opacity: 0.8, marginBottom: '2rem', maxWidth: '500px' }}>
                            Una experiencia diseñada para {activeTab === 'Parejas' ? 'reconectar el vínculo a través del silencio compartido y la palabra verdadera' : 'explorar los límites de la percepción personal'}.
                        </p>

                        <ul style={{ marginBottom: '3rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '6px', height: '6px', background: 'var(--color-moss-core)', borderRadius: '50%' }}></div>
                                Comunicación Auténtica
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '6px', height: '6px', background: 'var(--color-moss-core)', borderRadius: '50%' }}></div>
                                Fortalecimiento del Vínculo
                            </li>
                        </ul>

                        <button className="btn-primary" style={{ padding: '1rem 3rem' }}>
                            Reservar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
