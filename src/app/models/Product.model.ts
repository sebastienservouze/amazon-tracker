import { PriceChange } from './PriceChange.model';

export interface Product {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    amazonId: string;
    name: string;
    url: string;
    priceChanges: PriceChange[];
}