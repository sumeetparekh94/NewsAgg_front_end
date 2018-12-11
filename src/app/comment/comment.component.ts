import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


    @Input() username: String;
    @Input() comment: String;
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
