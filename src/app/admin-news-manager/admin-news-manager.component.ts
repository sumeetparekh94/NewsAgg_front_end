import {Component, OnInit} from '@angular/core';
import {AdminService} from '../services/admin.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import {CreateNewsComponent} from '../create-news/create-news.component';
import {UpdateNewsComponent} from '../update-news/update-news.component';

@Component({
    selector: 'app-admin-news-manager',
    templateUrl: './admin-news-manager.component.html',
    styleUrls: ['./admin-news-manager.component.css']
})
export class AdminNewsManagerComponent implements OnInit {

    private newsList: Response | void;


    constructor(private adminService: AdminService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.adminService.findallnews().then((msg) => {
            this.newsList = msg;
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteNews(newsId) {
        this.adminService.deleteNews(newsId).then(() => {
            window.location.reload();
        }).catch(err => {
            console.log(err);
        });
    }


    createStory() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Login Here'
        };
        dialogConfig.height = 500;
        dialogConfig.width = 800;

        const dialogRef = this.dialog.open(CreateNewsComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog was closed');
            console.log(result);
        });
    }
    updateNews(newsId){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: newsId,
            title: 'Login Here'
        };
        dialogConfig.height= 500;
        dialogConfig.width = 800;

        const dialogRef = this.dialog.open(UpdateNewsComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog was closed');
            console.log(result);
        });
    }

}
