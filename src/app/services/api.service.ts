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
    userCurated ?: any[];
    search ?: any[];
}

@Injectable()
export class Api {
    baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';

    headers = new HttpHeaders({
        "Authorization":"Bearer 5pIHLNTdSTs09-cvgqNOfEJP8D8Rx0ntlwKe-Kqo7pjkv2m88fuTYmq-PkqDwaD9JzyD3bqzjRQYFarXwkiYk_FrkTluO0Ri9-4u6x9WCybjoYFCt1bp93e42gP_XHYx"
        });

    constructor(private http: HttpClient) {}
    private _searchInput = new BehaviorSubject<string>('');
    searchInput = this._searchInput.asObservable();


    private _location = new BehaviorSubject<string>('');
    location = this._location.asObservable();

    private _previousLocation = new BehaviorSubject<string>('');
    previousLocation = this._previousLocation.asObservable();
    
    private _businessList = new BehaviorSubject<BusinessList>({});
    businessList = this._businessList.asObservable();

    private _userCategories = new BehaviorSubject<string>('');
    userCategories = this._userCategories.asObservable();

    private _modal = new BehaviorSubject<boolean>(true);
    modal = this._modal.asObservable();

updateBusinessList = newBusinessList => { 
    const currentValue = this._businessList.getValue();
    this._businessList.next({...currentValue, ...newBusinessList}); 
}
getDate = () => this.http.get(this.baseUrl);    

updateLocation = newLocation => { 
    this._previousLocation.next(this._location.getValue());
    this._location.next(newLocation)
};
updateSearchInput = newLocation => this._searchInput.next(newLocation);

updateUserCategories = newList => this._userCategories.next(newList);



getLocation = location => this.http.get(this.baseUrl + '/businesses/search?location=' + location, { headers: this.headers });

updateModal = state => this._modal.next(state);

// getCategories = () => {
//     console.log('Getting all categories');
//     const location = this._location.getValue();
//     return this.http.get(this.baseUrl + '/categories', {headers: this.headers});
// }

getUserCurated = () => {
    console.log('User Curated Date');
    const location = this._location.getValue();
    const userCategories = this._userCategories.getValue();
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=' + userCategories, {headers: this.headers});
}

getFirstDate = () => {
    console.log('first date');
    const location = this._location.getValue();
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=bars&categories=coffee&categories=bubbletea&categories=culturalcenter&categories=artmuseums&categories=opera&categories=theater&categories=beer_and_wine&categories=breweries&categories=pianobars&categories=beergardens&categories=coffeeshops&categories=restaurants&categories=cideries&categories=desserts&categories=distilleries&categories=gelato&categories=juicebars&categories=milkshakebars&categories=musicvenues&categories=parks&categories=arcades', {headers: this.headers});
}

getRomantic = () => {
    console.log('romantic date');
    const location = this._location.getValue();
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=jazzandblues&categories=dancerestaurants&categories=danceclubs&categories=speakeasies&categories=cocktailbars&categories=champagne_bars&categories=resorts&categories=wineries&categories=wine_bars&categories=winetasteclasses&categories=winetastingroom&categories=winetours&categories=theater&categories=musicvenues&categories=opera&categories=artmuseums&categories=galleries&categories=steak&categories=seafood&categories=signature_cuisine&categories=hotel_bar&categories=spas&categories=aquariums&categories=hot_air_balloons', {headers: this.headers});
}

getOneOak = () => {
    console.log('one of a kind date');
    const location = this._location.getValue();
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=festivals&categories=jazzandblues', {headers: this.headers});
}

getAdventure = () => {
    console.log('adventure API called');
    const location = this._location.getValue();
    //change location back to above when done working 
    // const location = 'detroit';
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=airsoft&categories=archery&categories=axethrowing&categories=bobsledding&categories=bungeejumping&categories=canyoneering&categories=challengecourses&categories=gliding&categories=gokarts&categories=hanggliding&categories=horsebackriding&categories=hot_air_balloons&categories=paraglidin&categories=parasailing&categories=zipline&categories=hauntedhouses&categories=skiresorts&categories=badminton&categories=basketballcourts&categories=discgolf', {headers: this.headers});
}

getLastDate = () =>  {
    console.log('last date');
    const location = this._location.getValue();
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=casinos&categories=cprclasses&categories=firearmtraining&categories=archery&categories=axethrowing&categories=escapegames&categories=martialarts&categories=paintball', {headers: this.headers});
}

getReviews = id => {
    console.log('Reviews');
    return this.http.get(this.baseUrl + `/businesses/${id}/reviews`, {headers: this.headers});
}

getBusinessDetails = id => {
    console.log('Business Details');
    return this.http.get(this.baseUrl + `/businesses/${id}`, {headers: this.headers});
}

getDateSearch = () => {
    // if (!searchInput) {
    //     return this.getDate();
    // }
    const location = this._location.getValue();
    const search = this._searchInput.getValue();
    console.log('Date Search');
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&' + 'location=' + location + '&term=' + search, {headers: this.headers});

}

}
