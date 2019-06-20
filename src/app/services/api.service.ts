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
    private _dateList = new BehaviorSubject<any[]>([]);
    dateList = this._dateList.asObservable();
    private _location = new BehaviorSubject<string>('');
    location = this._location.asObservable();
    private _favoriteList = new BehaviorSubject<any[]>([]);
    favoriteList = this._favoriteList.asObservable();

updateFavorites = newBusiness => this._favoriteList.next(newBusiness);

updateDateList = newList => this._dateList.next(newList);
getDate = () => this.http.get(this.baseUrl);    
updateLocation = newLocation => this._location.next(newLocation);

getLocation = location => this.http.get(this.baseUrl + '/businesses/search?location=' + location, { headers: this.headers });

// getBusiness = location => {
//     console.log('getBusiness');
//     return this.http.get(this.baseUrl + `/businesses/search?location=${location}`, { headers: this.headers });
// }

getFirstDate = location => {
    console.log('first date');
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=aquariums,parks,axethrowing,gokarts,bars,coffee', {headers: this.headers});
}

getRomantic = location => {
    console.log('romantic date');
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=jazzandblues&categories=dancerestaurants&categories=danceclubs&categories=speakeasies&categories=cocktailbars&categories=champagne_bars&categories=skiresorts&categories=resorts&categories=wineries&categories=wine_bars&categories=winetasteclasses&categories=winetastingroom&categories=winetours&categories=theater&categories=musicvenues&categories=opera&categories=artmuseums&categories=galleries&categories=steak&categories=seafood&categories=signature_cuisine&categories=hotel_bar', {headers: this.headers});
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
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&'+ 'location=' + location + '&categories=galleries&categories=casinos&categories=choirs&categories=culturalcenter&categories=festivals&categories=jazzandblues&categories=artmuseums&categories=musicvenues&categories=opera&categories=theater&categories=spas&categories=cprclasses&categories=firearmtraining&categories=silentdisco&categories=beer_and_wine&categories=breweries&categories=bubbletea&categories=cideries&categories=desserts&categories=distilleries&categories=gelato&categories=juicebars&categories=milkshakebars&categories=bars&categories=beergardens&categories=coffeeshops&categories=restaurants&categories=pianobars', {headers: this.headers});
}

getReviews = id => {
    console.log('Reviews');
    return this.http.get(this.baseUrl + `/businesses/${id}/reviews`, {headers: this.headers});
}

getBusinessDetails = id => {
    console.log('Business Details');
    // if (savedDetails[id]) {
    //     return 
    // }
    return this.http.get(this.baseUrl + `/businesses/${id}`, {headers: this.headers});
}

getDateSearch = (location, searchInput) => {
    if (!searchInput) {
        return this.getDate();
    }
    console.log('Date Search');
    return this.http.get(this.baseUrl + '/businesses/search?limit=50&' + 'location=' + location + '&' + searchInput, {headers: this.headers});
}

}
