import {Component} from '@angular/core';
import {ScanPasteLinkComponent} from "./paste-link/scan-paste-link.component";
import {CreateTrackerComponent} from "./scan-results/create-tracker.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TrackerService} from "../../services/tracker.service";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product.model";
import {Pages} from "../../pages";
import {PageTitleComponent} from "../page-title/page-title.component";
import {Mocks} from "../../Mocks";

@Component({
    selector: 'app-scan',
    standalone: true,
    imports: [
        ScanPasteLinkComponent,
        CreateTrackerComponent,
        NgIf,
        AsyncPipe,
        NgForOf,
        PageTitleComponent
    ],
    templateUrl: './scan.component.html',
    styleUrl: './scan.component.scss'
})
export class ScanComponent {

    product: Partial<Product> | undefined = Mocks.product;
    isDiscovering: boolean = false;

    constructor(private trackerService: TrackerService, private productService: ProductService) {
    }

    onScan(url: string): void {
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

    onCancel(): void {
        this.product = undefined;
    }

    protected readonly Pages = Pages;
}
