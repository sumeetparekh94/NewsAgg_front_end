import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

    newsList: Response | void;
    count: number;

    constructor(private newsService: NewsService) { }

    ngOnInit() {
        this.count = 0;
        this.newsService.getTopBusiness().then(xyz => {
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
