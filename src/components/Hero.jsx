import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Hero = () => {
    const { offers } = useApp();
    const activeOffer = offers?.find(o => o.is_active);

    return (
        <header id="home" className="relative pt-28 pb-16 lg:pt-40 lg:pb-28 overflow-hidden" style={{ backgroundColor: 'var(--color-secondary)' }}>
            {/* Background Glow */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: 'var(--color-primary)' }}
            />
            <div
                className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: 'var(--color-accent)' }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-12">
                        {/* Trust Badge */}
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-4 tracking-wide uppercase"
                            style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                        >
                            <ShieldCheck size={14} />
                            Trusted Since 1999
                        </span>

                        {/* Active Offer Banner */}
                        {activeOffer && (
                            <div
                                className="mb-6 p-4 rounded-xl border-2 border-dashed"
                                style={{ borderColor: 'var(--color-accent)', backgroundColor: 'var(--color-card)' }}
                            >
                                <p className="text-theme-accent font-bold text-lg">{activeOffer.title}</p>
                                <p className="text-theme-primary text-2xl font-bold">{activeOffer.discount}</p>
                            </div>
                        )}

                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 text-theme-text">
                            The Best Mobile Deals in <span className="text-theme-primary">Ratnagiri</span>
                        </h1>
                        <p className="text-base sm:text-lg mb-6 text-theme-text opacity-70">
                            Authorized dealers for Samsung, Apple, Vivo & More. Expert repairs and genuine accessories at the best prices in town.
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-theme-text opacity-70 text-sm">4.4 Rating • 160+ Reviews</span>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Link
                                to="/products"
                                className="btn-primary px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition flex items-center gap-2"
                            >
                                View Phones
                                <ArrowRight size={18} />
                            </Link>
                            <a
                                href="#location"
                                className="px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 border-2"
                                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                            >
                                <MapPin size={18} />
                                Visit Store
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
                        <div
                            className="rounded-full w-80 h-80 absolute -z-10 blur-3xl opacity-30 right-0"
                            style={{ backgroundColor: 'var(--color-accent)' }}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Latest Smartphone"
                            className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500 w-full max-w-md mx-auto"
                            style={{ boxShadow: `0 25px 50px -12px var(--color-primary)` }}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
