import React from 'react';
import { Instagram, Youtube, Twitter, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-sand-light)',
            paddingTop: '6rem', paddingBottom: '2rem',
            position: 'relative', overflow: 'hidden'
        }}>
            <div className="container grid-cols-4" style={{ position: 'relative', zIndex: 1 }}>

                {/* Column 1: Brand */}
                <div>
                    <img src="/logo/navi-logo2.svg" alt="NAVI" style={{ height: '28px', marginBottom: '1.5rem' }} />
                    <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', maxWidth: '250px', fontStyle: 'italic' }}>
                        "La conciencia guía, el cuerpo habla, el alma recuerda."
                    </p>
                </div>

                {/* Column 2: Exploración */}
                <div>
                    <h4 style={{ color: 'var(--color-obsidian)', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 600 }}>
                        Exploración
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                        <li><a href="#" className="hover:text-moss">Sesiones Individuales</a></li>
                        <li><a href="#" className="hover:text-moss">Parejas y Relaciones</a></li>
                        <li><a href="#" className="hover:text-moss">Retiros Corporativos</a></li>
                        <li><a href="#" className="hover:text-moss">Calendario de Eventos</a></li>
                    </ul>
                </div>

                {/* Column 3: Legal */}
                <div>
                    <h4 style={{ color: 'var(--color-obsidian)', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 600 }}>
                        Soporte
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                        <li><a href="#" className="hover:text-moss">Términos de Servicio</a></li>
                        <li><a href="#" className="hover:text-moss">Política de Privacidad</a></li>
                        <li><a href="#" className="hover:text-moss">Envíos y Devoluciones</a></li>
                        <li><a href="#" className="hover:text-moss">Contacto</a></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div>
                    <h4 style={{ color: 'var(--color-moss-core)', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 600 }}>
                        Únete a la Tribu
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', marginBottom: '1rem' }}>
                        Recibe reflexiones y novedades del ecosistema.
                    </p>
                    <div style={{ display: 'flex', borderBottom: '1px solid var(--color-moss-core)', paddingBottom: '0.5rem' }}>
                        <input type="email" placeholder="Tu correo electrónico" style={{
                            background: 'transparent', border: 'none', color: 'var(--color-text-main)', flex: 1, outline: 'none', fontFamily: 'var(--font-body)'
                        }} />
                        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-moss-core)' }}>
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.8, fontSize: '0.85rem' }}>
                <p>© 2024 Navi Ecosystem. Todos los derechos reservados.</p>
                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-obsidian)' }}>
                    <Instagram size={18} style={{ cursor: 'pointer' }} className="hover:text-moss" />
                    <Twitter size={18} style={{ cursor: 'pointer' }} className="hover:text-moss" />
                    <Youtube size={18} style={{ cursor: 'pointer' }} className="hover:text-moss" />
                </div>
            </div>

            <style>{`
                .hover\\:text-moss:hover { color: var(--color-moss-core) !important; }
            `}</style>
        </footer>
    );
};

export default Footer;
