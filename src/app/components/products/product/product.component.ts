import {Component, Input} from '@angular/core';
import {Product} from "../../../models/Product.model";
import {DatePipe} from "@angular/common";
import {TimeAgoPipe} from "../../../pipes/TimeAgo.pipe";

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        DatePipe,
        TimeAgoPipe
    ],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss'
})
export class ProductComponent {

    _product!: Product;
    @Input() set product(product: Product) {
        this._product = product;
    }
}
