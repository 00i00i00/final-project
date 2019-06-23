import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
 

interface BusinessList {
    adventure ?: any[];
    romantic ?: any[];
    favorites ?: any[];
    oneOAK ?: any[];
    firstDate ?: any[];
    lastDate ?: any[];
}

@Injectable()
export class Api {
    baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';

    headers = new HttpHeaders({
        "Authorization":"Bearer 5pIHLNTdSTs09-cvgqNOfEJP8D8Rx0ntlwKe-Kqo7pjkv2m88fuTYmq-PkqDwaD9JzyD3bqzjRQYFarXwkiYk_FrkTluO0Ri9-4u6x9WCybjoYFCt1bp93e42gP_XHYx"
        });

    constructor(private http: HttpClient) {}
    
    private _location = new BehaviorSubject<string>('');
    location = this._location.asObservable();
    
    private _businessList = new BehaviorSubject<BusinessList>({});
    businessList = this._businessList.asObservable();


updateBusinessList = newBusinessList => { 
    const currentValue = this._businessList.getValue();
    this._businessList.next({...currentValue, ...newBusinessList}); 
}
getDate = () => this.http.get(this.baseUrl);    

updateLocation = newLocation => this._location.next(newLocation);

getLocation = location => this.http.get(this.baseUrl + '/businesses/search?location=' + location, { headers: this.headers });

getFirstDate = () => {
    console.log('first date');
    const location = this._location.getValue();
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=aquariums&categories=parks&categories=axethrowing&categories=gokarts&categories=bars&categories=coffee', {headers: this.headers});
}

getRomantic = () => {
    console.log('romantic date');
    const location = this._location.getValue();
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=jazzandblues&categories=dancerestaurants&categories=danceclubs&categories=speakeasies&categories=cocktailbars&categories=champagne_bars&categories=skiresorts&categories=resorts&categories=wineries&categories=wine_bars&categories=winetasteclasses&categories=winetastingroom&categories=winetours&categories=theater&categories=musicvenues&categories=opera&categories=artmuseums&categories=galleries&categories=steak&categories=seafood&categories=signature_cuisine&categories=hotel_bar', {headers: this.headers});
}

getOneOak = () => {
    console.log('one of a kind date');
    const location = this._location.getValue();
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=jazzandblues&categories=arcades', {headers: this.headers});
}

getAdventure = () => {
    console.log('adventure API called');
    // const location = this._location.getValue();
    //change location back to above when done working 
    const location = 'detroit';
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=airsoft&categories=archery&categories=axethrowing&categories=bobsledding&categories=bungeejumping&categories=canyoneering&categories=challengecourses&categories=escapegames&categories=gliding&categories=gokarts&categories=hanggliding&categories=horsebackriding&categories=hot_air_balloons&categories=paraglidin&categories=parasailing&categories=zipline&categories=hauntedhouses', {headers: this.headers});
}

getLastDate = () =>  {
    console.log('last date');
    const location = this._location.getValue();
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=galleries&categories=casinos&categories=choirs&categories=culturalcenter&categories=festivals&categories=jazzandblues&categories=artmuseums&categories=musicvenues&categories=opera&categories=theater&categories=spas&categories=cprclasses&categories=firearmtraining&categories=silentdisco&categories=beer_and_wine&categories=breweries&categories=bubbletea&categories=cideries&categories=desserts&categories=distilleries&categories=gelato&categories=juicebars&categories=milkshakebars&categories=bars&categories=beergardens&categories=coffeeshops&categories=restaurants&categories=pianobars', {headers: this.headers});
}

getReviews = id => {
    console.log('Reviews');
    return this.http.get(this.baseUrl + `/businesses/${id}/reviews`, {headers: this.headers});
}

getBusinessDetails = id => {
    console.log('Business Details');
    return this.http.get(this.baseUrl + `/businesses/${id}`, {headers: this.headers});
}

getDateSearch = (searchInput) => {
    if (!searchInput) {
        return this.getDate();
    }
    const location = this._location.getValue();
    console.log('Date Search');
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&' + 'location=' + location + '&term=' + searchInput, {headers: this.headers});
}

}
