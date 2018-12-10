import { Injectable } from '@angular/core';

@Injectable()
export class SportsService {

    constructor() { }
    getTopSports() {
        return fetch('https://serene-harbor-64038.herokuapp.com/api/sportshome', {
            credentials: 'include'
        }).then(msg => {
            console.log(msg);
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }
}
