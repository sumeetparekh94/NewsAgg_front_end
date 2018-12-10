import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {NewsService} from '../services/news.service';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
     contact: Contact;
     message: string;
     name: string;
     email: string;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.contact = new Contact();
    }

    onSubmit() {
        console.log(this.message);
        console.log(this.name);
        console.log(this.email);
        this.contact.email = this.email;
        this.contact.name = this.name;
        this.contact.message = this.message;
        this.userService.insertContact(this.contact);
        alert('Thanks for reaching out.. we will contact soon');

    }


}
