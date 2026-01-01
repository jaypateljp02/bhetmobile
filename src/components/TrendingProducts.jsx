import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, MessageCircle, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';

const TrendingProducts = () => {
    const { getTrendingProducts, loading } = useApp();
    const trendingProducts = getTrendingProducts ? getTrendingProducts() : [];

    const handleWhatsAppInquiry = (productName) => {
        const message = encodeURIComponent(`Hi! I'm interested in ${productName}. Can you share more details?`);
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <section id="products" className="py-20 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="text-theme-primary" size={24} />
                            <span className="text-theme-primary font-semibold text-sm uppercase tracking-wider">Hot Right Now</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-theme-text">
                            Trending Phones 🔥
                        </h2>
                        <p className="text-theme-text opacity-60 mt-2">
                            Our most popular smartphones this week
                        </p>
                    </div>
                    <Link
                        to="/products"
                        className="flex items-center gap-2 text-theme-primary hover:text-theme-accent transition mt-4 md:mt-0 font-medium"
                    >
                        View All Products
                        <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Products Grid */}
                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block w-12 h-12 border-4 border-theme-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : trendingProducts.length === 0 ? (
                    <div className="text-center py-12 card-theme rounded-2xl">
                        <ShoppingBag size={48} className="mx-auto mb-4 text-theme-primary opacity-50" />
                        <p className="text-theme-text opacity-60">No trending products yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trendingProducts.map((product) => (
                            <div
                                key={product.id}
                                className="card-theme rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 group"
                            >
                                <div className="aspect-square p-4 relative" style={{ backgroundColor: 'var(--color-secondary)' }}>
                                    {product.badge && (
                                        <span
                                            className="absolute top-3 left-3 text-white text-xs px-3 py-1 rounded-full font-medium"
                                            style={{ backgroundColor: 'var(--color-primary)' }}
                                        >
                                            {product.badge}
                                        </span>
                                    )}
                                    <span className="absolute top-3 right-3 text-2xl">🔥</span>
                                    {product.image_url ? (
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <ShoppingBag size={64} className="text-theme-primary opacity-30" />
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-theme-text text-lg">{product.name}</h3>
                                    <p className="text-theme-text opacity-60 text-sm">{product.description}</p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-theme-primary font-bold text-lg">{product.price}</span>
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

                {/* View More CTA */}
                <div className="text-center mt-12">
                    <Link
                        to="/products"
                        className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition"
                    >
                        Explore All Mobiles
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;
