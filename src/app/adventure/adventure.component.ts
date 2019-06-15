import { Component, OnInit } from '@angular/core';

interface Location {
  city: string;
  country: string;
  address2: string; 
  address3: string; 
  state: string;
  address1: string;
  zip_code: string;
}

interface Categories {
  alias: string;
  title: string;
}

interface Businesses {
  rating: number;
  price: string;
  phone: string; 
  id: string; 
  alias: string; 
  categories: Categories[];
  review_count: number;
  name: string; 
  url: string;
  image_url: string;
  location: Location[];
  distance: number;
}

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
