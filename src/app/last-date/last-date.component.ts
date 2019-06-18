import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

interface User {
  id: string;
  profile_url: string;
  image_url: string;
  name: string;
}

interface ReviewData {
  total: number;
  reviews: Reviews[];
}

interface Reviews {
  id: string;
  text: string;
  url: string;
  rating: number;
  time_created: string;
  user: User[];
}
@Component({
  selector: 'app-last-date',
  templateUrl: './last-date.component.html',
  styleUrls: ['./last-date.component.css']
})
export class LastDateComponent implements OnInit {
  location: string;
  business: any;
  list: Businesses[];
  id: string;
  reviews: Reviews[];
  review: any;
  info: boolean = false;
  reviewId: Businesses[];

  constructor(private api: Api, private route: ActivatedRoute){}

  ngOnInit() {
    this.api.location.subscribe(data => {
    console.log(data);
    this.location = data;
    });

    this.api.getLastDate(this.location).subscribe((data:ApiData) => {
      console.log('Last date data from api', data);
      this.list = data.businesses;    
  });
  
  // this.api.getReviews(this.id).subscribe((data:ReviewData) => {
  //   console.log(`Reviews from id`, data);
  //   this.reviews = data.reviews;
  //   this.info = !this.info;
  // });
 }
 moreInfo = id => {
  this.id = id;
  console.log(this.id);
  this.api.getReviews(this.id).subscribe((data:ReviewData) => {
    console.log(`Reviews from id`, data);
    this.reviews = data.reviews;
  });

  this.info = !this.info;
}
}