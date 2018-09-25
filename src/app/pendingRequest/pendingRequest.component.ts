import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-pendingRequest',
    templateUrl: './pendingRequest.component.html',
    styleUrls: ['./pendingRequest.component.css']
})

export class pendingRequestComponent {

    form = new FormGroup({
    });

    constructor(private fb: FormBuilder) { }
}
