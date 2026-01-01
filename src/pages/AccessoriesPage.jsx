import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Headphones } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const AccessoriesPage = () => {
    const { getAccessoryProducts, loading } = useApp();
    const accessories = getAccessoryProducts();

    const handleWhatsAppInquiry = (productName) => {
        const message = encodeURIComponent(`Hi! I'm interested in ${productName}. Can you share more details?`);
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-theme-background">
            <Navbar />

            {/* Header */}
            <div className="pt-24 pb-12 px-4" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <div className="container mx-auto max-w-6xl">
                    <Link to="/" className="inline-flex items-center gap-2 text-theme-accent hover:text-theme-primary mb-4 transition-colors">
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold text-theme-text flex items-center gap-3">
                        <Headphones className="text-theme-primary" />
                        Mobile Accessories
                    </h1>
                    <p className="text-theme-text opacity-70 mt-2">
                        Covers, Chargers, Earphones, and more
                    </p>
                </div>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto max-w-6xl px-4 py-12">
                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block w-12 h-12 border-4 border-theme-primary border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-4 text-theme-text opacity-70">Loading accessories...</p>
                    </div>
                ) : accessories.length === 0 ? (
                    <div className="text-center py-20 card-theme rounded-2xl">
                        <Headphones size={64} className="mx-auto mb-4 text-theme-primary opacity-50" />
                        <p className="text-theme-text opacity-70">No accessories available yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {accessories.map((product) => (
                            <div
                                key={product.id}
                                className="card-theme rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <div className="aspect-square bg-theme-secondary p-4 relative">
                                    {product.badge && (
                                        <span className="absolute top-3 left-3 bg-theme-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                                            {product.badge}
                                        </span>
                                    )}
                                    {product.image_url ? (
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Headphones size={64} className="text-theme-primary opacity-30" />
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-theme-text text-lg">{product.name}</h3>
                                    <p className="text-theme-text opacity-60 text-sm">{product.description}</p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-theme-primary font-bold">{product.price}</span>
                                        <button
                                            onClick={() => handleWhatsAppInquiry(product.name)}
                                            className="btn-primary px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                                        >
                                            <MessageCircle size={16} />
                                            Enquire
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default AccessoriesPage;
