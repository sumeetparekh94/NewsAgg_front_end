import {Component, OnInit} from '@angular/core';
import {NewsHome} from '../newsHome';
import {NewsService} from '../services/news.service';

@Component({
    selector: 'app-create-news',
    templateUrl: './create-news.component.html',
    styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
     title: string;
     imgUrl: string;
     desc: string;
     newsUrl: string;
     story: string;
     newsHome: NewsHome;
     source: string;
    constructor(private newsService: NewsService) {
    }

    ngOnInit() {
        this.newsHome = new NewsHome();
    }

    onSubmit() {
        this.newsHome.story = this.story;
        this.newsHome.desc = this.desc;
        this.newsHome.title = this.title;
        this.newsHome.imgUrl = this.imgUrl;
        this.newsHome.newsUrl = this.newsUrl;
        this.newsHome.source = localStorage.getItem('currentUser');
        console.log(this.newsHome.source);
        this.newsService.insertNews(this.newsHome);
        window.location.reload();


    }
}