import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Product} from "../../../models/Product.model";
import {ProductComponent} from "../../products/product/product.component";
import {ScanResultComponent} from "./scan-result/scan-result.component";

@Component({
    selector: 'app-create-tracker',
    standalone: true,
    imports: [
        NgForOf,
        FormsModule,
        JsonPipe,
        NgIf,
        ProductComponent,
        ScanResultComponent
    ],
    templateUrl: './create-tracker.component.html',
    styleUrl: './create-tracker.component.scss'
})
export class CreateTrackerComponent {

    main!: Partial<Product>;
    _variants: Partial<Product>[] = [];
    allProducts: Partial<Product>[] = [];
    productsSelected: boolean[] = [];

    @Input()
    set variants(product: Partial<Product>) {
        this.main = product;
        this._variants = product.variants || [];
        this.allProducts = [product, ...this._variants];
        this.productsSelected = new Array(this.allProducts.length).fill(false);
    }

    @Output() trackClicked: EventEmitter<Partial<Product>[]> = new EventEmitter<Partial<Product>[]>();
    @Output() cancelClicked: EventEmitter<void> = new EventEmitter<void>();

    constructor() {
    }

    trackProducts(): void {
        const productsToTrack = this.allProducts.filter((_, index) => this.productsSelected[index]);
        this.trackClicked.emit(productsToTrack);
    }

    checkProductToTrack(index: number): void {
        this.productsSelected[index] = !this.productsSelected[index];
    }

    get isAnyProductSelected(): boolean {
        return this.productsSelected.some(selected => selected);
    }
}
