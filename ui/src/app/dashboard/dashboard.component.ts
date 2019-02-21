import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppService } from '../app.service';
import { ChartService } from '../chart.service';
import { Chart } from 'chart.js';

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
  display1;
  cargoId;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private _chart: ChartService) {
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
      lastUpdated: '02/10/2018, 1:34:23 pm'
    },
    {
      id: 'CG002',
      statusType: 'Arrived',
      currentLocation: 'India',
      shippedFrom: 'USA',
      shippedTo: 'Australia',
      containerQuantity: '60',
      lastUpdated: '02/10/2018, 1:34:23 pm'
    },
    {
      id: 'CG003',
      statusType: 'In-Transit',
      currentLocation: 'Germany',
      shippedFrom: 'Italy',
      shippedTo: 'France',
      containerQuantity: '40',
      lastUpdated: '02/10/2018, 1:34:23 pm'
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

  arrived() {
    var dataGet = [
      {
        id: 'CG002',
        statusType: 'Arrived',
        currentLocation: 'India',
        shippedFrom: 'USA',
        shippedTo: 'Australia',
        containerQuantity: '60',
        lastUpdated: '02/10/2018, 1:34:23 pm'
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
        lastUpdated: '02/10/2018, 1:34:23 pm'
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
