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
  cross_streets: string;
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
  info: boolean;
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

interface BusinessDetails {
  categories: Categories[];
  display_phone: string;
  hours: Hours[];
  id: string;
  alias: string;
  img_url: string;
  location: Location[];
  name: string;
  phone: string;
  photos: object[];
  price: string;
  rating: number;
  review_count: number;
  url: string;
  // attributes: object;
}

interface Hours {
  is_open_now: boolean;
  open: Open[];
}

interface Open {
  day: number;
  start: string;
  end: string;
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
  hours: Hours[];
  hour: any;
  open: Open[];
  times: any;
  day: any;
  dates: any = {0: 'Monday', 1: 'Tuesday', 2: 'Wednesday', 3: 'Thursday', 4: 'Friday', 5: 'Saturday', 6: 'Sunday' };
  favorite: boolean;
  favoriteList: object[] = [];
  biz: Businesses[];
  category: any;
  categories: Categories[];

  constructor(private api: Api, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.api.location.subscribe(data => {
      console.log(data);
      this.location = data;
      });
   
    this.api.getFirstDate(this.location).subscribe((data:ApiData) => {
      console.log('First Date data from api', data);
      this.list = data.businesses;
    });
    
  }

  moreInfo = (id, business) => {

    // this.id = id;
    // console.log(this.id);
    business.info = !business.info;

    this.api.getBusinessDetails(id).subscribe((data:BusinessDetails) => {
      console.log(`API Call: Business Details from id`, data);
      this.hours = data.hours;
      this.open = data.hours[0].open;
      //above means now this.open is the array of objects
      this.day = this.open[0].day;
    });

    this.api.getReviews(id).subscribe((data:ReviewData) => {
      console.log(`API Call: Reviews from id`, data);
      this.reviews = data.reviews;
    });
    
  }

  favoriteBusiness = business => {
    business.favoriteBusiness = !business.favoriteBusiness;
    this.biz = business;
    this.favoriteList.push(this.biz);
    this.api.updateFavorites(this.favoriteList);
    
  };

}
