import { PriceChange } from './PriceChange.model';

export interface Product {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    amazonId: string;
    name: string;
    url: string;
    price: number;
    lowestPrice: number;
    averagePrice: number;
    highestPrice: number;
    lastScan: string;
    variants: Product[];
    priceChanges: PriceChange[];
}