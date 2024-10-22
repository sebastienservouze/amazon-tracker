import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Page} from "../models/Page.model";
import {Product} from "../models/Product.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private httpClient: HttpClient) {
    }

    getProducts(page: number = 1, size: number = 50): Observable<Page<Product>> {
        return this.httpClient.get<Page<Product>>(`http://localhost:3000/products?page=${page}&pageSize=${size}`);
    }
}
