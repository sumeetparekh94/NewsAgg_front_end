import {Injectable} from '@angular/core';
import {User} from '../User';

@Injectable()
export class UserService {
    private us: User;
    constructor() {
    }

    findOneUser(username) {
        return fetch('http://localhost:8080/api/user/findOne?username=' + username, {
            credentials: 'include'

        }).then(msg => {
            console.log(msg);
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }


    updateUser(user: User): void {
        this.us.firstname = user.firstname;
        this.us.lastname = user.lastname;

        this.us.username = user.username;
        this.us.email = user.email;
        this.us.password = user.password;
        this.us.preference = user.preference;
        this.us.dType = user.dType;
       fetch('http://localhost:8080/api/user/updateUser', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(this.us),
            headers: {
                'content-type': 'application/json'
            }

        }).then(msg => {


            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    insertContact(contact) {
        fetch('http://localhost:8080/api/contact/insert', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(contact),
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
