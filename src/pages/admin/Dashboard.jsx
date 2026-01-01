import React from 'react';
import { Smartphone, Users, TrendingUp, Palette, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

const Dashboard = () => {
    const { currentTheme, themes, changeTheme, products, offers } = useApp();

    // Null safety
    const productCount = products?.length || 0;
    const offerCount = offers?.length || 0;
    const trendingCount = products?.filter(p => p.is_trending)?.length || 0;
    const themeEmoji = currentTheme?.emoji || '🌙';
    const themeName = currentTheme?.name || 'Default';
    const themeList = themes || [];

    const stats = [
        {
            title: 'Total Products',
            value: productCount.toString(),
            change: 'Live',
            icon: Smartphone,
            color: 'bg-blue-500',
        },
        {
            title: 'Active Offers',
            value: offerCount.toString(),
            change: 'Running',
            icon: TrendingUp,
            color: 'bg-green-500',
        },
        {
            title: 'Trending Items',
            value: trendingCount.toString(),
            change: 'Featured',
            icon: Users,
            color: 'bg-purple-500',
        },
        {
            title: 'Current Theme',
            value: themeEmoji,
            change: themeName,
            icon: Palette,
            color: 'bg-orange-500',
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>Dashboard</h1>
                <p className="mt-1 opacity-60" style={{ color: 'var(--color-text)' }}>Welcome back to Bhet Mobile control center.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
                        <div className="flex justify-between items-start mb-4">
                            <div className={`${stat.color} bg-opacity-10 p-3 rounded-xl`}>
                                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">{stat.change}</span>
                        </div>
                        <h3 className="font-medium text-sm opacity-60" style={{ color: 'var(--color-text)' }}>{stat.title}</h3>
                        <p className="text-2xl font-bold mt-1" style={{ color: 'var(--color-text)' }}>{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Theme Switcher Section */}
            <div className="p-6 rounded-2xl shadow-sm border" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
                            <Palette className="w-5 h-5" />
                            Theme Switcher
                        </h2>
                        <p className="text-sm mt-1 opacity-60" style={{ color: 'var(--color-text)' }}>Click on any theme to instantly change your website's look</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                        <span className="text-2xl">{themeEmoji}</span>
                        <span className="font-medium text-gray-700">{themeName}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {themeList.map((theme) => (
                        <button
                            key={theme.id}
                            onClick={() => changeTheme(theme.id)}
                            className={`relative p-4 rounded-xl border-2 transition-all hover:scale-105 ${currentTheme?.id === theme.id
                                ? 'border-blue-500 shadow-lg'
                                : 'border-gray-200 hover:border-gray-300'
                                }`}
                            style={{
                                background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.card} 100%)`
                            }}
                        >
                            {currentTheme?.id === theme.id && (
                                <div className="absolute -top-2 -right-2 bg-blue-500 text-white p-1 rounded-full">
                                    <Check size={14} />
                                </div>
                            )}
                            <div className="text-center">
                                <span className="text-3xl block mb-2">{theme.emoji}</span>
                                <p className="text-xs font-medium" style={{ color: theme.colors.text }}>
                                    {theme.name}
                                </p>
                            </div>
                            {/* Color Preview Dots */}
                            <div className="flex justify-center gap-1 mt-3">
                                <div
                                    className="w-3 h-3 rounded-full border border-white/30"
                                    style={{ backgroundColor: theme.colors.primary }}
                                />
                                <div
                                    className="w-3 h-3 rounded-full border border-white/30"
                                    style={{ backgroundColor: theme.colors.accent }}
                                />
                                <div
                                    className="w-3 h-3 rounded-full border border-white/30"
                                    style={{ backgroundColor: theme.colors.secondary }}
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-2xl shadow-sm border" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
                <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text)' }}>Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link to="/admin/products" className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                        <Smartphone className="w-8 h-8 text-blue-600" />
                        <div>
                            <p className="font-medium text-gray-800">Manage Products</p>
                            <p className="text-xs text-gray-500">Add, edit or remove products</p>
                        </div>
                    </Link>
                    <Link to="/admin/offers" className="flex items-center gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                        <TrendingUp className="w-8 h-8 text-green-600" />
                        <div>
                            <p className="font-medium text-gray-800">Manage Offers</p>
                            <p className="text-xs text-gray-500">Create promotional banners</p>
                        </div>
                    </Link>
                    <Link to="/" target="_blank" className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                        <Users className="w-8 h-8 text-purple-600" />
                        <div>
                            <p className="font-medium text-gray-800">View Website</p>
                            <p className="text-xs text-gray-500">See your live site</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
