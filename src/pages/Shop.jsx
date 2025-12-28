import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import PageHeader from '../components/PageHeader';

const Shop = () => {
    // Helper to get query params
    const useQuery = () => {
        return new URLSearchParams(window.location.search);
    };
    const query = useQuery();
    const initialFilter = query.get('filter') || 'all';
    const [filter, setFilter] = useState(initialFilter);

    // Consolidated Product Data
    const products = [
        // Kaisen (Mushrooms/Supplements)
        { title: "Kaizen: Melena de León", price: "$45.00", tag: "Enfoque", image: "/serene_lions_mane.png", type: "Kaisen" },
        { title: "Kaizen: Cordyceps", price: "$40.00", tag: "Energía", image: "/serene_lions_mane.png", type: "Kaisen" },
        { title: "Kaizen: Reishi", price: "$42.00", tag: "Calma", image: "/serene_lions_mane.png", type: "Kaisen" },
        { title: "Kit Microdosis Navi", price: "$85.00", tag: "Neuroplasticidad", image: "/serene_lions_mane.png", type: "Kaisen" },

        // Mevak (Sensory - Sprays, Candles, Diffusers)
        { title: "Spray: Limpieza Áurica", price: "$25.00", tag: "Purificación", image: "/product_art_therapy_box.png", type: "Mevak" },
        { title: "Spray: Amor Propio", price: "$25.00", tag: "Corazón", image: "/product_art_therapy_box.png", type: "Mevak" },
        { title: "Vela: Abundancia", price: "$35.00", tag: "Manifestación", image: "/product_art_therapy_box.png", type: "Mevak" },
        { title: "Difusor: Alineación Chakras", price: "$55.00", tag: "Armonía", image: "/product_art_therapy_box.png", type: "Mevak" },
        { title: "Vela: Retorno Solar", price: "$35.00", tag: "Ciclos", image: "/product_art_therapy_box.png", type: "Mevak" },

        // Experiences Integration (Optional to show here or filter out)
        // { title: "Taller: Inconsciente", price: "$150.00", tag: "Vivencia", image: "/serene_experience.png", type: "Vivencias", role: "service" },
    ];

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '4rem', backgroundColor: '#FBF8F3' }}>
            <div className="container">
                <PageHeader
                    title="El Boticario"
                    subtitle="Alquimia natural para sostener tu proceso de evolución y bienestar diario."
                />

                <div className="apothecary-layout">
                    {/* Sidebar Filters */}
                    <aside className="filter-sidebar">
                        <div className="glass-panel" style={{ padding: '2rem', borderRadius: '24px', position: 'sticky', top: '100px', backgroundColor: 'white' }}>
                            <h4 className="font-display" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-obsidian)' }}>
                                <Filter size={20} /> Categorías
                            </h4>
                            <ul className="filter-list">
                                {[
                                    { label: 'Todos', value: 'all' },
                                    { label: 'Kaisen (Hongos)', value: 'Kaisen' },
                                    { label: 'Mevak (Sensorial)', value: 'Mevak' }
                                ].map(f => (
                                    <li
                                        key={f.value}
                                        onClick={() => setFilter(f.value)}
                                        style={{
                                            cursor: 'pointer', padding: '0.75rem 1rem', borderRadius: '12px',
                                            transition: 'all 0.3s',
                                            backgroundColor: (filter === f.value) ? 'var(--color-moss-core)' : 'transparent',
                                            color: (filter === f.value) ? 'white' : 'var(--color-text-main)',
                                            fontWeight: (filter === f.value) ? '600' : '400'
                                        }}
                                    >
                                        {f.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="product-grid">
                        {products
                            .filter(p => filter === 'all' || p.type === filter)
                            .map((p, i) => (
                                <ProductCard
                                    key={i}
                                    title={p.title}
                                    price={p.price}
                                    image={p.image}
                                    tag={p.tag}
                                    role={p.role} // Pass role if needed for button logic
                                />
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
           gap: 0.5rem;
           overflow-x: auto;
           padding-bottom: 0.5rem; 
         }
         
         @media (min-width: 768px) {
           .apothecary-layout {
             grid-template-columns: 280px 1fr;
             gap: 4rem;
           }
           .filter-list {
             flex-direction: column;
             gap: 0.5rem;
             border-bottom: none;
           }
           .product-grid {
             grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
             gap: 2.5rem;
           }
         }
       `}</style>
        </div>
    );
};

export default Shop;
