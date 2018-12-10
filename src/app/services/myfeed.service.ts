import {Injectable} from '@angular/core';

@Injectable()
export class MyfeedService {

    constructor() {
    }

    getMyFeed(userId) {
        console.log('hea')
        console.log(userId);

        return fetch('https://serene-harbor-64038.herokuapp.com/api/myfeed?username=' + userId, {
        credentials: 'include'
    }).
        then(msg => {
            console.log(msg);
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }
}
