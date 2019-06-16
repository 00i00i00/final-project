import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Api } from '../services/api.service';

interface Location {
  city: string;
  country: string;
  address2: string; 
  address3: string; 
  state: string;
  address1: string;
  zip_code: string;
  display_address: [];
}

interface Categories {
  alias: string;
  title: string;
}

interface Businesses {
  alias: string; 
  categories: Categories[];
  id: string; 
  rating: number;
  price: string;
  display_phone: string; 
  name: string; 
  url: string;
  image_url: string;
  location: Location[];
  distance: number;
  review_count: number;

}

interface ApiData {
  total: number;
  businesses: Businesses[];
  region: {
    center: {
      latitude:number;
      longitude: number;
    }
  }
}

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  location: string;
  business: any;
  list: Businesses[];

  constructor(private api: Api, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.api.location.subscribe(data => {
    console.log(data);
    this.location = data;
    });
    
    this.api.getAdventure(this.location).subscribe((data:ApiData) => {
      console.log('Adventure data from api', data)
      this.list = data.businesses;
    });
  }

}
