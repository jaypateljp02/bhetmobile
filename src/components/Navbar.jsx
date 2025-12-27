import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-20 bg-red-600 rounded-full flex items-center justify-center text-white font-bold italic border-2 border-yellow-400 shadow-sm">
                        भेट
                    </div>
                    <span className="text-xl font-bold tracking-tight">Bhet Mobile</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-sm font-semibold">
                    <a href="#home" className="hover:text-red-600 transition">Home</a>
                    <a href="#products" className="hover:text-red-600 transition">Mobiles</a>
                    <a href="#services" className="hover:text-red-600 transition">Repairs</a>
                    <a href="#reviews" className="hover:text-red-600 transition">Reviews</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 hover:text-red-600 transition"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                </button>

                <a href="tel:+911234567890" className="hidden md:flex brand-gradient text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 text-sm items-center">
                    <i className="fas fa-phone-alt mr-2"></i> Call Now
                </a>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 absolute w-full shadow-lg">
                    <div className="flex flex-col space-y-4 font-semibold">
                        <a href="#home" className="hover:text-red-600 transition" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#products" className="hover:text-red-600 transition" onClick={() => setIsMenuOpen(false)}>Mobiles</a>
                        <a href="#services" className="hover:text-red-600 transition" onClick={() => setIsMenuOpen(false)}>Repairs</a>
                        <a href="#reviews" className="hover:text-red-600 transition" onClick={() => setIsMenuOpen(false)}>Reviews</a>
                        <a href="tel:+911234567890" className="brand-gradient text-white px-5 py-2 rounded-full text-center shadow-md w-full inline-block">
                            Call Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
