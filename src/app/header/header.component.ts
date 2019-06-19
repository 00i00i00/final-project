import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Api } from '../services/api.service';

interface Categories {
  alias: string;
  title: string;
}

interface Location {
  city: string;
  country: string;
  address1: string;
  zip_code: string;
  state: string;
}

interface Businesses {
  id: string;
  alias: string;
  image_url: string;
  is_closed: false;
  url: string;
  review_count: number;
  rating: number;
  price: string;
  phone: string;
  categories: Categories[];
  name: string;
  location: Location[];
}

interface ApiData {
  businesses: Businesses[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  location: string;
  locationInput: string;
  searchInput: string;
  list: Businesses[];
  showModal: boolean = true;
  constructor(private api: Api, private route: ActivatedRoute, private router: Router){}
  logoNumber: number = 1;

  ngOnInit() {
    this.api.location.subscribe(data => {
      console.log(data);
      this.location = data;
      });
  }


  getDateSearch = (location) => {
    this.api.getDateSearch(location, this.searchInput).subscribe((data: {results: []}) => {
      console.log('Date input search from api', data.results);
      this.api.updateDateList(data.results);
    });

    // this.api.getDateSearch(location, this.searchInput).subscribe((data: {businesses: []}) => {
    //   console.log('Date input search from api', data.businesses);
    //   this.api.updateDateList(data.businesses);
    // });
  }

}
