import React from 'react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center gap-2 group"
        >
            <i className="fab fa-whatsapp text-2xl"></i>
            <span className="font-bold hidden md:inline group-hover:inline transition-all duration-300">Chat with us</span>
        </a>
    );
};

export default WhatsAppButton;
