import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-news-card',
    templateUrl: './news-card.component.html',
    styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
    @Input() headline: String;
    @Input() imageUrl: String;
    @Input() description: String;
    @Input() url: String;
    @Input() id: number;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    openFull() {

        this.router.navigate(['news/fullStory'], {queryParams: {id: this.id}});
    }

}
