import {Component, OnInit} from '@angular/core';
import {AdminService} from '../services/admin.service';
import {constructDependencies} from '@angular/core/src/di/reflective_provider';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CreateNewsComponent} from '../create-news/create-news.component';
import {CreateUserComponent} from '../create-user/create-user.component';
import {UpdateUserComponent} from '../update-user/update-user.component';

@Component({
    selector: 'app-user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {


    userList: Response | void;

    constructor(private adminService: AdminService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.adminService.getAllUsers().then((response) => {

            this.userList = response;
            console.log(response);
        });
    }


    updateUser(userId) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: userId,
            title: 'Login Here'
        };
        dialogConfig.height = 500;
        dialogConfig.width = 800;

        const dialogRef = this.dialog.open(UpdateUserComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog was closed');
            console.log(result);
        });
    }

    deleteUser(userId) {
        this.adminService.deleteUser(userId).then(() => {
            window.location.reload();
        });
    }

    createUser() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Login Here'
        };
        dialogConfig.height = 500;
        dialogConfig.width = 800;

        const dialogRef = this.dialog.open(CreateUserComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog was closed');
            console.log(result);
        });
    }

}
