import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    form = new FormGroup({
    });

    constructor(private fb: FormBuilder, private router: Router) { }

    submit() {
      const username = (<HTMLInputElement>document.getElementById('userName')).value;
      console.log(username);
      if(username == 'transporter') {
        this.router.navigateByUrl('/transporter/dashboard');
      } else if(username == 'supplier') {
        this.router.navigateByUrl('/supplier/dashboard');
      } else {
        window.location.reload();
      }
    }
}
