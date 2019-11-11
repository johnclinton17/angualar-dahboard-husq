import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { NgxSplitInputModule } from 'ngx-splitinput';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-30%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
       ])//,
      // transition(':leave', [
      //   animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      // ])
    ]),
    trigger('FadeAnimation', [

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
    //   transition(':leave',
    //     animate(300, style({ opacity: 0 })))
     ])
  ]
})
export class LoginComponent implements OnInit {


  hideHeader = true;
  showForm = true;
  showOtp = false;


  constructor(private router: Router,public appload: AppComponent) {
  
   }

  ngOnInit() {
    
    this.appload.loaderfunction(true);
  }


  toggleOtp(){

    this.showOtp = true;
    this.showForm = false;

    var divToChange = document.getElementById('otp-container');
    divToChange.className = "col-md-7 content-login otpOpened";
  }


  toggleForm(){
    this.showForm = true;
    this.showOtp = false;
    var divToChange = document.getElementById('otp-container');
    divToChange.classList.remove("otpOpened");
  }

  login(){
    this.appload.loaderfunction(false);
      this.router.navigate(['/home']);
  }

 

}
