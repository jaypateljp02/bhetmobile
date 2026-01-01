import React, { useEffect } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Smartphone, LogOut, Home, Tag, Palette } from 'lucide-react';

const AdminLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin');
    };

    const sidebarItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
        { icon: Smartphone, label: 'Products', path: '/admin/products' },
        { icon: Tag, label: 'Offers', path: '/admin/offers' },
    ];

    return (
        <div className="min-h-screen flex" style={{ backgroundColor: 'var(--color-background)' }}>
            {/* Sidebar */}
            <aside
                className="w-64 hidden md:flex flex-col border-r"
                style={{
                    backgroundColor: 'var(--color-card)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)'
                }}
            >
                <div className="p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                    <h1 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>Bhet Mobile</h1>
                    <p className="text-xs opacity-70">Admin Panel</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {sidebarItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all`
                            }
                            style={({ isActive }) => ({
                                backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                                color: isActive ? 'white' : 'var(--color-text)',
                                opacity: isActive ? 1 : 0.7
                            })}
                        >
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t space-y-2" style={{ borderColor: 'var(--color-border)' }}>
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl w-full transition-all hover:opacity-100 opacity-70"
                        style={{ color: 'var(--color-text)' }}
                    >
                        <Home size={20} />
                        <span>View Website</span>
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 w-full transition-all"
                    >
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center">
                    <h1 className="font-bold">Bhet Mobile Admin</h1>
                    <button onClick={handleLogout}><LogOut size={20} /></button>
                </div>
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
