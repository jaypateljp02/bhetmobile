import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEMES, getThemeById } from '../constants/themes';
import {
    getProducts,
    addProduct as addProductToDb,
    updateProduct as updateProductInDb,
    deleteProduct as deleteProductFromDb,
    getOffers,
    addOffer as addOfferToDb,
    deleteOffer as deleteOfferFromDb,
    getSiteSettings,
    updateSiteSettings,
    supabase
} from '../lib/supabase';

const AppContext = createContext();

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};

export const AppProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(THEMES[0]);
    const [products, setProducts] = useState([]);
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Sample data for demo mode (when Supabase is not configured)
    const setSampleData = () => {
        setProducts([
            {
                id: 'sample-1',
                name: 'Apple iPhone 15',
                description: '128GB • All Colors Available',
                price: 'Ask for Deal',
                badge: 'Best Seller',
                category: 'phone',
                image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80',
                is_trending: true
            },
            {
                id: 'sample-2',
                name: 'Samsung S24 Ultra',
                description: 'AI Features • Titanium',
                price: 'Ask for Deal',
                badge: 'New Arrival',
                category: 'phone',
                image_url: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=80',
                is_trending: true
            },
            {
                id: 'sample-3',
                name: 'OnePlus 12',
                description: '256GB • Flowy Emerald',
                price: '₹64,999',
                badge: 'Hot Deal',
                category: 'phone',
                image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80',
                is_trending: true
            },
            {
                id: 'sample-4',
                name: 'Vivo X100 Pro',
                description: '512GB • Asteroid Black',
                price: '₹89,999',
                badge: 'New Arrival',
                category: 'phone',
                image_url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80',
                is_trending: true
            },
            {
                id: 'sample-5',
                name: 'Apple AirPods Pro 2',
                description: 'Active Noise Cancellation',
                price: '₹24,900',
                badge: 'Best Seller',
                category: 'accessory',
                image_url: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=500&q=80',
                is_trending: false
            },
            {
                id: 'sample-6',
                name: 'Samsung Galaxy Buds 2 Pro',
                description: 'Hi-Fi Sound • IPX7',
                price: '₹14,999',
                badge: 'Hot Deal',
                category: 'accessory',
                image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80',
                is_trending: false
            },
            {
                id: 'sample-7',
                name: 'Fast Charger 65W',
                description: 'USB-C • All Phones',
                price: '₹1,499',
                badge: 'Popular',
                category: 'accessory',
                image_url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80',
                is_trending: false
            }
        ]);
        setOffers([
            {
                id: 'offer-1',
                title: 'New Year Sale 2026!',
                description: 'Special discounts on all smartphones',
                discount: 'Up to 20% OFF',
                valid_until: '2026-01-15',
                is_active: true
            }
        ]);
    };

    // Apply theme CSS variables
    useEffect(() => {
        const root = document.documentElement;
        const { colors } = currentTheme;

        root.style.setProperty('--color-primary', colors.primary);
        root.style.setProperty('--color-secondary', colors.secondary);
        root.style.setProperty('--color-accent', colors.accent);
        root.style.setProperty('--color-background', colors.background);
        root.style.setProperty('--color-text', colors.text);
        root.style.setProperty('--color-card', colors.card);
        root.style.setProperty('--color-border', colors.border);
    }, [currentTheme]);

    // Load initial data
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                // 1. Load Theme from LocalStorage
                const savedThemeId = localStorage.getItem('bhet_theme');
                if (savedThemeId) {
                    const theme = getThemeById(savedThemeId);
                    if (theme) setCurrentTheme(theme);
                }

                // 2. Load Local Data (Products & Offers)
                const localProducts = localStorage.getItem('bhet_products');
                const localOffers = localStorage.getItem('bhet_offers');

                if (localProducts) setProducts(JSON.parse(localProducts));
                if (localOffers) setOffers(JSON.parse(localOffers));

                // 3. Try Supabase Sync (if configured)
                const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
                if (!supabaseUrl) {
                    // If no local data and no Supabase, load sample data
                    if (!localProducts) setSampleData();
                    setLoading(false);
                    return;
                }

                const [productsData, offersData, settingsData] = await Promise.all([
                    getProducts(),
                    getOffers(),
                    getSiteSettings()
                ]);

                // Merge or overwrite based on strategy (here we prioritize DB if available)
                if (productsData) setProducts(productsData);
                if (offersData) setOffers(offersData);

                if (settingsData?.theme_id) {
                    setCurrentTheme(getThemeById(settingsData.theme_id));
                } else if (savedThemeId) {
                    // Keep local theme if DB has none
                    setCurrentTheme(getThemeById(savedThemeId));
                }
            } catch (error) {
                console.error('Error loading data:', error);
                // If Supabase failed, we already loaded from localStorage above
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    // State for BroadcastChannel
    const [channel, setChannel] = useState(null);

    // Initialize BroadcastChannel & Supabase Realtime
    useEffect(() => {
        const bc = new BroadcastChannel('bhet_mobile_sync');
        setChannel(bc);

        bc.onmessage = (event) => {
            const { type, payload } = event.data;
            if (type === 'THEME_CHANGE') {
                const theme = getThemeById(payload);
                if (theme) setCurrentTheme(theme);
            } else if (type === 'PRODUCTS_UPDATE') {
                setProducts(payload);
            } else if (type === 'OFFERS_UPDATE') {
                setOffers(payload);
            }
        };

        // Supabase Realtime Subscriptions
        let settingsSub, productsSub, offersSub;

        if (supabase) {
            // 1. Subscribe to site_settings changes (Theme Sync)
            settingsSub = supabase
                .channel('public:site_settings')
                .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'site_settings' },
                    payload => {
                        if (payload.new && payload.new.theme_id) {
                            const theme = getThemeById(payload.new.theme_id);
                            if (theme) setCurrentTheme(theme);
                        }
                    }
                )
                .subscribe();

            // 2. Subscribe to products changes
            productsSub = supabase
                .channel('public:products')
                .on('postgres_changes', { event: '*', schema: 'public', table: 'products' },
                    async () => {
                        const data = await getProducts();
                        setProducts(data);
                    }
                )
                .subscribe();

            // 3. Subscribe to offers changes
            offersSub = supabase
                .channel('public:offers')
                .on('postgres_changes', { event: '*', schema: 'public', table: 'offers' },
                    async () => {
                        const data = await getOffers();
                        setOffers(data);
                    }
                )
                .subscribe();
        }

        return () => {
            bc.close();
            if (supabase) {
                supabase.removeChannel(settingsSub);
                supabase.removeChannel(productsSub);
                supabase.removeChannel(offersSub);
            }
        };
    }, []);

    // Theme functions
    const changeTheme = (themeId) => {
        const theme = getThemeById(themeId);
        if (theme) {
            setCurrentTheme(theme);
            // Broadcast change
            channel?.postMessage({ type: 'THEME_CHANGE', payload: themeId });
            // Persist if needed (optional based on user pref, but good for reload)
            localStorage.setItem('bhet_theme', themeId);
            updateSiteSettings({ theme_id: themeId });
        }
    };

    // Product functions
    const addProduct = async (product) => {
        // Optimistic update
        const newProduct = { ...product, id: Date.now() }; // Temp ID if offline
        const updatedProducts = [newProduct, ...products];
        setProducts(updatedProducts);
        localStorage.setItem('bhet_products', JSON.stringify(updatedProducts));

        // Broadcast
        channel?.postMessage({ type: 'PRODUCTS_UPDATE', payload: updatedProducts });

        try {
            const added = await addProductToDb(product);
            if (added) {
                // Replace temp product with real one from DB
                const verifiedProducts = [added, ...products];
                setProducts(verifiedProducts);
                localStorage.setItem('bhet_products', JSON.stringify(verifiedProducts));
                channel?.postMessage({ type: 'PRODUCTS_UPDATE', payload: verifiedProducts });
            }
        } catch (e) {
            console.warn('Added locally (Supabase offline)');
        }
        return newProduct;
    };

    const updateProduct = async (id, updates) => {
        // Optimistic update
        const updatedProducts = products.map(p => p.id === id ? { ...p, ...updates } : p);
        setProducts(updatedProducts);
        localStorage.setItem('bhet_products', JSON.stringify(updatedProducts));
        channel?.postMessage({ type: 'PRODUCTS_UPDATE', payload: updatedProducts });

        const updated = await updateProductInDb(id, updates);
        if (updated) {
            const verified = products.map(p => p.id === id ? updated : p);
            setProducts(verified);
            localStorage.setItem('bhet_products', JSON.stringify(verified));
            channel?.postMessage({ type: 'PRODUCTS_UPDATE', payload: verified });
            return updated;
        }
        return null; // Should handle error state better but this persists local change
    };

    const deleteProduct = async (id) => {
        // Optimistic
        const filtered = products.filter(p => p.id !== id);
        setProducts(filtered);
        localStorage.setItem('bhet_products', JSON.stringify(filtered));
        channel?.postMessage({ type: 'PRODUCTS_UPDATE', payload: filtered });

        await deleteProductFromDb(id);
        return true;
    };

    // Offer functions
    const addOffer = async (offer) => {
        const newOffer = { ...offer, id: Date.now() };
        const updatedOffers = [newOffer, ...offers];
        setOffers(updatedOffers);
        localStorage.setItem('bhet_offers', JSON.stringify(updatedOffers));
        channel?.postMessage({ type: 'OFFERS_UPDATE', payload: updatedOffers });

        const added = await addOfferToDb(offer);
        if (added) {
            const verified = [added, ...offers];
            setOffers(verified);
            localStorage.setItem('bhet_offers', JSON.stringify(verified));
            channel?.postMessage({ type: 'OFFERS_UPDATE', payload: verified });
            return added;
        }
        return newOffer;
    };

    const deleteOffer = async (id) => {
        const filtered = offers.filter(o => o.id !== id);
        setOffers(filtered);
        localStorage.setItem('bhet_offers', JSON.stringify(filtered));
        channel?.postMessage({ type: 'OFFERS_UPDATE', payload: filtered });

        await deleteOfferFromDb(id);
        return true;
    };

    // Filter helpers
    const getTrendingProducts = () => products.filter(p => p.is_trending).slice(0, 4);
    const getPhoneProducts = () => products.filter(p => p.category === 'phone');
    const getAccessoryProducts = () => products.filter(p => p.category === 'accessory');

    const value = {
        // Theme
        currentTheme,
        themes: THEMES,
        changeTheme,

        // Products
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        getTrendingProducts,
        getPhoneProducts,
        getAccessoryProducts,

        // Offers
        offers,
        addOffer,
        deleteOffer,

        // State
        loading
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};


