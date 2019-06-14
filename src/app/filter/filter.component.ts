import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api.service';

interface Dates {
  id: string;
  parents: string[];
  name: string;
  city: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  location: string;
  

  constructor(private api: Api, private route: ActivatedRoute) { }

  ngOnInit() {
    this.api.getBusiness().subscribe(data => console.log('data from api', data));
  }

}
