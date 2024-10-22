import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {ProductDiscovery} from "../models/ProductDiscovery.model";
import {Mocks} from "../Mocks";

@Injectable({
    providedIn: 'root'
})
export class TrackerService {

    private discoveries$: BehaviorSubject<ProductDiscovery[]> = new BehaviorSubject<ProductDiscovery[]>([]);
    get discoveries(): Observable<ProductDiscovery[]> {
        return this.discoveries$.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }

    discover(url: string): Observable<ProductDiscovery[]> {
        return this.httpClient.get<ProductDiscovery[]>(`http://localhost:3000/tracker/discover?url=${url}`)
                   .pipe(
                       tap((discoveries: ProductDiscovery[]) => {
                               this.discoveries$.next(discoveries);
                           }
                       ));
    }

    track(dicoveries: ProductDiscovery[]): Observable<ProductDiscovery[]> {
        console.log(dicoveries);
        return this.httpClient.post<ProductDiscovery[]>('http://localhost:3000/tracker/track', dicoveries)
    }

    ignore(): void {
        this.discoveries$.next([]);
    }

}
