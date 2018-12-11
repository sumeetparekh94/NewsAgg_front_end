import {Injectable} from '@angular/core';

@Injectable()
export class CommentService {
    constructor() {
    }

    insertComment(comment, newsId, userId) {
        console.log(comment, newsId, userId);
        return fetch('https://serene-harbor-64038.herokuapp.com/api/comment/insert', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({'comment': comment, 'newsId': newsId, 'userId': userId}),
            headers: {
                'content-type': 'application/json'
            }

        }).then(msg => {

            window.location.reload()
        }).catch(err => {
            console.log(err);
        });
    }

}
