import React, { useState } from 'react';
import { Plus, Trash2, Tag, X, Save, Calendar } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const ManageOffers = () => {
    const { offers, addOffer, deleteOffer } = useApp();
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        discount: '',
        valid_until: '',
        is_active: true
    });

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            discount: '',
            valid_until: '',
            is_active: true
        });
        setIsAdding(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addOffer(formData);
        resetForm();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this offer?')) {
            await deleteOffer(id);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>Offers & Promotions</h1>
                    <p className="text-sm mt-1 opacity-60" style={{ color: 'var(--color-text)' }}>
                        {offers.length} active offers
                    </p>
                </div>
                <button
                    onClick={() => { resetForm(); setIsAdding(!isAdding); }}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                    {isAdding ? (
                        <>
                            <X size={20} />
                            <span>Cancel</span>
                        </>
                    ) : (
                        <>
                            <Plus size={20} />
                            <span>Add Offer</span>
                        </>
                    )}
                </button>
            </div>

            {isAdding && (
                <div className="p-6 rounded-2xl shadow-lg border animate-fade-in-down" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
                    <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Create New Offer</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>Offer Title *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                    placeholder="e.g. Diwali Special Sale!"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                    placeholder="e.g. Get amazing discounts on all smartphones"
                                    rows="3"
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Discount Text *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                    placeholder="e.g. Up to 30% OFF or ₹5000 OFF"
                                    value={formData.discount}
                                    onChange={e => setFormData({ ...formData, discount: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Valid Until</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                    value={formData.valid_until}
                                    onChange={e => setFormData({ ...formData, valid_until: e.target.value })}
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="is_active"
                                    className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                                    checked={formData.is_active}
                                    onChange={e => setFormData({ ...formData, is_active: e.target.checked })}
                                />
                                <label htmlFor="is_active" style={{ color: 'var(--color-text)' }}>Show on Website</label>
                            </div>
                        </div>

                        <div className="md:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                            >
                                <Save size={18} />
                                Save Offer
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Offers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.length === 0 ? (
                    <div className="col-span-full rounded-2xl shadow-sm border p-12 text-center opacity-60" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
                        <Tag size={48} className="mx-auto mb-4 opacity-50" />
                        <p>No offers yet. Create your first promotional offer!</p>
                    </div>
                ) : (
                    offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden"
                        >
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                                        {offer.is_active ? '✨ Active' : '⏸️ Paused'}
                                    </span>
                                    <button
                                        onClick={() => handleDelete(offer.id)}
                                        className="text-white/70 hover:text-white transition-colors p-1"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>

                                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                                <p className="text-white/80 text-sm mb-4">{offer.description}</p>

                                <div className="bg-white/20 rounded-xl p-4 mb-4">
                                    <p className="text-3xl font-bold">{offer.discount}</p>
                                </div>

                                {offer.valid_until && (
                                    <div className="flex items-center gap-2 text-sm text-white/70">
                                        <Calendar size={16} />
                                        Valid until {new Date(offer.valid_until).toLocaleDateString('en-IN')}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ManageOffers;
