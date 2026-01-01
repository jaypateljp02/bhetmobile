import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import TrendingProducts from '../components/TrendingProducts';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function Home() {
    return (
        <div className="min-h-screen bg-theme-background text-theme-text font-poppins">
            <Navbar />
            <Hero />
            <Stats />
            <TrendingProducts />
            <Services />
            <Reviews />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default Home;
