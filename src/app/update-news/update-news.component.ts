import {Component, Inject, OnInit} from '@angular/core';
import {NewsHome} from '../newsHome';
import {NewsService} from '../services/news.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-update-news',
    templateUrl: './update-news.component.html',
    styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

    private title: string;
    private desc: string;
    private imgUrl: string;
    private newsUrl: string;
    private story: string;
    private newsHome: NewsHome;

    private id: number;

    constructor(private newsService: NewsService, @Inject(MAT_DIALOG_DATA) public data) {
            this.id = this.data.id;
    }

    ngOnInit() {
        this.newsHome = new NewsHome();
        this.newsService.findOne(this.id).then((res) => {

            console.log(res)
            this.title = res.headline;
            this.story = res.story;
            this.desc = res.summary;
            this.imgUrl = res.image_url;
            this.newsUrl = res.source_link;
        }).catch(err => {
            console.log(err);
        });


    }

    onSubmit() {
        this.newsHome.id = this.id;
        this.newsHome.title = this.title;
        this.newsHome.desc = this.desc;
        this.newsHome.imgUrl = this.imgUrl;
        this.newsHome.newsUrl = this.newsUrl;
        this.newsHome.story = this.story;
        this.newsService.updateNews(this.newsHome);

    }

}
