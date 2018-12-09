import { Component, OnInit } from '@angular/core';
import {count} from 'rxjs/operators';
import {NewsService} from '../services/news.service';

@Component({
    selector: 'app-science',
    templateUrl: './science.component.html',
    styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

    private newsList: Response | void;
    private count: number;

    constructor(private newsService: NewsService) { }

    ngOnInit() {
        this.count = 0;
        this.newsService.getTopScience().then(xyz => {
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