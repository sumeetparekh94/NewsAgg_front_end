import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {constructDependencies} from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {


      private userList: Response | void;

    constructor(private adminService: AdminService) { }

  ngOnInit() {
       this.adminService.getAllUsers().then((response) => {
            this.userList = response;
       });
  }
  deleteUser(userId) {
    this.adminService.deleteUser(userId).then(() => {
      window.location.reload();
    });
  }

}
