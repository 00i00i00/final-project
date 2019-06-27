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
  hoursDetails: boolean;
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
  selector: 'app-last-date',
  templateUrl: './last-date.component.html',
  styleUrls: ['./last-date.component.css']
})
export class LastDateComponent implements OnInit {
  location: string;
  business: any;
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
  favoriteList: Businesses[] = [];
  biz: Businesses[];
  category: any;
  categories: Categories[];
  collapsedTimes: boolean = true;

  constructor(private api: Api, private route: ActivatedRoute){}

  ngOnInit() {
    this.api.location.subscribe(location => {
      this.api.previousLocation.subscribe(previous => {
        if (previous !== location) {
          this.componentApiCall();
        }
      })
    });
    this.api.businessList.subscribe(list => {
      if (!list.lastDate) {
        this.componentApiCall();
      }

      if (list.favorites) {
        this.favoriteList = list.favorites;
      } 

      this.list = list.lastDate;
    });
  }

  componentApiCall = () => this.api.getLastDate().subscribe((data: ApiData) => {
    console.log('Adventure data from api', data);
    this.list = data.businesses;
    this.categories = data.businesses[0].categories;
    this.api.updateBusinessList({ lastDate: this.list });
  });

  moreInfo = (id, business) => {

   const currentState = business.info;
    this.list.forEach(item => item.info = false);
    business.info = !currentState;

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

collapseInfo = business => {
  const currentState = business.info;
  this.list.forEach(item => item.info = false);
  business.info = !currentState;
} 

expandHours = () => {
  this.collapsedTimes = !this.collapsedTimes;
}

favoriteBusiness = business => {
  business.favorite = !business.favorite;
  console.log('heart clicked', business);
    if (business.favorite) {
      this.favoriteList = [...this.favoriteList, business];
      console.log(this.favoriteList);
    } else {
      this.favoriteList = this.favoriteList.filter(b => b.favorite);
      console.log('Removed from this.favoriteList');
    }
    this.api.updateBusinessList({ favorites: this.favoriteList });
  }
}