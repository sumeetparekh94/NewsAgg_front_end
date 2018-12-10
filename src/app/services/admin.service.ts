import {Injectable} from '@angular/core';

@Injectable()
export class AdminService {
    constructor() {
    }


    findallnews() {
        return fetch('https://serene-harbor-64038.herokuapp.com/api/newshome', {
            credentials: 'include'
        }).then((msg) => {
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    getAllUsers() {

        return fetch('https://serene-harbor-64038.herokuapp.com/api/findallusers', {
            credentials: 'include'
        }).then(msg => {
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    deleteUser(userId) {

        return fetch('https://serene-harbor-64038.herokuapp.com/api/deleteuser?id=' + userId, {
            credentials: 'include'
        }).then(msg => {
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }


    deleteNews(newsId) {
        return fetch('https://serene-harbor-64038.herokuapp.com/api/deleteNews/' + newsId, {
            credentials: 'include',
            method: 'DELETE'
        }).then(msg => {
            return msg;
        }).catch(err => {
            console.log(err);
        });

    }
}
