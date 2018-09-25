import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { loginComponent } from './login/login.component';
import { createPackageComponent } from './createPackage/createPackage.component';
import { HomeComponent } from './home/home.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { pendingRequestComponent } from './pendingRequest/pendingRequest.component';
import { layoutComponent } from './layout/layout.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    createPackageComponent,
    layoutComponent,
    HomeComponent,
    dashboardComponent,
    pendingRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
