import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FlyingButterfly from './components/FlyingButterfly';
import FloatingButton from './components/FloatingButton';
import Hero from './components/Hero';
import Home from './pages/Home';
import About from './pages/About';
import ShowReel from './pages/ShowReel';

const App: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <div className="min-h-screen bg-firefly-dark text-white font-sans selection:bg-firefly-yellow selection:text-firefly-dark overflow-x-hidden">
            <CustomCursor />
            <FlyingButterfly />
            <FloatingButton />

            <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <Header currentPage={currentPage} onNavigate={setCurrentPage} />
                <main>
                    {currentPage === 'home' && <Home onShowReel={() => setCurrentPage('showreel')} />}
                    {currentPage === 'about' && <About />}
                    {currentPage === 'showreel' && <ShowReel onNavigateHome={() => setCurrentPage('home')} />}
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default App;