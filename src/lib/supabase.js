import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Only create client if credentials exist, otherwise create a dummy
let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
    try {
        supabase = createClient(supabaseUrl, supabaseAnonKey);
    } catch (error) {
        console.error('Failed to create Supabase client:', error);
    }
} else {
    console.warn('Supabase credentials not found. Running in offline mode.');
}

export { supabase };


// ============ Products ============
export const getProducts = async () => {
    if (!supabase) return [];

    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching products:', error);
            return [];
        }
        return data || [];
    } catch (error) {
        console.error('Error in getProducts:', error);
        return [];
    }
};

export const addProduct = async (product) => {
    if (!supabase) return null;
    const { data, error } = await supabase
        .from('products')
        .insert([product])
        .select();

    if (error) {
        console.error('Error adding product:', error);
        return null;
    }
    return data?.[0] || null;
};

export const updateProduct = async (id, updates) => {
    if (!supabase) return null;
    const { data, error } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id)
        .select();

    if (error) {
        console.error('Error updating product:', error);
        return null;
    }
    return data?.[0] || null;
};

export const deleteProduct = async (id) => {
    if (!supabase) return false;
    const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting product:', error);
        return false;
    }
    return true;
};

// ============ Offers ============
export const getOffers = async () => {
    if (!supabase) return [];
    const { data, error } = await supabase
        .from('offers')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching offers:', error);
        return [];
    }
    return data || [];
};

export const addOffer = async (offer) => {
    const { data, error } = await supabase
        .from('offers')
        .insert([offer])
        .select();

    if (error) {
        console.error('Error adding offer:', error);
        return null;
    }
    return data[0];
};

export const deleteOffer = async (id) => {
    const { error } = await supabase
        .from('offers')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting offer:', error);
        return false;
    }
    return true;
};

// ============ Site Settings ============
export const getSiteSettings = async () => {
    if (!supabase) return { theme_id: 'bhet-original' };
    const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .single();

    if (error) {
        console.error('Error fetching site settings:', error);
        return { theme_id: 'bhet-original' };
    }
    return data || { theme_id: 'bhet-original' };
};

export const updateSiteSettings = async (settings) => {
    // Upsert - insert or update
    const { data, error } = await supabase
        .from('site_settings')
        .upsert([{ id: 1, ...settings }])
        .select();

    if (error) {
        console.error('Error updating site settings:', error);
        return null;
    }
    return data[0];
};
