import { Component } from '@angular/core';
import {PageTitleComponent} from "../page-title/page-title.component";
import {Pages} from "../../pages";

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        PageTitleComponent
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  protected readonly Pages = Pages;
}
