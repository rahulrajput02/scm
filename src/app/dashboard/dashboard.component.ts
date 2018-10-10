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

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private _chart: ChartService) {
  }

  ngOnInit() {
    console.log(1);
    var dataGet = [{
      id: '3324',
      type: 'Shoe laces',
      items: '500',
      status: 'Dispatched',
      lastUpdated: '02/10/2018, 1:34:23 pm'
    },
    {
      id: '3478',
      type: 'Polyster',
      items: '900',
      status: 'Confirmed',
      lastUpdated: '18/10/2018, 12:34:03 am'
    },
    {
      id: '1236',
      type: 'Leather',
      items: '240',
      status: 'Recieved',
      lastUpdated: '15/10/2018, 11:10:18 pm'
    },
    {
      id: '7635',
      type: 'Shoe laces',
      items: '540',
      status: 'Waiting',
      lastUpdated: '12/10/2018, 10:14:29 pm'
    },
    {
      id: '3456',
      type: 'Rubber',
      items: '380',
      status: 'Dispatched',
      lastUpdated: '10/10/2018, 03:30:13 pm'
    }
    ]

    this.dashboardData = dataGet;

    this._chart.dailyForecast()
      .subscribe(res => {
        let temp_max = res['list'].map(res => res.main.temp_max);
        let temp_min = res['list'].map(res => res.main.temp_min);
        let alldates = res['list'].map(res => res.dt)

        let weatherDates = []
        alldates.forEach((res) => {
          this.chart = new Chart('canvas', {
            type: 'bar',
            data: {
              labels: ["Waiting", "Confirmed", "Dispached", "Recieved"],
              datasets: [{
                label: 'Number of Orders',
                data: [12, 19, 3, 8],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)'
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
        })
      })
  }

  validate() {
    var validateObj = {
      "Transaction ID": "12gdhwekjshr67364734353fsf",
      "Timestamp": '18-09-2018 03:14:07'
    }
    alert(JSON.stringify(validateObj, null, "\t"));
  }
}
