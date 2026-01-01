import React from 'react';
import { Star, Award, Zap, Truck } from 'lucide-react';

const Stats = () => {
    const stats = [
        { value: "4.4", icon: Star, label: "160+ Google Reviews", color: "text-yellow-500" },
        { value: "Top", icon: Award, label: "Brands Dealer", color: "text-theme-primary" },
        { value: "100%", icon: Zap, label: "Genuine Parts", color: "text-green-500" },
        { value: "Fast", icon: Truck, label: "Delivery & Pickup", color: "text-blue-500" }
    ];

    return (
        <section className="py-12 border-b" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="group">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <stat.icon className={`${stat.color}`} size={24} />
                                <span className="text-3xl font-bold text-theme-text">{stat.value}</span>
                            </div>
                            <div className="text-sm text-theme-text opacity-60">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
