import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            name: "Danish Borkar",
            text: "Among the many mobile stores in Ratnagiri, Bhet Mobile is in a class of its own. I consistently receive the best offer price."
        },
        {
            name: "Swapnil Kadam",
            text: "Specially thanks to Adhish sir. Best in town for shopping of mobile and accessories."
        },
        {
            name: "Saumitra Shinde",
            text: "Purchased Samsung S24 Ultra. Extremely satisfied with both the product and the service."
        }
    ];

    return (
        <section id="reviews" className="py-20 bg-orange-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-yellow-400 text-sm mb-4">★★★★★</div>
                            <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                            <div className="font-bold text-gray-900">- {review.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
