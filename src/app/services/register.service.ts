import {Injectable} from '@angular/core';

@Injectable()
export class RegisterService {
    constructor() {
    }


    insertUser(user) {

        return fetch('https://serene-harbor-64038.herokuapp.com/api/registration', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(user),
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
