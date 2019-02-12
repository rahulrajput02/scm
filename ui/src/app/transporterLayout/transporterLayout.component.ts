import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-transporterLayout',
    templateUrl: './transporterLayout.component.html',
    styleUrls: ['./transporterLayout.component.css']
})
export class transporterLayoutComponent {

    form = new FormGroup({
    });

    constructor(private fb: FormBuilder) { }


}
