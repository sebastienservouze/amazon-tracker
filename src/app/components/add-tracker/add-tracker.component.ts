import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {TrackerService} from "../../services/tracker.service";
import {Product} from "../../models/Product.model";
import {NgIf} from "@angular/common";
import {filter} from "rxjs";

@Component({
    selector: 'app-add-tracker',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './add-tracker.component.html',
    styleUrl: './add-tracker.component.scss'
})
export class AddTrackerComponent {

    @ViewChild('searchBar') searchBar!: ElementRef;

    isDiscovering: boolean = false;

    constructor(private trackerService: TrackerService) {
        this.trackerService.searchedProduct
            .pipe(
                filter((product) => product === null)
            )
            .subscribe(() => {
                this.searchBar.nativeElement.value = '';
            });
    }

    onPaste($event: ClipboardEvent) {
        let clipboardData = $event.clipboardData!;
        let pastedText = clipboardData.getData('text');

        this.discover(pastedText);
    }

    discover(url: string) {
        this.isDiscovering = true;
        this.trackerService.scan(url).subscribe({
            complete: () => {
                this.isDiscovering = false;
            }
        });
    }
}
