import { Component, OnInit } from '@angular/core';
import {SportsService} from '../services/sports.service';
import {count} from 'rxjs/operators';
import {NewsService} from '../services/news.service';

@Component({
    selector: 'app-entertainment',
    templateUrl: './entertainment.component.html',
    styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

     newsList: Response | void;
     count: number;

    constructor(private newsService: NewsService) { }

    ngOnInit() {
        this.count = 0;
        this.newsService.getTopEnter().then(xyz => {
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