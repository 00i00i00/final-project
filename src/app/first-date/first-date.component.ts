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
  selector: 'app-first-date',
  templateUrl: './first-date.component.html',
  styleUrls: ['./first-date.component.css']
})
export class FirstDateComponent implements OnInit {
  location: string;
  business: any;
  list: Businesses[];
  id: string;
  reviews: Reviews[];
  review: any;
  info: boolean = false;
  reviewId: Businesses[];

  constructor(private api: Api, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.api.location.subscribe(data => {
      console.log(data);
      this.location = data;
      });
   
    this.api.getFirstDate(this.location).subscribe((data:ApiData) => {
      console.log('First Date data from api', data);
      this.list = data.businesses;
      this.id = data.businesses["id"];
      console.log(this.id)
      // this.id = this.list.id;
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
