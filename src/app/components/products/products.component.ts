import {Component, Input} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {Product} from "../../models/Product.model";
import {JsonPipe, NgForOf} from "@angular/common";
import {Mocks} from "../../Mocks";
import {ProductService} from "../../services/product.service";
import {Page} from "../../models/Page.model";

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [
        ProductComponent,
        NgForOf,
        JsonPipe
    ],
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss'
})
export class ProductsComponent {

    products: Product[] = [];

    constructor(private productService: ProductService) {
        this.productService.get().subscribe((products: Page<Product>) => {
            this.products = products.data;
        });
    }

}
