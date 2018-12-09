import { Injectable } from '@angular/core';

@Injectable()
export class AdvertService {

    constructor() { }
    createAdvert(advert) {
        console.log(advert)
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
}
