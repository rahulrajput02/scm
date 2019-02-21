import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppService } from '../app.service';
import { ChartService } from '../chart.service';
import { Chart } from 'chart.js';

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
  cargoId;
  cargoType;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private _chart: ChartService) {
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
      lastUpdated: '02/10/2018, 1:34:23 pm',
      type: 'Air'
    },
    {
      id: 'CN102',
      statusType: 'Available',
      currentLocation: 'India',
      shippedFrom: 'USA',
      shippedTo: 'Australia',
      customStatus: 'Completed',
      lastUpdated: '02/10/2018, 1:34:23 pm',
      type: 'Ocean'
    },
    {
      id: 'CN103',
      statusType: 'In-Cargo',
      currentLocation: 'Germany',
      shippedFrom: 'Italy',
      shippedTo: 'France',
      customStatus: 'Completed',
      lastUpdated: '02/10/2018, 1:34:23 pm',
      type: 'Road'
    },
    {
      id: 'CN104',
      statusType: 'Unloaded',
      currentLocation: 'Germany',
      shippedFrom: 'Italy',
      shippedTo: 'France',
      customStatus: 'Pending',
      lastUpdated: '02/10/2018, 1:34:23 pm',
      type: 'Air'
    }
    ]

    this.dashboardData = dataGet;



    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ["Waiting", "Recieved", "Dispached", "Confirmed"],
        datasets: [{
          label: 'Orders Status',
          data: [12, 19, 3, 8],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(54, 162, 235, 0.7)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
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
        lastUpdated: '02/10/2018, 1:34:23 pm',
        type: 'Air'
      },
      {
        id: 'CN102',
        statusType: 'Available',
        currentLocation: 'India',
        shippedFrom: 'USA',
        shippedTo: 'Australia',
        customStatus: 'Completed',
        lastUpdated: '02/10/2018, 1:34:23 pm',
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
        lastUpdated: '02/10/2018, 1:34:23 pm',
        type: 'Road'
      }
    ]

    this.dashboardData = dataGet;
  }

  openModal(data) {
    this.display1 = 'block';
    this.cargoId = data.id;
    this.cargoType = data.type;
  }

  onCloseHandled() {
    this.display1 = 'none';
  }

}
