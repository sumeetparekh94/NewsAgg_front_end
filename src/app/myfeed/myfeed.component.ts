import { Component, OnInit } from '@angular/core';
import {MyfeedService} from '../services/myfeed.service';

@Component({
  selector: 'app-myfeed',
  templateUrl: './myfeed.component.html',
  styleUrls: ['./myfeed.component.css']
})
export class MyfeedComponent implements OnInit {
  private currentUser: string;
    private newsList: Response | void;
    private count: number;
  constructor(    private myfeedService: MyfeedService) {
    this.currentUser = localStorage.getItem('currentUser');
  }


  ngOnInit() {
      this.count = 0;
      console.log(this.currentUser)
      this.myfeedService.getMyFeed(this.currentUser).then(xyz => {
          this.newsList = xyz;
      }).catch(err => {
          console.log(err);
      });

  }

}
