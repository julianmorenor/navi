import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Shop from './pages/Shop'; // Renaming/New
import Experiences from './pages/Experiences';
import Psilocybin from './pages/Psilocybin';
import Workshops from './pages/Workshops';
import DMT from './pages/DMT';
import Constellations from './pages/Constellations';
import Allies from './pages/Allies';
import Philosophy from './pages/Philosophy';
import { CartProvider } from './context/CartContext';

// Placeholder blank pages for routes not completely built yet to prevent crashes
const BlankPage = ({ title }) => (
  <div style={{ paddingTop: '150px', minHeight: '60vh', textAlign: 'center' }}>
    <h1 className="text-cyan" style={{ fontSize: '3rem' }}>{title}</h1>
    <p>Próximamente...</p>
  </div>
);

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <CartSidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} /> {/* Boticario */}
            <Route path="/experiences" element={<Experiences />} /> {/* Vivencias Main */}
            <Route path="/experiences/psilocybin" element={<Psilocybin />} />
            <Route path="/experiences/workshops" element={<Workshops />} />
            <Route path="/experiences/dmt" element={<DMT />} />
            <Route path="/experiences/constellations" element={<Constellations />} />
            <Route path="/allies" element={<Allies />} /> {/* Sinergias */}
            <Route path="/philosophy" element={<Philosophy />} /> {/* Manifiesto */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider >
  );
};

export default App;
