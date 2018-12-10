import {Injectable} from '@angular/core';
import {Advertisement} from '../Advertisement';

@Injectable()
export class AdvertService {

    constructor() {
    }

    createAdvert(advert) {
        console.log(advert);
        fetch('http://localhost:8080/api/advertisement', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(advert),
            headers: {
                'content-type': 'application/json'
            }
        }).then(msg => {
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    findall() {
        return fetch('http://localhost:8080/api/advert/find', {
            credentials: 'include'
        }).then(msg => {
            return msg.json();
        }).catch(() => {

        });
    }

    findOne(adId) {
        return fetch('http://localhost:8080/api/advert/findOne?id=' + adId, {
            credentials: 'include'
        }).then((res) => {
            return res.json();
        }).catch(() => {
        });

    }

    update(advert: Advertisement) {
        console.log(advert)
        fetch('http://localhost:8080/api/advert/update', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(advert),
            headers: {
                'content-type': 'application/json'
            }

        }).then(() => {

        }).catch(() => {
        });

    }


    findByadvertiser(username) {
        return fetch('http://localhost:8080/api/advert/findByAdvertiser?username=' + username, {
            credentials: 'include'
        }).then(msg => {
            return msg.json();
        }).catch(() => {

        });
    }
}
