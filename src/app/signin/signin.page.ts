/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthenticateService } from '../services/authentication.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],

})
export class SigninPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  validations_form: FormGroup;
  errorMessage = '';
  signInForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;

  
      // eslint-disable-next-line @typescript-eslint/naming-convention
      validation_messages = {
        'email': [
          { type: 'required', message: 'Email is required.' },
          { type: 'pattern', message: 'Enter a valid email.' }
        ],
        'password': [
          { type: 'required', message: 'Password is required.' },
          { type: 'minlength', message: 'Password must be at least 6 characters long.' }
        ]
      };

  constructor
    (private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder) { }
    
    ngOnInit() {

      this.validations_form = this.formBuilder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(5),
          Validators.required
        ])),
      });
    }


  redirectLoggedUserToProfilePage() {
    throw new Error('Method not implemented.');
  }



    loginUser(value) {
      this.authService.loginUser(value)
        .then(res => {
          console.log(res);
          this.errorMessage = '';
          this.navCtrl.navigateForward('/dashboard');
        }, err => {
          this.errorMessage = err.message;
        });
    }

    goToRegisterPage() {
      this.navCtrl.navigateForward('/signup');
    }

  }
