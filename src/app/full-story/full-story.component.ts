import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../services/news.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddCommentComponent} from '../add-comment/add-comment.component';

@Component({
    selector: 'app-full-story',
    templateUrl: './full-story.component.html',
    styleUrls: ['./full-story.component.css']
})
export class FullStoryComponent implements OnInit {
    id: number;
    headline: string;
    fullStory: string;
    image_url: string;
    username: string;
    isLoggedIn: boolean;
    comments: Response | void;

    constructor(private route: ActivatedRoute, public newsService: NewsService) {
        this.isLoggedIn = localStorage.hasOwnProperty('currentUser');

        this.route.queryParams
            .subscribe(params => {
                console.log(params); // {order: "popular"}

                this.id = params.id;
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

        this.newsService.getComments(this.id).then((response) => {
            this.comments = response;


        });

    }


}
