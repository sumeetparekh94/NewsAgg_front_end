import { Component, OnInit } from '@angular/core';
import {MyfeedService} from '../services/myfeed.service';

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.component.html',
  styleUrls: ['./user-subscription.component.css']
})
export class UserSubscriptionComponent implements OnInit {
    currentUser: string;
    newsList: Response | void;
    count: number;
    constructor(    private myfeedService: MyfeedService) {
        this.currentUser = localStorage.getItem('currentUser');
    }

    ngOnInit() {
        this.count = 0;
        console.log(this.currentUser)
        this.myfeedService.getMyFeed(this.currentUser).then(xyz => {
            this.newsList = xyz;
        }).catch(err => {
            console.log(err);
        });

    }


}

