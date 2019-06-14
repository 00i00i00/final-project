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

getEvent = () =>  {
    return this.http.get(this.baseUrl + '/events', { headers: this.headers });
}

getBusiness = () => {
    console.log(this.location);
    return this.http.get(this.baseUrl + `/businesses/search?location=${this.location}`, { headers: this.headers });
}

getFirstDate = () => {
    return this.http.get(this.baseUrl + '/businesses/search?location=detroit&categories=aquariums', {headers: this.headers});
}

getRomantic = () => {
    return this.http.get(this.baseUrl + '/businesses/search?location=detroit&categories=jazzandblues&categories=arcades', {headers: this.headers});
}


}
