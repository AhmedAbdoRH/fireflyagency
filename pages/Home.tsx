import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Cta from '../components/Cta';
import FounderSection from '../components/FounderSection';

interface HomeProps {
    onShowReel?: () => void;
}

const Home: React.FC<HomeProps> = ({ onShowReel }) => {
    return (
        <>
            <Hero onShowReel={onShowReel} />
            <Services />
            <Partners />
            <Cta />
            <FounderSection />
        </>
    );
};

export default Home;
