import React from 'react';

const Services = () => {
    const servicesList = [
        "Screen Replacement",
        "Battery Upgrade",
        "Software Troubleshooting"
    ];

    const features = [
        { icon: "fa-tools", title: "Fast Service" },
        { icon: "fa-award", title: "Warranty" },
        { icon: "fa-money-bill-wave", title: "Best Price" },
        { icon: "fa-user-shield", title: "Trusted Staff" }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">Expert Mobile Repair</h2>
                        <p className="text-gray-600 mb-6">
                            Broken screen? Battery issues? Our qualified staff provides quick and reliable repairs for all major brands.
                        </p>
                        <ul className="space-y-4">
                            {servicesList.map((service, index) => (
                                <li key={index} className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i> {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
                                <i className={`fas ${feature.icon} text-3xl text-brand mb-3`}></i>
                                <h4 className="font-bold">{feature.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
