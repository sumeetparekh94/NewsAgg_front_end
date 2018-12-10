import { Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.css']
})
export class AdvertCardComponent implements OnInit {
    @Input() title: String;
    @Input() image_url: String;
    @Input() full_link: String;
    @Input() id: number;


    constructor(private router: Router) {
    }

  ngOnInit() {
  }



}







