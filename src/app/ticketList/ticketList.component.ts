import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api.service';

interface Tickets {

}

interface ApiData {
    page: number;
    results: Tickets[];
    total_results: number;
    total_pages: number;
}

@Component({
    selector: 'ticket-list',
    templateUrl: './ticketList.component.html',
    // styleUrls: ['./ticketList.component.css']
})

export class TicketsComponent implements OnInit{
    list: Tickets[];
    event: any;

    constructor(private api: Api, private route: ActivatedRoute){}
    
    ngOnInit() {
        // this.api.ticketList.subscribe(list => this.list = list);
    }
}
