import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product.model";
import {BehaviorSubject, Observable, of, tap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TrackerService {

    private searchedProduct$: BehaviorSubject<Product | null> = new BehaviorSubject<Product | null>(null);
    get searchedProduct(): Observable<Product | null> {
        return this.searchedProduct$.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }

    scan(url: string): Observable<Product> {
        return this.httpClient.get<Product>(`http://localhost:3000/tracker/scan?url=${url}`)
                   .pipe(
                       tap((product) => {
                               this.searchedProduct$.next(product);
                           }
                       ));
    }

    track(product: Product): void {
        return;
    }

    ignore(): void {
        this.searchedProduct$.next(null);
    }

}
