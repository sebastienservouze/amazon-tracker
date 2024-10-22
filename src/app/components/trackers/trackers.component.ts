import {Component} from '@angular/core';
import {AddTrackerComponent} from "../add-tracker/add-tracker.component";
import {DiscoveriesComponent} from "../discovery-overview/discoveries.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TrackerService} from "../../services/tracker.service";

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

    constructor(public trackerService: TrackerService) {
    }

}
