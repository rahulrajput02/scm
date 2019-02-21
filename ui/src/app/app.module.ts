import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { loginComponent } from './login/login.component';
import { createCargoComponent } from './createCargo/createCargo.component';
import { HomeComponent } from './home/home.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { supplierDashboardComponent } from './supplierDashboard/supplierDashboard.component';
import { pendingRequestComponent } from './pendingRequest/pendingRequest.component';
import { transporterLayoutComponent } from './transporterLayout/transporterLayout.component';
import { googleMapComponent } from './gooleMap/googleMap.component';
import { supplierLayoutComponent } from './supplierLayout/supplierLayout.component';
import { createContainerComponent } from './createContainer/createContainer.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    createCargoComponent,
    transporterLayoutComponent,
    supplierLayoutComponent,
    supplierDashboardComponent,
    HomeComponent,
    dashboardComponent,
    pendingRequestComponent,
    googleMapComponent,
    createContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAW5EYmqgopOATrTR_B_PopZL902Hi8_Jk'
    }),
    AgmDirectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
