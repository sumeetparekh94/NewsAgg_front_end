import {Component, Inject, OnInit} from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material';

import {Router} from '@angular/router';


import {LoginService} from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    modalTitle: string;
    username: string;
    password: string;


    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private loginService: LoginService,
              ) {

        this.modalTitle = data.title;
        console.log(data);
    }
    login() {
        console.log('hello');

        this.loginService.checkLogin(this.username, this.password).then(xyz => {
            console.log('hehe')
            console.log(xyz[0])
            if (xyz[0]   === 'true') {
                console.log('sdd')
                localStorage.setItem('currentUser', this.username);
                window.location.reload();

            } else {
                alert('wrong creds');
            }

        }).catch(err => {
            console.log(err);
        });
    }}




