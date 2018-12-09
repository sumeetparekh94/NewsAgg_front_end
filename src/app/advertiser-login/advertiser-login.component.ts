import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {LoginService} from '../services/login.service';




@Component({
  selector: 'app-advertiser-login',
  templateUrl: './advertiser-login.component.html',
  styleUrls: ['./advertiser-login.component.css']
})
export class AdvertiserLoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService
        // private authenticationService: AuthenticationService,
        // private alertService: AlertService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;


        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        console.log(this.f.username.value);
        console.log(this.f.password.value);
        this.loginService.checkAdvert(this.f.username.value, this.f.password.value).then(xyz => {
            console.log(xyz)
            if (xyz[0] === 'true') {
                console.log('hello from the other side')
                localStorage.setItem('currentUser', this.f.username.value);
                this.router.navigate(['/agency']);
            } else {

                alert('wrong creds');
            }
        }).catch(err => {
            console.log(err);
        });

    }

}

