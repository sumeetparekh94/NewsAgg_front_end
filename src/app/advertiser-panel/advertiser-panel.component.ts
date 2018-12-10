import {Component, OnInit} from '@angular/core';
import {AdvertService} from '../services/advert.service';
import {Advertisement} from '../Advertisement';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {UpdateNewsComponent} from '../update-news/update-news.component';
import {UpdateAdvertComponent} from '../update-advert/update-advert.component';
import {CreateAdvertComponent} from '../create-advert/create-advert.component';

@Component({
    selector: 'app-advertiser-panel',
    templateUrl: './advertiser-panel.component.html',
    styleUrls: ['./advertiser-panel.component.css']
})
export class AdvertiserPanelComponent implements OnInit {

    advertisement: Response | void;
    private  di

    constructor(private adServie: AdvertService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.adServie.findByadvertiser(localStorage.getItem('currentUser')).then((res) => {
            this.advertisement = res;
            console.log(res);

        });
    }
    updateAd(adId){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: adId,
            title: 'Login Here'
        };
        dialogConfig.height= 500;
        dialogConfig.width = 800;

        const dialogRef = this.dialog.open(UpdateAdvertComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog was closed');
            console.log(result);
        });
    }


    createAd() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            title: 'Login Here'
        };
        dialogConfig.height= 500;
        dialogConfig.width = 800;

        const dialogRef = this.dialog.open(CreateAdvertComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog was closed');

    }
}
