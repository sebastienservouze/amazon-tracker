import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Product} from "../../models/Product.model";

@Component({
    selector: 'app-discoveries',
    standalone: true,
    imports: [
        NgForOf,
        FormsModule,
        JsonPipe,
        NgIf
    ],
    templateUrl: './discoveries.component.html',
    styleUrl: './discoveries.component.scss'
})
export class DiscoveriesComponent {

    products: Partial<Product>[] = [];
    productsSelected: boolean[] = [];

    @Input()
    set product(product: Partial<Product>) {
        this.products = [product, ...product.variants!];
        this.productsSelected = new Array(this.products.length).fill(false);
        this.productsSelected[0] = true;
    }

    @Output() trackClicked: EventEmitter<Partial<Product>[]> = new EventEmitter<Partial<Product>[]>();
    @Output() ignoreClicked: EventEmitter<void> = new EventEmitter<void>();

    trackDiscoveries(): void {
        const discoveriesToTrack = this.products.filter((_, index) => this.productsSelected[index]);
        this.trackClicked.emit(discoveriesToTrack);
    }

    get isAnyProductSelected(): boolean {
        return this.productsSelected.some(selected => selected);
    }

    checkProductToTrack(index: number): void {
        this.productsSelected[index] = !this.productsSelected[index];
    }
}
