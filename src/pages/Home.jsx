import React from 'react';
import Hero from '../components/Hero';
import ThePath from '../components/ThePath';
import PillarsNavi from '../components/PillarsNavi';
import Testimonials from '../components/Testimonials';
import Manifesto from '../components/Manifesto';

const Home = () => {
    return (
        <>
            <Hero />
            <ThePath />
            <PillarsNavi />
            <Testimonials />
            <Manifesto />
        </>
    );
};

export default Home;
