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
  favorite: boolean;
  fullWidth: boolean;
  imgSize: boolean;

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
  // info: boolean;
  
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
    selector: 'favorites-list',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit{
  location: string;
  business: Businesses[];
  list: Businesses[];
  id: Businesses[];
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
  favoritesList: Businesses[];
  biz: any;
  category: any;
  categories: Categories[];

  constructor(private api: Api, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.api.location.subscribe(data => {
    console.log(data);
    this.location = data;
    });
    
   this.api.favoriteList.subscribe(list => {
    this.favoritesList = list;
    console.log(this.favoritesList);
    this.categories = list[0].categories;
    console.log('categories', this.categories);

   });
  }

  moreInfo = (id, biz) => {

    const currentState = biz.info;
    this.favoritesList.forEach(item => item.info = false);
    biz.info = !currentState;

  

    this.favoritesList.forEach(item => item.fullWidth = false);
    this.favoritesList.forEach(item => item.imgSize = false);



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
      
      
    biz.fullWidth = !biz.fullWidth;
    biz.imgSize = !biz.imgSize;

}

favoriteBusiness = biz => {
//   business.favorite = !business.favorite;
    const index = this.favoritesList.indexOf(biz);
    console.log('index', index);
    this.favoritesList.splice(index, 1);
    this.api.updateFavorites(this.favoritesList);
}

}
