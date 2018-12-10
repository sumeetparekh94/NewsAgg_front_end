import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
    constructor() {
    }

    checkLogin(username, password) {
        console.log(username);
        console.log(username, password);
        return fetch('https://serene-harbor-64038.herokuapp.com/api/login?username=' + username + '&password=' + password, {
            credentials: 'include'
        }).then(msg => {

            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    checkAdmin(username, password) {
        console.log(username);
        console.log(username, password);
        return fetch('https://serene-harbor-64038.herokuapp.com/api/admin/login?username=' + username + '&password=' + password, {
            credentials: 'include',

        }).then(msg => {


            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }


    checkAgency(username, password) {
        console.log(username, password);
        return fetch('https://serene-harbor-64038.herokuapp.com/api/agency/login?username=' + username + '&password=' + password, {
            credentials: 'include',
        }).then(msg => {
            return msg.json();
        }).catch(err => {
            console.log(err);
        });

    }

    checkAdvert(username, password) {
        console.log(username, password);
        return fetch('https://serene-harbor-64038.herokuapp.com/api/advert/login?username=' + username + '&password=' + password, {
            credentials: 'include',
        }).then(msg => {
            return msg.json();
        }).catch(err => {
            console.log(err);
        });

    }
}
