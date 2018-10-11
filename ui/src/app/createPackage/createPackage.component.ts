import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
    selector: 'createPackage-root',
    templateUrl: './createPackage.component.html',
    styleUrls: ['./createPackage.component.css']
})
export class createPackageComponent {
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

    createPackage(event) {
        const target = event.target;

        const orderType = target.querySelector('#orderType').value;
        const currentOwner = target.querySelector('#currentOwner').value;
        const quantityType = target.querySelector('#quantityType').value;
        const quantity = target.querySelector('#quantity').value;

        const myobj = {
            "Order_Type": orderType, "Current_Owner": currentOwner, "Quantity_Type": quantityType, "Quantity": quantity
        };

        console.log(myobj);


        // this.httpClient.post(environment.postNewFilling, myobj, { responseType: 'text' })
        //     .subscribe(
        //         response => {
        //             console.log(response);
        //             var hashFromResp = response;

        //             var hashToBlock = {
        //                 "$class": "org.example.mynetwork.NewFilling",
        //                 "hashId": response
        //             }

        //             this.httpClient.post(environment.postToBlockChain, hashToBlock)
        //                 .subscribe(
        //                     response => {
        //                         this.httpClient.get(environment.getNewFillingFromBlock + hashFromResp)
        //                             .subscribe(
        //                                 response => {
        //                                     var submitTrans = {
        //                                         "$class": "org.example.mynetwork.StoreHash",
        //                                         "newFilling": "resource:org.example.mynetwork.NewFilling#" + response["hashId"],
        //                                         "transactionId": "",
        //                                         "timestamp": new Date()
        //                                     }

        //                                     this.httpClient.post(environment.postHashToBlock, submitTrans)
        //                                         .subscribe(
        //                                             response => {
        //                                                 this.savedSuccess = true;
        //                                                 this.saveState = false;
        //                                                 this.validateBlock = response;
        //                                                 console.log(response["transactionId"]);

        //                                                 const objTran = { "transactionId": response["transactionId"] };
        //                                                 this.httpClient.post(environment.postTransactionId, objTran, { responseType: 'text' })
        //                                                     .subscribe(
        //                                                         response => {
        //                                                             console.log(response);
        //                                                             // window.setInterval(reload, 2500);

        //                                                             // function reload() {
        //                                                             //   window.location.reload();
        //                                                             // }
        //                                                         }
        //                                                     );
        //                                             });
        //                                 });
        //                     }
        //                 );
        //         },

        //         err => {
        //             console.log("Error Ocurred" + err);
        //         }
        //     )
    }
}