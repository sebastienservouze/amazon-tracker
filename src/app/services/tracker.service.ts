import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {Product} from "../models/Product.model";

@Injectable({
    providedIn: 'root'
})
export class TrackerService {

    constructor(private httpClient: HttpClient) {
    }

    track(products: Partial<Product>[]): Observable<Product[]> {
        console.log(products);
        return of([])
    }

}
