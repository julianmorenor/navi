import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ShoppingBag, Filter } from 'lucide-react'; // Added filter icon
import ProductCard from '../components/ProductCard';

const Apothecary = () => {
    const [filter, setFilter] = useState('all');

    const products = [
        { title: "Kaizen: Melena de León", price: "$45.00", tag: "Enfoque", image: "/product_lions_mane.png", type: "Kaizen" },
        { title: "MEVAK: Kit Sensorial", price: "$85.00", tag: "Calma", image: "/product_art_therapy_box.png", type: "MEVAK" }, // Placeholder
        { title: "Caja de Arte Terapéutico", price: "$120.00", tag: "Creatividad", image: "/product_art_therapy_box.png", type: "Art" },
        { title: "Kaizen: Cordyceps", price: "$40.00", tag: "Energía", image: "/product_lions_mane.png", type: "Kaizen" }, // added for grid fullness
    ];

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '4rem' }}>
            <div className="container">
                <Motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-moss-core)' }}
                >
                    El Boticario
                </Motion.h1>
                <p style={{ maxWidth: '600px', marginBottom: '4rem', opacity: 0.8 }}>Herramientas físicas para la alquimia interior.</p>

                <div className="apothecary-layout">
                    {/* Sidebar (Desktop) / Topbar (Mobile) */}
                    <aside className="filter-sidebar">
                        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', position: 'sticky', top: '100px' }}>
                            <h4 className="font-display" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Filter size={18} /> Filtrar Por
                            </h4>
                            <ul className="filter-list">
                                {['Todos', 'Kaizen', 'MEVAK', 'Arte'].map(f => (
                                    <li
                                        key={f}
                                        onClick={() => setFilter(f === 'Todos' ? 'all' : f)}
                                        style={{
                                            cursor: 'pointer', padding: '0.5rem 0',
                                            color: (filter === f || (filter === 'all' && f === 'Todos')) ? 'var(--color-moss-core)' : 'inherit',
                                            fontWeight: (filter === f || (filter === 'all' && f === 'Todos')) ? '600' : '400'
                                        }}
                                    >
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Grid */}
                    <div className="product-grid">
                        {products
                            .filter(p => filter === 'all' || p.type === filter)
                            .map((p, i) => (
                                <ProductCard key={i} title={p.title} price={p.price} image={p.image} tag={p.tag} />
                            ))}
                    </div>
                </div>
            </div>

            <style>{`
         .apothecary-layout {
           display: grid;
           grid-template-columns: 1fr;
           gap: 2rem;
         }
         .product-grid {
           display: grid;
           grid-template-columns: 1fr;
           gap: 2rem;
         }
         .filter-list {
           list-style: none;
           display: flex;
           gap: 1rem;
           overflow-x: auto;
           padding-bottom: 0.5rem; /* Scrollbar space */
         }
         
         @media (min-width: 768px) {
           .apothecary-layout {
             grid-template-columns: 250px 1fr;
             gap: 3rem;
           }
           .filter-list {
             flex-direction: column;
             gap: 0.5rem;
             border-bottom: none;
           }
           .product-grid {
             grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
           }
         }
       `}</style>
        </div>
    );
};
export default Apothecary;
