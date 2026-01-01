import React from 'react';
import { Wrench, CheckCircle, Zap, Award, DollarSign, Shield, MessageCircle } from 'lucide-react';

const Services = () => {
    const servicesList = [
        { name: "Screen Replacement", icon: Wrench },
        { name: "Battery Upgrade", icon: Zap },
        { name: "Software Troubleshooting", icon: CheckCircle }
    ];

    const features = [
        { icon: Zap, title: "Fast Service", desc: "Same day repairs" },
        { icon: Award, title: "Warranty", desc: "90 days coverage" },
        { icon: DollarSign, title: "Best Price", desc: "Guaranteed" },
        { icon: Shield, title: "Trusted Staff", desc: "Expert technicians" }
    ];

    const handleWhatsAppRepair = () => {
        const message = encodeURIComponent("Hi! I need help with mobile repair. Can you assist?");
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <section id="services" className="py-20" style={{ backgroundColor: 'var(--color-background)' }}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <span
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase"
                            style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                        >
                            <Wrench size={14} />
                            Repair Center
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-text">
                            Expert Mobile Repair
                        </h2>
                        <p className="text-theme-text opacity-60 mb-8">
                            Broken screen? Battery issues? Our qualified staff provides quick and reliable repairs for all major brands including Apple, Samsung, OnePlus, Vivo, and more.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {servicesList.map((service, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: 'var(--color-primary)' }}
                                    >
                                        <CheckCircle size={16} className="text-white" />
                                    </div>
                                    <span className="text-theme-text font-medium">{service.name}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleWhatsAppRepair}
                            className="btn-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                        >
                            <MessageCircle size={20} />
                            Book Repair on WhatsApp
                        </button>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="card-theme p-6 rounded-2xl text-center hover:scale-105 transition-transform"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: 'var(--color-primary)' }}
                                >
                                    <feature.icon size={24} className="text-white" />
                                </div>
                                <h4 className="font-bold text-theme-text mb-1">{feature.title}</h4>
                                <p className="text-sm text-theme-text opacity-60">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
