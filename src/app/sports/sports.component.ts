import { Component, OnInit } from '@angular/core';
import {SportsService} from '../services/sports.service';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

    private newsList: Response | void;
    private count: number;

    constructor(private sportsService: SportsService) { }

    ngOnInit() {
        this.count = 0;
        this.sportsService.getTopSports().then(xyz => {
            console.log(Object.keys(xyz));
            this.newsList = xyz;
        }).catch(err => {
            console.log(err);
        });
    }

    increaseCount() {
        this.count += 1;
        return count;
    }
}
