import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Services />
            <Testimonials />
            <Cta />
        </>
    );
};

export default Home;
