import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../User';
import {UserService} from '../services/user.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


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

    isTec: boolean;
    user: User;
    prefs: string;
    id: number;

    constructor(private userService: UserService, @Inject(MAT_DIALOG_DATA) public data) {
      this.id = data.id;
    }

    ngOnInit() {
        this.userService.findOneUser(this.id).then((response) => {
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
