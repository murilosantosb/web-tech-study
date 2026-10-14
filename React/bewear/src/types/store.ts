export interface Brand {
    id: string;
    name: string;
    slug: string;
    logo: string;
    description?: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    image?: string;
}

export interface ProductImage {
    id: string;
    url: string;
    alt: string;
    type: 'primary' | 'secondary';
    order: number;
}

export interface ProductVideo {
    id: string;
    url: string;
    alt: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string | null;
    price: number | null;
    originalPrice?: number | null;
    currency: string;
    brandId: string;
    categoryId: string;
    images: ProductImage[];
    videos?: ProductVideo[];
    colors?: string[];
    sizes?: string[];
    featured?: boolean;
    createdAt?: string;
}

export interface Banner {
    id: string;
    title?: string;
    subtitle?: string;
    image?: string;
    imageDesktop?: string;
    imageMobile?: string;
    ctaLabel?: string;
    ctaHref?: string;
    position?: string;
    active: boolean;
    bgColor?: string;
    isMain?: boolean;
    productId?: string;
}

export interface HomeConfig {
    bestSellers: string[];
    partnerBrands: string[];
    promotionalBanners: string[];
}

export interface StoreData {
    brands: Brand[];
    categories: Category[];
    products: Product[];
    banners: Banner[];
    home: HomeConfig;
}
