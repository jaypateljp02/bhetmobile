import React from 'react';

const Footer = () => {
    return (
        <footer id="location" className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Bhet Mobile</h3>
                        <p className="text-gray-400 mb-6">
                            Serving Ratnagiri with the best mobile technology and service.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <i className="fas fa-map-marker-alt mt-1 text-brand"></i>
                                <p>
                                    New Address: Navkar Enclave, Mazgaon Road,<br />
                                    Beside Malabar Gold & Diamond,<br />
                                    Maruti Mandir, Ratnagiri - 415612
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="fas fa-clock text-brand"></i>
                                <p>Open 10:00 AM - 9:00 PM</p>
                            </div>
                            <div className="mt-6 flex gap-4">
                                <a href="https://maps.app.goo.gl/rPr4Kj36goW3KxH99" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-white transition">
                                    <i className="fas fa-map-marked-alt text-2xl"></i> Support Link
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg flex items-center justify-center h-64 overflow-hidden relative">
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
                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    &copy; 2025 Bhet Mobile Ratnagiri. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
