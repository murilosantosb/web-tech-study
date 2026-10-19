import type { Brand, Category, Product, Banner, HomeConfig } from '../types/store';

const API_URL = 'http://localhost:3000';

async function fetchData<T>(endpoint: string): Promise<T> {
    try {
        const response = await fetch(`${API_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        throw error;
    }
}

export const storeService = {
    async getBrands(): Promise<Brand[]> {
        return fetchData<Brand[]>('/brands');
    },

    async getCategories(): Promise<Category[]> {
        return fetchData<Category[]>('/categories');
    },

    async getProducts(): Promise<Product[]> {
        return fetchData<Product[]>('/products');
    },

    async getBanners(): Promise<Banner[]> {
        return fetchData<Banner[]>('/banners');
    },

    async getHomeConfig(): Promise<HomeConfig> {
        return fetchData<HomeConfig>('/home');
    },

    async getProductById(id: string): Promise<Product> {
        return fetchData<Product>(`/products/${id}`);
    }
};
