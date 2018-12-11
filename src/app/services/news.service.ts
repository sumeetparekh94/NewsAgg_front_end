import {Injectable} from '@angular/core';

@Injectable()
export class NewsService {

    constructor() {
    }

    getTopNews() {
        return fetch('https://serene-harbor-64038.herokuapp.com/api/newshome', {
            credentials: 'include'
        }).then(msg => {
            console.log(msg);
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    getTopBusiness() {
        return fetch('https://serene-harbor-64038.herokuapp.com/api/businesshome', {
            credentials: 'include'
        }).then(msg => {
            console.log(msg);
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    getTopEnter() {
        return fetch('https://serene-harbor-64038.herokuapp.com/api/entertainmenthome', {
            credentials: 'include'
        }).then(msg => {
            console.log(msg);
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    getTopScience() {
        return fetch('https://serene-harbor-64038.herokuapp.com/api/sciencehome', {
            credentials: 'include'
        }).then(msg => {
            console.log(msg);
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    insertNews(newsStory) {
        console.log(newsStory);
        fetch('https://serene-harbor-64038.herokuapp.com/api/news/insert', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(newsStory),
            headers: {
                'content-type': 'application/json'
            }

        }).then(msg => {


            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    updateNews(newsHome) {

        fetch('https://serene-harbor-64038.herokuapp.com/api/news/update', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(newsHome),
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => {

        });

    }

    findOne(newsId) {
        return fetch('https://serene-harbor-64038.herokuapp.com/api/news/findone?id=' + newsId, {
            credentials: 'include'
        }).then((msg) => {
            return msg.json();
        }).catch(error => {
            console.log(error);
        });

    }

    findByNewsAgency(newsId) {
        return fetch('https://serene-harbor-64038.herokuapp.com/api/agency/findByAgency?username=' + newsId, {
            credentials: 'include'
        }).then((msg) => {
            return msg.json();
        }).catch(error => {
            console.log(error);
        });

    }
}
