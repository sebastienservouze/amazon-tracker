import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";
import {Product} from "../../../models/Product.model";

@Component({
    selector: 'app-scan-paste-link',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './scan-paste-link.component.html',
    styleUrl: './scan-paste-link.component.scss'
})
export class ScanPasteLinkComponent {

    @ViewChild('searchBar') searchBar?: ElementRef;

    @Input() isDiscovering: boolean = false;
    @Input() set product(product: Partial<Product> | undefined) {
        if (this.searchBar && !product) {
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
