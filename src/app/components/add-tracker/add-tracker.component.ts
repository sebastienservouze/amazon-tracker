import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";
import {Product} from "../../models/Product.model";

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

    @ViewChild('searchBar') searchBar?: ElementRef;

    @Input() isDiscovering: boolean = false;
    @Input() set product(product: Partial<Product> | undefined) {
        if (this.searchBar) {
            this.searchBar.nativeElement.value = '';
        }
    }

    @Output() urlPasted: EventEmitter<string> = new EventEmitter<string>();

    onPaste($event: ClipboardEvent) {
        let clipboardData = $event.clipboardData!;
        let pastedText = clipboardData.getData('text');

        this.urlPasted.emit(pastedText);
    }
}
