import {PriceChange} from "./PriceChange.model";

export interface Product {
    amazonId: string;
    name: string;
    url: string;
    priceChanges: PriceChange[];
}