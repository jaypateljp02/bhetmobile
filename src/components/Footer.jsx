import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Star } from 'lucide-react';

const Footer = () => {
    const whatsappNumber = "919876543210";
    const phoneNumber = "+911234567890";
    const mapsUrl = "https://maps.app.goo.gl/rPr4Kj36goW3KxH99";

    return (
        <footer id="location" className="pt-12 pb-6" style={{ backgroundColor: 'var(--color-secondary)' }}>
            <div className="container mx-auto px-4">

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                    {/* Left - Store Info */}
                    <div>
                        {/* Logo & Name */}
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold italic text-lg"
                                style={{ backgroundColor: 'var(--color-primary)' }}
                            >
                                भेट
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-theme-text">Bhet Mobile</h3>
                                <p className="text-theme-text opacity-50 text-xs">Serving since 1999</p>
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-card)' }}>
                                <MapPin className="text-theme-primary mt-0.5 flex-shrink-0" size={18} />
                                <div className="text-sm">
                                    <p className="text-theme-text font-medium">Navkar Enclave, Mazgaon Road</p>
                                    <p className="text-theme-text opacity-60">Beside Malabar Gold, Maruti Mandir</p>
                                    <p className="text-theme-text opacity-60">Ratnagiri - 415612</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-card)' }}>
                                <Clock className="text-theme-primary flex-shrink-0" size={18} />
                                <div className="text-sm">
                                    <p className="text-theme-text font-medium">Open Daily</p>
                                    <p className="text-theme-text opacity-60">10:00 AM - 9:00 PM</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-card)' }}>
                                <Star className="text-yellow-500 flex-shrink-0" size={18} />
                                <div className="text-sm">
                                    <p className="text-theme-text font-medium">4.4 ★ Rating</p>
                                    <p className="text-theme-text opacity-60">160+ Google Reviews</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-2">
                            <a
                                href={`tel:${phoneNumber}`}
                                className="btn-primary px-4 py-2.5 rounded-lg text-sm flex items-center gap-2"
                            >
                                <Phone size={16} />
                                Call Now
                            </a>
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2.5 rounded-lg text-sm flex items-center gap-2 font-medium"
                                style={{ backgroundColor: '#25D366', color: 'white' }}
                            >
                                <MessageCircle size={16} />
                                WhatsApp
                            </a>
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2.5 rounded-lg text-sm flex items-center gap-2 font-medium"
                                style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-text)' }}
                            >
                                <Navigation size={16} />
                                Directions
                            </a>
                        </div>
                    </div>

                    {/* Right - Map */}
                    <div className="rounded-xl overflow-hidden h-72" style={{ backgroundColor: 'var(--color-card)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.623412574044!2d73.311653!3d16.989045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0d0059e0c525%3A0x6790e03e707e4d5!2sMalabar%20Gold%20and%20Diamonds%20-%20Ratnagiri!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bhet Mobile Location"
                        ></iframe>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="flex flex-wrap justify-center gap-4 py-4 border-t text-sm" style={{ borderColor: 'var(--color-border)' }}>
                    <Link to="/" className="text-theme-text opacity-60 hover:opacity-100 hover:text-theme-primary transition">Home</Link>
                    <Link to="/products" className="text-theme-text opacity-60 hover:opacity-100 hover:text-theme-primary transition">Mobiles</Link>
                    <Link to="/accessories" className="text-theme-text opacity-60 hover:opacity-100 hover:text-theme-primary transition">Accessories</Link>
                    <a href="#services" className="text-theme-text opacity-60 hover:opacity-100 hover:text-theme-primary transition">Repairs</a>
                </div>

                {/* Copyright */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 text-xs">
                    <p className="text-theme-text opacity-40">© 2026 Bhet Mobile Ratnagiri • Serving since 1999</p>
                    <Link to="/admin" className="text-theme-text opacity-20 hover:opacity-50 transition">Admin</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
