import {Component, Input} from '@angular/core';
import {ProductDiscovery} from "../../models/ProductDiscovery.model";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TrackerService} from "../../services/tracker.service";

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

    _discoveries!: ProductDiscovery[];
    @Input()
    set discoveries(discoveries: ProductDiscovery[]) {
        this._discoveries = discoveries;
        this.discoveriesSelected = new Array(discoveries.length).fill(discoveries.length === 1);
        this.discoveriesSelected[0] = true;
    }

    discoveriesSelected: boolean[] = [];

    constructor(public trackerService: TrackerService) {
    }

    trackDiscoveries(): void {
        const discoveriesToTrack = this._discoveries.filter((_, index) => this.discoveriesSelected[index]);
        this.trackerService.track(discoveriesToTrack).subscribe(() => {
            this.trackerService.ignore();
        });
    }

    get isAnyDiscoverySelected(): boolean {
        return this.discoveriesSelected.some(selected => selected);
    }

    get isAnyDiscoveryUnPriced(): boolean {
        return this._discoveries.some(discovery => !discovery.price);
    }

    checkDiscoveryToTrack(index: number): void {
        this.discoveriesSelected[index] = !this.discoveriesSelected[index];
    }
}
