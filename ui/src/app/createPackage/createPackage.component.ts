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
        const currentOwnerSelection = target.querySelector('#currentOwner').value;

        var currentOwnerValue;

        if (currentOwnerSelection === 'Supplier') {
            currentOwnerValue = 'S1'
        } else {
            currentOwnerValue = 'R1'
        }

        const quantityTypeSelection = target.querySelector('#quantityType').value;
        var quantityTypeValue;

        if (quantityTypeSelection === 'No.of Item') {
            quantityTypeValue = 'ITEM'
        } else {
            quantityTypeValue = 'POUNDS'
        }


        const quantity = target.querySelector('#quantity').value;

        // const myobj = {
        //     "Order_Type": orderType, "Current_Owner": currentOwner, "Quantity_Type": quantityType, "Quantity": quantity
        // };

        const myObj = {
            "$class": "scm.Package",
            "packageId": "5678",
            "type": orderType,
            "currentOwner": "resource:scm.SupplychainParticipant#" + currentOwnerValue,
            "quantity": quantity,
            "quantityType": quantityTypeValue
        }

        console.log(myObj);

        this.httpClient.post('http://localhost:5000/api/scm.Package', myObj)
            .subscribe(
                response => {
                    console.log(response);

                    this.httpClient.post(environment.postOrderRequest, myObj, { responseType: 'text' })
                        .subscribe(
                            response => {
                                console.log(response);
                            }
                        )

                    // this.httpClient.post(environment.postOrderRequest, myobj, { responseType: 'text' })
                    //     .subscribe(
                    //         response => {
                    //             console.log(response);
                    //             var id = response;

                    //             var orderData = {
                    //                 "$class": "org.example.mynetwork.NewFilling",
                    //                 "hashId": response
                    //             }

                    //             this.httpClient.post(environment.postToBlockChain, orderData)
                    //                 .subscribe(
                    //                     response => {
                    //                         this.httpClient.get(environment.getNewFillingFromBlock + id)
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
                    //         });
                });
    }
}