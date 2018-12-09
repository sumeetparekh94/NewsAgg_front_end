import { Component, OnInit } from '@angular/core';
import {NewsCardComponent} from '../news-card/news-card.component';
import {NewsService} from '../services/news.service';
import {count} from 'rxjs/operators';
import {LoginComponent} from '../login/login.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private newsList: Response | void;
    private count: number;

  constructor(  private newsService: NewsService) { }

  ngOnInit() {
      this.count = 0;
    this.newsService.getTopNews().then(xyz => {
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
