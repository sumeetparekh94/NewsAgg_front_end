import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   isLoggedIn: boolean;
   currentUser: string;
  constructor() {
    this.isLoggedIn = localStorage.hasOwnProperty('currentUser');
    this.currentUser = localStorage.getItem('currentUser');
  }

  ngOnInit() {
  }

}
