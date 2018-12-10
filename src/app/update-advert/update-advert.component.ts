import {Component, OnInit} from '@angular/core';
import {AdvertService} from '../services/advert.service';
import {Advertisement} from '../Advertisement';

@Component({
    selector: 'app-update-advert',
    templateUrl: './update-advert.component.html',
    styleUrls: ['./update-advert.component.css']
})
export class UpdateAdvertComponent implements OnInit {


    private title: string;
    private full_link: string;
    private image_url: string;
    private advert: Advertisement;

    constructor(private advertService: AdvertService) {
        this.advert = new Advertisement();
    }


    ngOnInit() {
        this.advertService.findOne(2).then((res) => {
            this.title = res.title;
            this.full_link = res.full_link;
            this.image_url = res.img_url;

        }).catch(() => {

        });
    }

    onSubmit() {
        this.advert.id = 2;
        this.advert.title = this.title;
        this.advert.image_url = this.image_url;
        this.advert.full_link = this.full_link;
        this.advert.source = localStorage.getItem('currentUser');
        this.advertService.update(this.advert);

    }

}
