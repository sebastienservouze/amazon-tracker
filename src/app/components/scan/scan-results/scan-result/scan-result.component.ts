import {Component, Input} from '@angular/core';
import {Product} from "../../../../models/Product.model";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-scan-result',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './scan-result.component.html',
    styleUrl: './scan-result.component.scss'
})
export class ScanResultComponent {

    @Input() result!: Partial<Product>;
    @Input() isSelected: boolean = false;

}
