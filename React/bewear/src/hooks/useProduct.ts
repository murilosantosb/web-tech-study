import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { storeService } from '../services/api';
import type { Product } from '../types/store';

export function useProduct() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadProduct = async () => {
        if (!id) return;
        setIsLoading(true);
        setError(null);
        try {
            const data = await storeService.getProductById(id);
            setProduct(data);
        } catch (err) {
            setError('Produto não encontrado ou erro ao carregar.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadProduct();
    }, [id]);

    return {
        product,
        isLoading,
        error,
        refetch: loadProduct
    };
}
