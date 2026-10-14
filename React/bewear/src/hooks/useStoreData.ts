import { useState, useEffect } from 'react';
import { storeService } from '../services/api';
import type { Brand, Product, Banner, HomeConfig } from '../types/store';

export function useStoreData() {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [banners, setBanners] = useState<Banner[]>([]);
    const [homeConfig, setHomeConfig] = useState<HomeConfig | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const [brandsData, productsData, bannersData, configData] = await Promise.all([
                storeService.getBrands(),
                storeService.getProducts(),
                storeService.getBanners(),
                storeService.getHomeConfig()
            ]);
            setBrands(brandsData);
            setProducts(productsData);
            setBanners(bannersData);
            setHomeConfig(configData);
        } catch (err) {
            setError('Erro ao carregar dados da loja. Por favor, tente novamente mais tarde.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // Resolve references by ID
    const partnerBrands = (homeConfig?.partnerBrands || [])
        .map(id => brands.find(b => b.id === id))
        .filter((b): b is Brand => !!b);

    const bestSellers = (homeConfig?.bestSellers || [])
        .map(id => products.find(p => p.id === id))
        .filter((p): p is Product => !!p);

    const promoBanners = (homeConfig?.promotionalBanners || [])
        .map(id => banners.find(b => b.id === id))
        .filter((b): b is Banner => !!b);

    return {
        brands,
        products,
        banners,
        homeConfig,
        partnerBrands,
        bestSellers,
        promoBanners,
        isLoading,
        error,
        refetch: loadData
    };
}
