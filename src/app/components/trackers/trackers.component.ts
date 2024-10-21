import {Component} from '@angular/core';
import {AddTrackerComponent} from "../add-tracker/add-tracker.component";
import {Product} from "../../models/Product.model";
import {ProductOverviewComponent} from "../product-overview/product-overview.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {TrackerService} from "../../services/tracker.service";

@Component({
    selector: 'app-trackers',
    standalone: true,
    imports: [
        AddTrackerComponent,
        ProductOverviewComponent,
        NgIf,
        AsyncPipe
    ],
    templateUrl: './trackers.component.html',
    styleUrl: './trackers.component.scss'
})
export class TrackersComponent {

    searchedProduct$: Observable<Product | null>;

    constructor(trackerService: TrackerService) {
        this.searchedProduct$ = trackerService.searchedProduct;
    }


}
