import {Routes} from '@angular/router';
import {ScanComponent} from './components/scan/scan.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProductsComponent} from "./components/products/products.component";

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'scan', component: ScanComponent},
    {path: 'products', component: ProductsComponent},
];