import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product.model";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        DatePipe
    ],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss'
})
export class ProductComponent {

    @Input() product!: Product;
}
