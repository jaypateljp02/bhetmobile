import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Smartphone, Headphones, Home, Wrench, Star, MapPin } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navLinks = [
        { name: 'Home', href: '/', icon: Home, isRoute: true },
        { name: 'Mobiles', href: '/products', icon: Smartphone, isRoute: true },
        { name: 'Accessories', href: '/accessories', icon: Headphones, isRoute: true },
        { name: 'Repairs', href: isHomePage ? '#services' : '/#services', icon: Wrench, isRoute: false },
        { name: 'Contact', href: isHomePage ? '#location' : '/#location', icon: MapPin, isRoute: false },
    ];

    const handleLinkClick = (link) => {
        setIsMenuOpen(false);
        if (!link.isRoute && !isHomePage) {
            // Navigate to home page first, then scroll
            window.location.href = link.href;
        }
    };

    return (
        <nav className="fixed w-full z-50 transition-all" style={{ backgroundColor: 'var(--color-card)', borderBottom: '1px solid var(--color-border)' }}>
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <div
                        className="h-9 w-16 rounded-full flex items-center justify-center text-white font-bold italic border-2 shadow-sm text-sm"
                        style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-accent)' }}
                    >
                        भेट
                    </div>
                    <span className="text-lg font-bold tracking-tight text-theme-text hidden sm:block">Bhet Mobile</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-5 text-sm font-semibold">
                    {navLinks.map((link) => (
                        link.isRoute ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="flex items-center gap-2 text-theme-text hover:text-theme-primary transition"
                            >
                                <link.icon size={16} />
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-2 text-theme-text hover:text-theme-primary transition"
                            >
                                <link.icon size={16} />
                                {link.name}
                            </a>
                        )
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {/* Call Button - Always visible */}
                    <a
                        href="tel:+911234567890"
                        className="btn-primary px-4 py-2 rounded-full font-semibold shadow-lg text-sm flex items-center gap-2"
                    >
                        <Phone size={16} />
                        <span className="hidden sm:inline">Call Now</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-theme-text hover:text-theme-primary transition p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div
                    className="lg:hidden py-4 px-4 absolute w-full shadow-lg animate-fade-in-down"
                    style={{ backgroundColor: 'var(--color-card)', borderTop: '1px solid var(--color-border)' }}
                >
                    <div className="flex flex-col space-y-1">
                        {navLinks.map((link) => (
                            link.isRoute ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="flex items-center gap-3 text-theme-text hover:text-theme-primary hover:bg-theme-secondary transition py-3 px-3 rounded-lg"
                                    onClick={() => handleLinkClick(link)}
                                >
                                    <link.icon size={20} />
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-3 text-theme-text hover:text-theme-primary hover:bg-theme-secondary transition py-3 px-3 rounded-lg"
                                    onClick={() => handleLinkClick(link)}
                                >
                                    <link.icon size={20} />
                                    {link.name}
                                </a>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
