import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FlyingButterfly from './components/FlyingButterfly';
import FloatingButton from './components/FloatingButton';
import Home from './pages/Home';
import About from './pages/About';
import ShowReel from './pages/ShowReel';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';

const MainSite: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <div className="min-h-screen bg-firefly-dark text-white font-sans selection:bg-firefly-yellow selection:text-firefly-dark overflow-x-hidden">
            <FlyingButterfly />
            <FloatingButton />

            <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <Header currentPage={currentPage} onNavigate={setCurrentPage} />
                <main>
                    {currentPage === 'home' && <Home onShowReel={() => setCurrentPage('showreel')} />}
                    {currentPage === 'about' && <About />}
                    {currentPage === 'showreel' && <ShowReel onNavigateHome={() => setCurrentPage('home')} />}
                    {currentPage === 'contact' && <Contact />}
                </main>

                <Footer />
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/:catalogName" element={<Catalog />} />
                <Route path="/" element={<MainSite />} />
            </Routes>
        </Router>
    );
};

export default App;