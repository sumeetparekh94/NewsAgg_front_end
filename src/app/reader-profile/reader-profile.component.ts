import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../User';

@Component({
    selector: 'app-reader-profile',
    templateUrl: './reader-profile.component.html',
    styleUrls: ['./reader-profile.component.css']
})
export class ReaderProfileComponent implements OnInit {

     username: string;
     email: string;
     firstname: string;
     lastname: string;
     password: string;
     pref: string;
     isGen: boolean;
     isHea: boolean;
     isSpo: boolean;
     isSci: boolean;

     isBus: boolean;

     isEnt: boolean;
    user: User;

     isTec: boolean;
     prefs: string;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.user = new User();
        this.userService.findOneUser(localStorage.getItem('currentUser')).then((response) => {
            this.firstname = response.firstname;
            this.lastname = response.lastname;
            this.username = response.username;
            this.email = response.email;
            this.breakAndAssignpref(response);

        });


    }

    breakAndAssignpref(response) {
        this.prefs = response.split(',');
        console.log(this.prefs);
        if (this.prefs.includes('General')) {
            this.isGen = true;
        }
        if (this.prefs.includes('Sport')) {
            this.isSpo = true;
        }
        if (this.prefs.includes('Science')) {
            this.isSci = true;
        }
        if (this.prefs.includes('Technology')) {
            this.isTec = true;
        }
        if (this.prefs.includes('Entertainment')) {
            this.isEnt = true;
        }
        if (this.prefs.includes('Health')) {
            this.isHea = true;
        }
        if (this.prefs.includes('Business')) {
            this.isBus = true;
        }


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

    onSubmit() {
        this.user.firstname = this.firstname;
        this.user.lastname = this.lastname;
        this.generatePrefStr();
        this.user.username = this.username;
        this.user.email = this.email;
        this.user.password = this.password;
        this.user.preference = this.pref;

        this.user.dType = 'reader';
        this.userService.updateUser(this.user);
    }

}
