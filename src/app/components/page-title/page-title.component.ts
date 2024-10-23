import {Component, Input} from '@angular/core';
import {Page, Pages} from "../../pages";

@Component({
    selector: 'app-page-title',
    standalone: true,
    imports: [],
    templateUrl: './page-title.component.html',
    styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {

    @Input() page!: Page;
}
