import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../services/register.service';
import {User} from '../User';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

     username: string;
     email: string;
     firstname: string;
     lastname: string;
     password: string;
     preferences: string;
     isGen: boolean;
     isHea: boolean;
     pref: string;
     isSpo: boolean;
     isSci: boolean;

     isBus: boolean;

     isEnt: boolean;

     isTec: boolean;

     generalBox: boolean;

     us: User = new User();


    constructor(private registerService: RegisterService) {
    }

    ngOnInit() {
    }



    toggleVisibilityGen(e) {
        this.isGen = e.target.checked;
    }

    toggleVisibilitySpo(e) {
        this.isSpo = e.target.checked;
    }

    toggleVisibilitySci(e) {
        this.isSci = e.target.checked;
    }

    toggleVisibilityHea(e) {
        this.isHea = e.target.checked;
    }

    toggleVisibilityBus(e) {
        this.isBus = e.target.checked;
    }

    toggleVisibilityEnt(e) {
        this.isEnt = e.target.checked;
    }

    toggleVisibilityTec(e) {
        this.isTec = e.target.checked;
    }

    generatePrefStr() {
        this.pref = '';
        if (this.isGen) {
            this.pref += 'General,';
        }
        if (this.isSci) {
            this.pref += 'Science,';
        }
        if (this.isSpo) {
            this.pref += 'Sports,';
        }
        if (this.isHea) {
            this.pref += 'Health,';
        }
        if (this.isBus) {
            this.pref += 'Business,';
        }
        if (this.isEnt) {
            this.pref += 'Entertainment,';
        }
        if (this.isTec) {
            this.pref += 'Technology,';
        }


    }


    onSubmit() {
        this.generatePrefStr();
        this.us.firstname = this.firstname;
        this.us.lastname = this.lastname;

        this.us.username = this.username;
        this.us.email = this.email;
        this.us.password = this.password;
        this.us.preference = this.pref;
        this.us.dType = 'reader';
        this.registerService.insertUser(this.us).then(() => {
            console.log(this.us);
        });
    }

}
