import React from 'react';

const Stats = () => {
    const stats = [
        { value: "4.4", suffix: <span className="text-yellow-500 text-xl">★</span>, label: "160+ Google Reviews" },
        { value: "Top", suffix: "", label: "Brands Dealer" },
        { value: "100%", suffix: "", label: "Genuine Parts" },
        { value: "Fast", suffix: "", label: "Delivery & Pickup" }
    ];

    return (
        <section className="bg-white py-12 border-b">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-3xl font-bold text-gray-900">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
