import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { storeService } from '../services/api';
import type { Product } from '../types/store';

export function useRelatedProducts(currentProduct: Product | null) {
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRelated = async () => {
            if (!currentProduct) return;

            setIsLoading(true);
            setError(null);
            try {
                const allProducts = await storeService.getProducts();

                // 1. Excluir o produto atual
                const otherProducts = allProducts.filter(p => p.id !== currentProduct.id);

                // 2. Priorizar mesma categoria
                const sameCategory = otherProducts.filter(p => p.categoryId === currentProduct.categoryId);

                // 3. Completar com os demais mantendo a ordem do JSON
                const others = otherProducts.filter(p => p.categoryId !== currentProduct.categoryId);

                const result = [...sameCategory, ...others].slice(0, 4);

                setRelatedProducts(result);
            } catch (err) {
                setError('Erro ao carregar produtos relacionados.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRelated();
    }, [currentProduct?.id]);

    return { relatedProducts, isLoading, error };
}
