import {Component} from '@angular/core';
import {ScanPasteLinkComponent} from "./paste-link/scan-paste-link.component";
import {CreateTrackerComponent} from "./scan-results/create-tracker.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product.model";
import {Pages} from "../../pages";
import {PageTitleComponent} from "../page-title/page-title.component";
import {Mocks} from "../../Mocks";
import {ToastService} from "../../services/toast.service";

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

    product: Partial<Product> | undefined;
    isDiscovering: boolean = false;

    constructor(private productService: ProductService, private toastService: ToastService) {
    }

    onScan(url: string): void {
        this.isDiscovering = true;
        this.productService.scrap(url)
            .subscribe({
                next: (products: Partial<Product>) => {
                    this.product = products;
                    this.isDiscovering = false;
                    this.toastService.showSuccess('Scan terminé');
                },
                error: (error: any) => {
                    this.isDiscovering = false;
                    this.toastService.showError('Une erreur est survenue lors du scan');
                }
            });
    }

    onTrack(products: Partial<Product>[]): void {
        this.productService.track(products).subscribe();
    }

    onCancel(): void {
        this.product = undefined;
    }

    protected readonly Pages = Pages;
}
