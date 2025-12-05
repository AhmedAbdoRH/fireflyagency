import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Catalog: React.FC = () => {
    const { catalogName } = useParams<{ catalogName: string }>();

    return (
        <div className="min-h-screen bg-firefly-dark text-white font-sans selection:bg-firefly-yellow selection:text-firefly-dark overflow-x-hidden flex flex-col">
            <Header currentPage="catalog" onNavigate={() => { }} />
            <main className="flex-grow flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Catalog: {catalogName}</h1>
                    <p className="text-gray-400">This is the catalog page for {catalogName}. Content coming soon.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Catalog;
