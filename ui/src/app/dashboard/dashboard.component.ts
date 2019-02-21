import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppService } from '../app.service';

@Component({
  selector: 'dashboard-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AppService]
})
export class dashboardComponent {
  chart = []; // This will hold our chart info
  title = 'dashboard';
  connection;
  dashboardData;
  containerdData;
  display1;
  cargoId;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit() {
    console.log(1);
    var dataGet = [{
      id: 'CG001',
      statusType: 'Ready',
      currentLocation: 'Bangkok',
      shippedFrom: 'China',
      shippedTo: 'Netherland',
      containerQuantity: '500',
      lastUpdated: '02/10/2018, 02:32:23 AM'
    },
    {
      id: 'CG002',
      statusType: 'Arrived',
      currentLocation: 'India',
      shippedFrom: 'USA',
      shippedTo: 'Australia',
      containerQuantity: '60',
      lastUpdated: '02/10/2018, 04:44:52 AM'
    },
    {
      id: 'CG003',
      statusType: 'In-Transit',
      currentLocation: 'Germany',
      shippedFrom: 'Italy',
      shippedTo: 'France',
      containerQuantity: '40',
      lastUpdated: '02/10/2018, 01:34:23 PM'
    },
    {
      id: 'CG004',
      statusType: 'Arrived',
      currentLocation: 'Singapore',
      shippedFrom: 'England',
      shippedTo: 'Australia',
      containerQuantity: '240',
      lastUpdated: '02/10/2018, 11:14:23 PM'
    }
    ]

    this.dashboardData = dataGet;


    var dataGet2 = [{
      id: 'CN101',
      statusType: 'In-Cargo',
      currentLocation: 'Bangkok',
      shippedFrom: 'China',
      shippedTo: 'Ukraine',
      customStatus: 'Completed',
      lastUpdated: '02/10/2018, 1:34:23 PM'
    },
    {
      id: 'CN103',
      statusType: 'In-Cargo',
      currentLocation: 'Germany',
      shippedFrom: 'Italy',
      shippedTo: 'Prague',
      customStatus: 'Pending',
      lastUpdated: '02/10/2018, 1:34:23 PM'
    }
    ]

    this.containerData = dataGet2;
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

  arrived() {
    var dataGet = [
      {
        id: 'CG002',
        statusType: 'Arrived',
        currentLocation: 'India',
        shippedFrom: 'USA',
        shippedTo: 'Australia',
        containerQuantity: '60',
        lastUpdated: '02/10/2018, 04:44:52 AM'
      },
      {
        id: 'CG004',
        statusType: 'Arrived',
        currentLocation: 'Singapore',
        shippedFrom: 'England',
        shippedTo: 'Australia',
        containerQuantity: '240',
        lastUpdated: '02/10/2018, 11:14:23 PM'
      }
    ]

    this.dashboardData = dataGet;
  }

  intransit() {
    var dataGet = [
      {
        id: 'CG003',
        statusType: 'In-Transit',
        currentLocation: 'Germany',
        shippedFrom: 'Italy',
        shippedTo: 'France',
        containerQuantity: '40',
        lastUpdated: '02/10/2018, 01:34:23 PM'
      }
    ]

    this.dashboardData = dataGet;
  }

  openModal(id) {
  this.display1 = 'block';
  this.cargoId = id;
}

onCloseHandled() {
  this.display1 = 'none';
}

}
