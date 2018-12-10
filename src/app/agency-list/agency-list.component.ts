import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {forEach} from '@angular/router/src/utils/collection';
import {element} from 'protractor';
import {type} from 'os';

@Component({
    selector: 'app-agency-list',
    templateUrl: './agency-list.component.html',
    styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit {


    agencyList: Response | void;
    followedList: Response | void;

    constructor(public userService: UserService) {
    }

    ngOnInit() {
        this.userService.findAllAgencies().then((response) => {
            this.agencyList = response;
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });

        this.userService.findAgencyByUser(localStorage.getItem('currentUser')).then((response) => {
            this.followedList = response;
        }).catch((err) => {
            console.log(err);
        });
    }

    checkFollow(agencyId) {
        // @ts-ignore
        const arr = (<any[]>this.followedList);
        const ab = [];
        arr.forEach((ement) => {
            ab.push(ement.id);
        });
        const p = (<number>agencyId);
        let flag = 0;
        ab.forEach((x) => {

            if (x === agencyId) {
                flag = 1;
            }
        });
        if (flag === 1) {
            return true;
        } else {
            return false;
        }

    }

    unfollow(agencyId) {

        this.userService.unfollow(localStorage.getItem('currentUser'), agencyId).then(() => {
            window.location.reload();

        });
    }

    follow(agencyId) {
        this.userService.follow(localStorage.getItem('currentUser'), agencyId).then(() => {
            window.location.reload();

        });
    }

}
