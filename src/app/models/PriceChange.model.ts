import {ProductDiscovery} from "./Product.model";

export interface PriceChange {
    oldPrice: number;
    newPrice: number;
    product: ProductDiscovery;
}