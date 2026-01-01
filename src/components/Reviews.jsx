import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            name: "Danish Borkar",
            text: "Among the many mobile stores in Ratnagiri, Bhet Mobile is in a class of its own. I consistently receive the best offer price.",
            rating: 5
        },
        {
            name: "Swapnil Kadam",
            text: "Specially thanks to Adhish sir. Best in town for shopping of mobile and accessories.",
            rating: 5
        },
        {
            name: "Saumitra Shinde",
            text: "Purchased Samsung S24 Ultra. Extremely satisfied with both the product and the service.",
            rating: 5
        }
    ];

    return (
        <section id="reviews" className="py-20" style={{ backgroundColor: 'var(--color-secondary)' }}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase"
                        style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                    >
                        <Star size={14} />
                        Customer Reviews
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-theme-text">
                        What Our Customers Say
                    </h2>
                    <p className="text-theme-text opacity-60 mt-2">
                        Real reviews from our happy customers
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="card-theme p-8 rounded-2xl relative hover:scale-105 transition-transform"
                        >
                            <Quote
                                className="absolute top-4 right-4 opacity-20"
                                size={48}
                                style={{ color: 'var(--color-primary)' }}
                            />
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                            <p className="text-theme-text opacity-80 italic mb-6 relative z-10">
                                "{review.text}"
                            </p>
                            <div className="font-bold text-theme-primary">
                                — {review.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Google Reviews Link */}
                <div className="text-center mt-12">
                    <a
                        href="https://maps.app.goo.gl/rPr4Kj36goW3KxH99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-theme-primary hover:text-theme-accent transition font-medium"
                    >
                        See all 160+ reviews on Google
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
