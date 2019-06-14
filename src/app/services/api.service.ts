import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilterComponent } from '../filter/filter.component';

@Injectable()
export class Api {
    baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';

     headers = new HttpHeaders({
        "Authorization":"Bearer 5pIHLNTdSTs09-cvgqNOfEJP8D8Rx0ntlwKe-Kqo7pjkv2m88fuTYmq-PkqDwaD9JzyD3bqzjRQYFarXwkiYk_FrkTluO0Ri9-4u6x9WCybjoYFCt1bp93e42gP_XHYx"
        });
    constructor(private http: HttpClient) {}

getEvent = () =>  {
    return this.http.get(this.baseUrl + '/events', { headers: this.headers });
}

getBusiness = () => {
    return this.http.get(this.baseUrl + '/businesses/search?location=detroit', { headers: this.headers });
}
}
