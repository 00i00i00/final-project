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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locationInput: string;
  list: Businesses[];
  showModal: boolean = true;
  constructor(private api: Api, private route: ActivatedRoute, private router: Router){}
  logoNumber: number = 1;

  ngOnInit() {
    
    // this.api.getBusiness().subscribe(data => console.log('data from api', data));
  }

  locationClick = location => {
    this.api.getLocation(location).subscribe(data => {
      this.api.updateLocation(this.locationInput);
      console.log('location data', data);
      this.showModal = !this.showModal;
    });
  }
  
  firstDateClick = () => {
    this.router.navigateByUrl('/first-date');
    this.api.getFirstDate(this.locationInput).subscribe(data => console.log('data from api', data));
  }

  romanticClick = () => {
    this.router.navigateByUrl('/filter');
    this.api.getRomantic(this.locationInput).subscribe(data => console.log('data from api', data));

  }

  // adventurousClick = () => {
  //   this.router.navigateByUrl('/filter');
  // }

  // oneOfClick = () => {
  //   this.router.navigateByUrl('/filter');
  // }

  // lastDateClick = () => {
  //   this.router.navigateByUrl('/filter');
  // }

}
