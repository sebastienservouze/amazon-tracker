import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {AsyncPipe, NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sidenav',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        AsyncPipe,
        NgIf
    ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

    constructor(public authService: AuthService) {
    }

}
