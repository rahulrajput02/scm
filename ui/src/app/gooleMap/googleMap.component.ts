import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppService } from '../app.service';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'googleMap-root',
  templateUrl: './googleMap.component.html',
  styleUrls: ['./googleMap.component.css'],
  providers: [AppService, WebsocketService]
})
export class googleMapComponent implements OnInit {
  lat: Number = 40.713111
  lng: Number = -74.005906

  // public origin: any
  // public destination: any
  // dir;

  ngOnInit() {
    this.getDirection();
  }

  getDirection() {
    console.log(1);
    // this.dir = {
    //   origin: { lat: 24.799448, lng: 120.979021 },
    //   destination: { lat: 24.799524, lng: 120.975017 }
    // }
    // this.origin = { lat: 24.799448, lng: 120.979021 }
    // this.destination = { lat: 24.799524, lng: 120.975017 }
  }
}