import { RouterModule, Routes } from '@angular/router';

import { loginComponent } from './login/login.component';
import { createPackageComponent } from './createPackage/createPackage.component';
import { HomeComponent } from './home/home.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { pendingRequestComponent } from './pendingRequest/pendingRequest.component';
import { layoutComponent } from './layout/layout.component';


export const appRoutes: Routes = [

    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: 'login', component: loginComponent },
    {
        path: 'layout', component: layoutComponent,
        children: [
            { path: 'dashboard', component: dashboardComponent },
            { path: 'pendingrequest', component: pendingRequestComponent },
            { path: 'createpackage', component: createPackageComponent },
        ]
    },
];

export const routing = RouterModule.forRoot(appRoutes);