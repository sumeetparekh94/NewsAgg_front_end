import {Injectable} from '@angular/core';
import {Advertisement} from '../Advertisement';

@Injectable()
export class AdvertService {

    constructor() {
    }

    createAdvert(advert) {
        console.log(advert);
        fetch('https://serene-harbor-64038.herokuapp.com/api/advert/insert', {
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
        return fetch('https://serene-harbor-64038.herokuapp.com/api/advert/find', {
            credentials: 'include'
        }).then(msg => {
            return msg.json();
        }).catch(() => {

        });
    }

    findOne(adId) {
        return fetch('https://serene-harbor-64038.herokuapp.com/api/advert/findOne?id=' + adId, {
            credentials: 'include'
        }).then((res) => {
            return res.json();
        }).catch(() => {
        });

    }

    update(advert: Advertisement) {
        console.log(advert);
        fetch('https://serene-harbor-64038.herokuapp.com/api/advert/update', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(advert),
            headers: {
                'content-type': 'application/json'
            }

        }).then(() => {
            window.location.reload();
        }).catch(() => {
        });

    }


    findByadvertiser(username) {
        return fetch('https://serene-harbor-64038.herokuapp.com/api/advert/findByAdvertiser?username=' + username, {
            credentials: 'include'
        }).then(msg => {
            return msg.json();
        }).catch(() => {

        });
    }

    deleteAd(id: any) {
        console.log(id)
        fetch('https://serene-harbor-64038.herokuapp.com/api/advert/delete?adId=' + id, {

            credentials: 'include',
            method: 'DELETE',

        }).then(() => {
            window.location.reload();
        }).catch(() => {
        });
    }
}
