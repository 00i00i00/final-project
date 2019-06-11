import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Api {
    apiUrl = 'https://api.yelp.com/v3/events';
    constructor(private http: HttpClient) { }

getEvent = () =>  this.http.get(this.apiUrl);

}