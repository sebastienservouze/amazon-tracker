import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {ToastService} from "./services/toast.service";
import {NgForOf} from "@angular/common";
import {ToastComponent} from "./components/toast/toast.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, SidenavComponent, NgForOf, ToastComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    constructor(public readonly toastService: ToastService) {
    }
}
