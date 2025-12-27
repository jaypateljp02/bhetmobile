import React from 'react';

const Products = () => {
    const products = [
        {
            name: "Apple iPhone 15",
            desc: "128GB • All Colors Available",
            price: "Ask for Deal",
            badge: "Best Seller",
            badgeColor: "blue",
            image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Samsung S24 Ultra",
            desc: "AI Features • Titanium Yellow",
            price: "Ask for Deal",
            badge: "New Arrival",
            badgeColor: "green",
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Premium Accessories",
            desc: "Covers, Chargers & Airpods",
            price: "From ₹499",
            badge: "Accessories",
            badgeColor: "purple",
            icon: "fa-headphones"
        }
    ];

    const getBadgeStyle = (color) => {
        const styles = {
            blue: "text-blue-600 bg-blue-100",
            green: "text-green-600 bg-green-100",
            purple: "text-purple-600 bg-purple-100"
        };
        return styles[color] || styles.blue;
    };

    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
                    <p className="text-gray-600">Latest arrivals available at Bhet Mobile</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
                            <div className="h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-48 object-contain group-hover:scale-110 transition duration-300"
                                    />
                                ) : (
                                    <i className={`fas ${product.icon} text-6xl text-gray-300`}></i>
                                )}
                            </div>
                            <div className="p-6">
                                <span className={`text-xs font-bold px-2 py-1 rounded ${getBadgeStyle(product.badgeColor)}`}>
                                    {product.badge}
                                </span>
                                <h3 className="text-xl font-bold mt-2">{product.name}</h3>
                                <p className="text-gray-500 text-sm mt-1">{product.desc}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                                    <button className="text-brand font-semibold text-sm">Details →</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
