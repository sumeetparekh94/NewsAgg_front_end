import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../services/news.service';

@Component({
    selector: 'app-full-story',
    templateUrl: './full-story.component.html',
    styleUrls: ['./full-story.component.css']
})
export class FullStoryComponent implements OnInit {
    private id: number;
    private headline: string;
    private fullStory: string;
    private image_url: string;

    constructor(private route: ActivatedRoute, private newsService: NewsService) {
        this.route.queryParams
            .subscribe(params => {
                console.log(params); // {order: "popular"}

                this.id = params.id;
                console.log(this.id); // popular
            });
    }

    ngOnInit() {
        this.newsService.findOne(this.id).then((res) => {
            console.log(res);
            console.log(res.headline);
            this.headline = res.headline;
            this.image_url = res.image_url;
            this.fullStory = res.fullStory;
        });

    }

}
