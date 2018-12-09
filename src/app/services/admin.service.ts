import {Injectable} from '@angular/core';

@Injectable()
export class AdminService {
    constructor() {
    }


    findallnews() {
        return fetch('http://localhost:8080/api/newshome', {
            credentials: 'include'
        }).then((msg) => {
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    getAllUsers() {

        return fetch('http://localhost:8080/api/findallusers', {
            credentials: 'include'
        }).then(msg => {
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    deleteUser(userId) {

        return fetch('http://localhost:8080/api/deleteuser?id=' + userId, {
            credentials: 'include'
        }).then(msg => {
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }


    deleteNews(newsId) {
        return fetch('http://localhost:8080/api/deleteNews/' + newsId, {
            credentials: 'include',
            method: 'DELETE'
        }).then(msg => {
            return msg;
        }).catch(err => {
            console.log(err);
        });

    }
}
