import { Component } from '@angular/core';
import {AddTrackerComponent} from "../add-tracker/add-tracker.component";

@Component({
  selector: 'app-trackers',
  standalone: true,
    imports: [
        AddTrackerComponent
    ],
  templateUrl: './trackers.component.html',
  styleUrl: './trackers.component.scss'
})
export class TrackersComponent {

}
