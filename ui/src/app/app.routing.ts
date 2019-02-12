import { RouterModule, Routes } from '@angular/router';

import { loginComponent } from './login/login.component';
import { createCargoComponent } from './createCargo/createCargo.component';
import { HomeComponent } from './home/home.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { pendingRequestComponent } from './pendingRequest/pendingRequest.component';
import { transporterLayoutComponent } from './transporterLayout/transporterLayout.component';
import { googleMapComponent } from './gooleMap/googleMap.component';


export const appRoutes: Routes = [

    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: 'login', component: loginComponent },
    {
        path: 'transporter', component: transporterLayoutComponent,
        children: [
            { path: 'dashboard', component: dashboardComponent },
            { path: 'pendingrequest', component: pendingRequestComponent },
            { path: 'createcargo', component: createCargoComponent },
            { path: 'track', component: googleMapComponent}
        ]
    },
];

export const routing = RouterModule.forRoot(appRoutes);
