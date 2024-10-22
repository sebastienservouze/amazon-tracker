export interface PriceChange {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    oldPrice: number;
    newPrice: number;
}