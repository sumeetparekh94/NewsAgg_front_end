import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../services/comment.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-add-comment',
    templateUrl: './add-comment.component.html',
    styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

    @Input() username: string;
    @Input() comment: string;
    @Input() newsId: number;
    userId: string;
    commentService: CommentService;

    constructor() {
        // this.newsId = data.newsId;
        this.userId = localStorage.getItem('currentUser');
    }

    ngOnInit() {

    }

    onSubmit() {
        this.commentService = new CommentService();
        this.commentService.insertComment(this.comment, this.newsId, this.userId).then(() => {
        }).catch(() => {
        });


    }

}
