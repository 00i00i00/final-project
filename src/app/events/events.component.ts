import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api.service';

interface Events {
  category: string;
  description: string;
  name: string;
}

interface ApiData {
results: Event[];
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  constructor(private api: Api, private route: ActivatedRoute){}

  ngOnInit() {

    this.api.getEvent().subscribe(data => console.log('DATA FROM API', data));    
  }
  
}
