import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppService } from '../app.service';

@Component({
  selector: 'supplierDashboard-root',
  templateUrl: './supplierDashboard.component.html',
  styleUrls: ['./supplierDashboard.component.css'],
  providers: [AppService]
})
export class supplierDashboardComponent {
  chart = []; // This will hold our chart info
  title = 'dashboard';
  connection;
  dashboardData;
  display1;
  containerId;
  cargoType;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit() {
    console.log(1);
    var dataGet = [{
      id: 'CN101',
      statusType: 'Available',
      currentLocation: 'Bangkok',
      shippedFrom: 'China',
      shippedTo: 'Netherland',
      customStatus: 'Completed',
      lastUpdated: '02/10/2018, 1:34:23 PM',
      type: 'Air'
    },
    {
      id: 'CN102',
      statusType: 'Available',
      currentLocation: 'India',
      shippedFrom: 'USA',
      shippedTo: 'Australia',
      customStatus: 'Completed',
      lastUpdated: '02/10/2018, 05:24:23 PM',
      type: 'Ocean'
    },
    {
      id: 'CN103',
      statusType: 'In-Cargo',
      currentLocation: 'Germany',
      shippedFrom: 'Italy',
      shippedTo: 'France',
      customStatus: 'Completed',
      lastUpdated: '02/10/2018, 03:34:54 AM',
      type: 'Road'
    },
    {
      id: 'CN104',
      statusType: 'Unloaded',
      currentLocation: 'Germany',
      shippedFrom: 'Italy',
      shippedTo: 'France',
      customStatus: 'Pending',
      lastUpdated: '02/10/2018, 11:32:13 PM',
      type: 'Air'
    }
    ]

    this.dashboardData = dataGet;
  }

  validate() {
    var validateObj = {
      "Transaction ID": "12gdhwekjshr67364734353fsf",
      "Timestamp": '18-09-2018 03:14:07'
    }
    alert(JSON.stringify(validateObj, null, "\t"));
  }

  all() {
    this.ngOnInit();
  }

  available() {
    var dataGet = [
      {
        id: 'CN101',
        statusType: 'Available',
        currentLocation: 'Bangkok',
        shippedFrom: 'China',
        shippedTo: 'Netherland',
        customStatus: 'Completed',
        lastUpdated: '02/10/2018, 1:34:23 PM',
        type: 'Air'
      },
      {
        id: 'CN102',
        statusType: 'Available',
        currentLocation: 'India',
        shippedFrom: 'USA',
        shippedTo: 'Australia',
        customStatus: 'Completed',
        lastUpdated: '02/10/2018, 05:24:23 PM',
        type: 'Ocean'
      },
    ]

    this.dashboardData = dataGet;
  }

  unloaded() {
    var dataGet = [
      {
        id: 'CN104',
        statusType: 'Unloaded',
        currentLocation: 'Germany',
        shippedFrom: 'Italy',
        shippedTo: 'France',
        customStatus: 'Pending',
        lastUpdated: '02/10/2018, 11:32:13 PM',
        type: 'Air'
      }
    ]

    this.dashboardData = dataGet;
  }

  openModal(data) {
    this.display1 = 'block';
    this.containerId = data.id;
    this.cargoType = data.type;
  }

  onCloseHandled() {
    this.display1 = 'none';
  }

}
