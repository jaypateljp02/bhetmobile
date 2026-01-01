import React, { useState } from 'react';
import { Plus, Edit, Trash2, Image as ImageIcon, X, Save, TrendingUp } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const ManageProducts = () => {
    const { products, addProduct, updateProduct, deleteProduct } = useApp();
    const productList = products || [];
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        badge: 'New Arrival',
        category: 'phone',
        image_url: '',
        is_trending: false
    });

    const resetForm = () => {
        setFormData({
            name: '',
            description: '',
            price: '',
            badge: 'New Arrival',
            category: 'phone',
            image_url: '',
            is_trending: false
        });
        setIsAdding(false);
        setEditingId(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingId) {
            await updateProduct(editingId, formData);
        } else {
            await addProduct(formData);
        }
        resetForm();
    };

    const handleEdit = (product) => {
        setFormData({
            name: product.name,
            description: product.description || '',
            price: product.price,
            badge: product.badge || 'New Arrival',
            category: product.category || 'phone',
            image_url: product.image_url || '',
            is_trending: product.is_trending || false
        });
        setEditingId(product.id);
        setIsAdding(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await deleteProduct(id);
        }
    };

    const badges = ['New Arrival', 'Best Seller', 'Hot Deal', 'Limited Stock', 'Trending'];
    const categories = [
        { value: 'phone', label: 'Mobile Phone' },
        { value: 'accessory', label: 'Accessory' }
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>Products</h1>
                    <p className="text-sm mt-1 opacity-60" style={{ color: 'var(--color-text)' }}>
                        {products?.length || 0} products • {products?.filter(p => p.is_trending)?.length || 0} trending
                    </p>
                </div>
                <button
                    onClick={() => { resetForm(); setIsAdding(!isAdding); }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                    {isAdding ? (
                        <>
                            <X size={20} />
                            <span>Cancel</span>
                        </>
                    ) : (
                        <>
                            <Plus size={20} />
                            <span>Add Product</span>
                        </>
                    )}
                </button>
            </div>

            {isAdding && (
                <div className="p-6 rounded-2xl shadow-lg border animate-fade-in-down" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
                    <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                        {editingId ? 'Edit Product' : 'Add New Product'}
                    </h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>Product Name *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900"
                                    placeholder="e.g. iPhone 15 Pro"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>Description (Specs)</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900"
                                    placeholder="e.g. 256GB • Titanium Blue"
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>Price *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900"
                                    placeholder="e.g. ₹1,34,900 or Ask for Deal"
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>Category *</label>
                                <select
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900"
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                >
                                    {categories.map(cat => (
                                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>Badge</label>
                                <select
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900"
                                    value={formData.badge}
                                    onChange={e => setFormData({ ...formData, badge: e.target.value })}
                                >
                                    {badges.map(badge => (
                                        <option key={badge} value={badge}>{badge}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>Image URL</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900"
                                    placeholder="https://..."
                                    value={formData.image_url}
                                    onChange={e => setFormData({ ...formData, image_url: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="md:col-span-2 flex items-center justify-between">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 rounded focus:ring-blue-500"
                                    checked={formData.is_trending}
                                    onChange={e => setFormData({ ...formData, is_trending: e.target.checked })}
                                />
                                <span className="flex items-center gap-2 text-gray-700">
                                    <TrendingUp size={18} className="text-orange-500" />
                                    <span style={{ color: 'var(--color-text)' }}>Show in Trending Section (Homepage)</span>
                                </span>
                            </label>
                            <button
                                type="submit"
                                className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
                            >
                                <Save size={18} />
                                {editingId ? 'Update Product' : 'Save Product'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="rounded-2xl shadow-sm border overflow-hidden" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-xs uppercase tracking-wider" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                            <tr>
                                <th className="px-6 py-4">Product</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Badge</th>
                                <th className="px-6 py-4">Trending</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {productList.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center opacity-60" style={{ color: 'var(--color-text)' }}>
                                        No products yet. Add your first product!
                                    </td>
                                </tr>
                            ) : (
                                productList.map((product) => (
                                    <tr key={product.id} className="transition-colors hover:bg-black/5">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                                                    {product.image_url ? (
                                                        <img src={product.image_url} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <ImageIcon size={20} className="text-gray-400" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-medium" style={{ color: 'var(--color-text)' }}>{product.name}</p>
                                                    <p className="text-xs opacity-60" style={{ color: 'var(--color-text)' }}>{product.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 text-xs rounded-full font-medium ${product.category === 'phone'
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'bg-purple-50 text-purple-600'
                                                }`}>
                                                {product.category === 'phone' ? '📱 Phone' : '🎧 Accessory'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm" style={{ color: 'var(--color-text)' }}>{product.price}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full font-medium">
                                                {product.badge}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {product.is_trending ? (
                                                <span className="text-orange-500">🔥 Yes</span>
                                            ) : (
                                                <span className="text-gray-400">No</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right space-x-2">
                                            <button
                                                onClick={() => handleEdit(product)}
                                                className="text-gray-400 hover:text-blue-600 transition-colors p-2"
                                            >
                                                <Edit size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="text-gray-400 hover:text-red-600 transition-colors p-2"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;
