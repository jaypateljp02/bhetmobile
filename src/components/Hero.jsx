import React from 'react';

const Hero = () => {
    return (
        <header id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-12">
                        <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
                            Ratnagiri's Trusted Store
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                            The Best Mobile Deals in <span className="text-brand">Ratnagiri</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Authorized dealers for Samsung, Apple, Vivo & More. Expert repairs and genuine accessories at the best prices in town.
                        </p>
                        <div className="flex gap-4">
                            <a href="#products" className="brand-gradient text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:opacity-90 transition">
                                View Offers
                            </a>
                            <a href="#location" className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-bold hover:border-red-500 hover:text-red-500 transition">
                                Visit Store
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
                        <div className="bg-yellow-100 rounded-full w-96 h-96 absolute -z-10 blur-3xl opacity-50 right-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Latest Smartphone"
                            className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
