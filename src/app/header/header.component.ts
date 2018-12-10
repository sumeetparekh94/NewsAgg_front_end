import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import {ReaderProfileComponent} from '../reader-profile/reader-profile.component';
import {RegistrationComponent} from '../registration/registration.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public isLoggedIn: boolean;
    public currUser: string;
    private router: Router;

    constructor(public dialog: MatDialog, private router: Router) {
        this.isLoggedIn = localStorage.hasOwnProperty('currentUser');
        this.currUser = localStorage.getItem('currentUser');
    }


    ngOnInit() {
    }

    logout() {
        this.isLoggedIn = false;
        this.currUser = '';
        localStorage.removeItem('currentUser');
        this.router.navigate('/home');
    }

    openModal() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Login Here'
        };


        const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog was closed');
            console.log(result);
        });
    }


    openProfile() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Login Here'
        };
        dialogConfig.height = 500;


        const dialogRef = this.dialog.open(ReaderProfileComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog was closed');
            console.log(result);
        });
    }

    register() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.height = 500;


        const dialogRef = this.dialog.open(RegistrationComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog was closed');
            console.log(result);
        });
    }


}
