import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class Api {
    // apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=ccf98653c165e83729605d20546c01d7';
    // constructor(private http: HttpClient) {}

    // private _ticketList = new BehaviorSubject<any[]>([]);
    // ticketList = this._ticketList.asObservable();

    // getTicket = () => this.http.get(this.apiUrl);
    
    apiUrl = 'https://api.yelp.com/v3/events';
    constructor(private http: HttpClient) { }

    getEvent = () =>  this.http.get(this.apiUrl);
}