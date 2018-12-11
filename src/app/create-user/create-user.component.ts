import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {RegisterService} from '../services/register.service';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
    dType: string;
    user: User;
    registerService: RegisterService;

    constructor() {
    }

    ngOnInit() {

    }

    onSubmit() {
        this.user.dType = this.dType;
        this.user.username = this.username;
        this.user.firstname = this.firstname;
        this.user.email = this.email;
        this.user.password = this.password;
        this.registerService.insertUser(this.user).then(() => {
            window.location.reload();
        });
    }

}
