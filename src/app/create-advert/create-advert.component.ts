import {Component, OnInit} from '@angular/core';
import {Advertisement} from '../Advertisement';
import {AdvertService} from '../services/advert.service';

@Component({
    selector: 'app-create-advert',
    templateUrl: './create-advert.component.html',
    styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent implements OnInit {


     title: string;
     image_url: string;
     full_link: string;
     ad: Advertisement;

    constructor(private advertService: AdvertService) {
    }

    ngOnInit() {
        this.ad = new Advertisement();
    }

    onSubmit() {

        this.ad.full_link = this.full_link;
        this.ad.image_url = this.image_url;
        this.ad.title = this.title;
        this.ad.source = localStorage.getItem('currentUser')
        this.advertService.createAdvert(this.ad);
        window.location.reload()

    }

}
