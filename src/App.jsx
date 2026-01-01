import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import AccessoriesPage from './pages/AccessoriesPage';
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageProducts from './pages/admin/ManageProducts';
import ManageOffers from './pages/admin/ManageOffers';

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Website */}
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/accessories" element={<AccessoriesPage />} />

                {/* Admin Authentication */}
                <Route path="/admin" element={<AdminLogin />} />

                {/* Protected Admin Routes */}
                <Route element={<AdminLayout />}>
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/products" element={<ManageProducts />} />
                    <Route path="/admin/offers" element={<ManageOffers />} />
                </Route>

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;

