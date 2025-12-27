import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
    return (
        <div className="bg-gray-50 text-gray-800 font-poppins">
            <Navbar />
            <Hero />
            <Stats />
            <Products />
            <Services />
            <Reviews />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
