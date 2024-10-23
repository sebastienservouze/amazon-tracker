import {Component} from '@angular/core';
import {AddTrackerComponent} from "../add-tracker/add-tracker.component";
import {DiscoveriesComponent} from "../discoveries/discoveries.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TrackerService} from "../../services/tracker.service";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product.model";

@Component({
    selector: 'app-trackers',
    standalone: true,
    imports: [
        AddTrackerComponent,
        DiscoveriesComponent,
        NgIf,
        AsyncPipe,
        NgForOf
    ],
    templateUrl: './trackers.component.html',
    styleUrl: './trackers.component.scss'
})
export class TrackersComponent {

    product: Partial<Product> | undefined;
    isDiscovering: boolean = false;

    constructor(private trackerService: TrackerService, private productService: ProductService) {
    }

    onDiscover(url: string): void {
        this.isDiscovering = true;
        this.productService.scrap(url)
            .subscribe({
                next: (products: Partial<Product>) => {
                    this.product = products;
                    this.isDiscovering = false;
                },
                error: (error: any) => {
                    this.isDiscovering = false;
                    console.error(error);
                }
            });
    }

    onTrack(products: Partial<Product>[]): void {
        this.trackerService.track(products).subscribe();
    }

}
