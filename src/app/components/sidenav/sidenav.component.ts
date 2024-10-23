import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {AsyncPipe, NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {NavlinkComponent} from "./navlink/navlink.component";
import {Page, Pages} from "../../pages";

@Component({
  selector: 'app-sidenav',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        AsyncPipe,
        NgIf,
        NavlinkComponent
    ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

    profilePage: Page = {
        label: 'User',
        icon: 'account_circle',
        route: '/profile'
    }

    constructor(public authService: AuthService) {
    }

    protected readonly Pages = Pages;
}
