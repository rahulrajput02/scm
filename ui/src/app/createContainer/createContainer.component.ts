import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
    selector: 'createContainer-root',
    templateUrl: './createContainer.component.html',
    styleUrls: ['./createContainer.component.css']
})
export class createContainerComponent {
    transactionLink;
    validate;
    studentData;
    fillingData;
    transactionData;
    fileUrl;


    angularForm = new FormGroup({
        orderType: new FormControl(),
        currentOwner: new FormControl(),
        quantityType: new FormControl(),
        quantity: new FormControl()
    });

    constructor(private fb: FormBuilder, private httpClient: HttpClient, private routes: Router) {
        this.createForm();
    }

    createForm() {
        this.angularForm = this.fb.group({
            orderType: ['', Validators.required],
            currentOwner: ['', Validators.required],
            quantityType: ['', Validators.required],
            quantity: ['', Validators.required]
        });
    }


    // ngOnInit() {
    //     this.validate = false;

    //     this.httpClient.get(environment.getDataFromDB)
    //         .subscribe(
    //             response => {
    //                 console.log(response);
    //                 this.fillingData = response;
    //             },
    //             err => {
    //                 console.log("Error Ocurred" + err);
    //             }
    //         )
    // }

    validateButton(transactionId) {
        this.httpClient.get(environment.getTransactionDetails + transactionId)
            .subscribe(
                response => {
                    this.transactionData = JSON.stringify(response, null, "\t");
                    alert(this.transactionData);
                    console.log(this.transactionData);
                }
            )
    }

    createCargo(event) {
        const target = event.target;

        const statusType = target.querySelector('#statusType').value;
        const currentLocation = target.querySelector('#currentLocation').value;
        const shipFrom = target.querySelector('#shipFrom').value;
        const shipTo = target.querySelector('#ShipTo').value;
        const transType = target.querySelector('#transType').value;
        const quantity = target.querySelector('#quantity').value;


        const myObj = {
            "key": "",
            "txnId": "",
            "timestamp": "",
            "cargoId": "",
            "shippedFrom": shipFrom,
            "shippedTo": shipTo,
            "cargoLocation": currentLocation,
            "transportationType": transType,
            "containerQty": quantity,
            "owner": "",
            "associatedContainerHashIds": "",
            "status": statusType
        }

        console.log(myObj);

        // this.httpClient.post('http://localhost:5000/api/scm.Package', myObj)
        //     .subscribe(
        //         response => {
        //             console.log(response);
        //
        //             this.httpClient.post(environment.postOrderRequest, myObj, { responseType: 'text' })
        //                 .subscribe(
        //                     response => {
        //                         console.log(response);
        //                     }
        //                 )
        //         });
    }
}
