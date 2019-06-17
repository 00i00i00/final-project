import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class Api {
    baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';

    headers = new HttpHeaders({
        "Authorization":"Bearer 5pIHLNTdSTs09-cvgqNOfEJP8D8Rx0ntlwKe-Kqo7pjkv2m88fuTYmq-PkqDwaD9JzyD3bqzjRQYFarXwkiYk_FrkTluO0Ri9-4u6x9WCybjoYFCt1bp93e42gP_XHYx"
        });

    constructor(private http: HttpClient) {}
    private _location = new BehaviorSubject<string>('');
    location = this._location.asObservable();

updateLocation = newLocation => this._location.next(newLocation);

getLocation = location => this.http.get(this.baseUrl + '/businesses/search?location=' + location, { headers: this.headers });

// getBusiness = location => {
//     console.log('getBusiness');
//     return this.http.get(this.baseUrl + `/businesses/search?location=${location}`, { headers: this.headers });
// }

getFirstDate = location => {
    console.log('first date');
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=aquariums', {headers: this.headers});
}

getRomantic = location => {
    console.log('romantic date');
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=jazzandblues&categories=arcades', {headers: this.headers});
}

getOneOfAKind = location => {
    console.log('one of a kind date');
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=jazzandblues&categories=arcades', {headers: this.headers});
}

getAdventure = location => {
    console.log('adventure date');
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=airsoft&categories=archery&categories=axethrowing&categories=bobsledding&categories=bungeejumping&categories=canyoneering&categories=challengecourses&categories=escapegames&categories=gliding&categories=gokarts&categories=hanggliding&categories=horsebackriding&categories=hot_air_balloons&categories=paraglidin&categories=parasailing&categories=zipline&categories=hauntedhouses', {headers: this.headers});
}

getLastDate = location =>  {
    console.log('last date');
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=jazzandblues&categories=arcades', {headers: this.headers});
}

getReviews = id => {
    console.log('Reviews');
    return this.http.get(this.baseUrl + `/businesses/${id}/reviews`, {headers: this.headers});
}


}
