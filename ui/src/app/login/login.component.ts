import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppService } from '../app.service';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AppService, WebsocketService]
})
export class loginComponent {
  title = 'login';
  secondFormVisible = false;
  firstFormVisible = true;
  debtorOption;
  securedPartyOption;
  juisdictions;
  selectedState;
  collateralOption;
  savedSuccess = false;
  saveState = true;
  validateBlock;
  buttonClicked = false;
  messages = [];
  connection;

  angularForm = new FormGroup({
    newFillingRef: new FormControl(),
    orgNameD: new FormControl(),
    mailingAddressD: new FormControl(),
    cityNameD: new FormControl(),
    stateNameD: new FormControl(),
    postalCodeD: new FormControl(),
    orgNameS: new FormControl(),
    mailingAddressS: new FormControl(),
    cityNameS: new FormControl(),
    stateNameS: new FormControl(),
    postalCodeS: new FormControl(),
    attachmentDesc: new FormControl()
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private websocketService: WebsocketService) {
    websocketService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
  }

  ngOnInit() {

    this.httpClient.get(environment.getStatesAPI)
      .subscribe(
        response => {
          console.log(response);
          this.selectedState = response;
        },
        err => {
          console.log("Error Ocurred" + err);
        }
      )
  }

 


  validate() {
    var validateObj = { "Transaction ID": this.validateBlock["transactionId"], "Timestamp": this.validateBlock["timestamp"] }
    console.log(validateObj);
  }
}
