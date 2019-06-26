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
  hoursDetails: boolean;
}

interface ApiData {
  total: number;
  businesses: Businesses[];
  region: {
    center: {
      latitude: number;
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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  location: string;
  locationInput: string;
  searchInput: string;
  list: Businesses[];
  showModal: boolean = true;
  business: any;
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
  collapsedTimes: boolean = true;
  searchList: any;

  constructor(private api: Api, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
        this.api.businessList.subscribe(list => {
          if (!list.search) {
            this.api.getDateSearch().subscribe((data: ApiData) => {
              console.log('User input search data from api', data);
              this.list = data.businesses;
              this.categories = data.businesses[0].categories;
              this.api.updateBusinessList({ search: this.list });
            });
          }
          if (list.favorites) {
            this.favoriteList = list.favorites;
          }  
    
          this.searchList = list.search;
        });
      }
    
          getDateSearch = () => {
            this.api.getDateSearch(this.searchInput).subscribe((data: {businesses: []}) => {
              console.log('Date input search from api', data.businesses);
              this.api.updateBusinessList(data.businesses);
        
            });
        
          }
        }