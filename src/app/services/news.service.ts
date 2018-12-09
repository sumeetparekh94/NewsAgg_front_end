import {Injectable} from '@angular/core';

@Injectable()
export class NewsService {

    constructor() {
    }

    getTopNews() {
        return fetch('http://localhost:8080/api/newshome', {
            credentials: 'include'
        }).then(msg => {
            console.log(msg);
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }


    getTopEnter() {
        return fetch('http://localhost:8080/api/entertainmenthome', {
            credentials: 'include'
        }).then(msg => {
            console.log(msg);
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    getTopScience() {
        return fetch('http://localhost:8080/api/sciencehome', {
            credentials: 'include'
        }).then(msg => {
            console.log(msg);
            return msg.json();
        }).catch(err => {
            console.log(err);
        });
    }

    insertNews(newsStory) {
        console.log(newsStory)
        fetch('http://localhost:8080/api/news/insert', {
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

        fetch('http://localhost:8080/api/news/update',{
            credentials : 'include',
            method: 'POST',
            body: JSON.stringify(newsHome),
            headers: {
                'content-type': 'application/json'
            }
        }).then(()=>{

        });

    }

    findOne(newsId) {
        return fetch('http://localhost:8080/api/news/findone?id=' + newsId, {
            credentials: 'include'
        }).then((msg) => {
            return msg.json();
        }).catch(error => {
            console.log(error);
        });

    }
}
