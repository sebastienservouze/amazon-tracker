import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/Product.model";
import {TrackerService} from "../../services/tracker.service";

@Component({
    selector: 'app-product-overview',
    standalone: true,
    imports: [],
    templateUrl: './product-overview.component.html',
    styleUrl: './product-overview.component.scss'
})
export class ProductOverviewComponent {

    @Input() product: Product | null | undefined;

    @Output() productIgnored = new EventEmitter<Product>();
    @Output() productTracked = new EventEmitter<Product>();

    constructor(public trackerService: TrackerService) {
    }
}
