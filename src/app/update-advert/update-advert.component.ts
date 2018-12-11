import {Component, Inject, OnInit} from '@angular/core';
import {AdvertService} from '../services/advert.service';
import {Advertisement} from '../Advertisement';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-update-advert',
    templateUrl: './update-advert.component.html',
    styleUrls: ['./update-advert.component.css']
})
export class UpdateAdvertComponent implements OnInit {

     id: number;
     title: string;
     full_link: string;
     image_url: string;
     advert: Advertisement;

    constructor(private advertService: AdvertService, @Inject(MAT_DIALOG_DATA) public data) {
        this.advert = new Advertisement();
        this.id = data.id;
    }


    ngOnInit() {
        this.advertService.findOne(this.id).then((res) => {
            this.title = res.title;
            this.full_link = res.full_link;
            this.image_url = res.img_url;

        }).catch(() => {

        });
    }

    onSubmit() {
        this.advert.id = this.id;
        this.advert.title = this.title;
        this.advert.image_url = this.image_url;
        this.advert.full_link = this.full_link;
        this.advert.source = localStorage.getItem('currentUser');
        this.advertService.update(this.advert);
    }

}
