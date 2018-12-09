import { Injectable } from '@angular/core';

@Injectable()
export class SportsService {

    constructor() { }
    getTopSports() {
        return fetch('http://localhost:8080/api/sportshome', {
            credentials: 'include'
        }).then(msg => {
            console.log(msg);
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }
}
