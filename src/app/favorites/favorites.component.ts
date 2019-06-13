import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api.service';

interface Favorites {

}

interface ApiData {
    page: number;
    results: Favorites[];
    total_results: number;
    total_pages: number;
}

@Component({
    selector: 'favorites-list',
    templateUrl: './favorites.component.html',
    // styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit{
    list: Favorites[];
    event: any;

    constructor(private api: Api, private route: ActivatedRoute){}
    
    ngOnInit() {
        // this.api.ticketList.subscribe(list => this.list = list);
    }
}
