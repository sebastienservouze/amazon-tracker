import {Routes} from '@angular/router';
import {TrackersComponent} from './components/trackers/trackers.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProductsComponent} from "./components/products/products.component";

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'trackers', component: TrackersComponent},
    {path: 'products', component: ProductsComponent},
];
