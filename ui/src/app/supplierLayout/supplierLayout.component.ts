import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-supplierLayout',
    templateUrl: './supplierLayout.component.html',
    styleUrls: ['./supplierLayout.component.css']
})
export class supplierLayoutComponent {

    form = new FormGroup({
    });

    constructor(private fb: FormBuilder) { }


}
