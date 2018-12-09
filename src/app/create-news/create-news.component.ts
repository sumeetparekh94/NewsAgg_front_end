import {Component, OnInit} from '@angular/core';
import {NewsHome} from '../newsHome';
import {NewsService} from '../services/news.service';

@Component({
    selector: 'app-create-news',
    templateUrl: './create-news.component.html',
    styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
    private title: string;
    private imgUrl: string;
    private desc: string;
    private newsUrl: string;
    private story: string;
    private newsHome: NewsHome;
    private source: string;
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