import {Component, OnInit} from '@angular/core';
import {AdminService} from '../services/admin.service';

@Component({
    selector: 'app-contact-manager',
    templateUrl: './contact-manager.component.html',
    styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
    contacts: Response | void;
    constructor(private adminService: AdminService) {
    }

    ngOnInit() {
        this.adminService.findAllContacts().then((response) => {
            this.contacts = response;
        }).catch((err) => {

        });
    }


}
