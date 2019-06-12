import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';
// import { Router } from '@angular/router';

interface Events {
  category: string;
  description: string;
  name: string;
}

interface ApiData {
results: Events[];
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private api: Api) {}

  ngOnInit() {

    this.api.getEvent().subscribe(data => console.log('DATA FROM API', data));    
  }
  
}
