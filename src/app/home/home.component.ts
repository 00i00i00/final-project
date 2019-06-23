import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Api } from '../services/api.service';

interface Categories {
  alias: string;
  title: string;
  parent_aliases: string[];
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

interface CategoriesAll {
  categories: Categories[];
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
  categories: Categories[];
  category: any;
  categoryList: any = [];
  categoryListString: string;
  
  constructor(private api: Api, private route: ActivatedRoute, private router: Router){}
  logoNumber: number = 1;

  ngOnInit() {
    // this.api.getCategories().subscribe((data: CategoriesAll) => { 
    //   this.categories = data.categories;
    // });

  }

  addedCategory = item => {
    this.categoryList = [...this.categoryList, item];
    console.log('list of categories', this.categoryList);
  }

  submitCategories = () => {
    this.categoryListString = this.categoryList.join('&categories=');
    console.log(this.categoryListString);
    this.api.updateUserCategories(this.categoryListString);
    this.router.navigateByUrl('/user-curated');

  }

  locationClick = (location) => {
    this.api.getLocation(location).subscribe(data => {
      this.api.updateLocation(this.locationInput);
      console.log('location data', data);
      this.showModal = !this.showModal;
    });
  }
  
  firstDateClick = () => {
    this.router.navigateByUrl('/first-date');
    // this.api.getFirstDate(this.locationInput).subscribe(data => console.log('data from api', data));
  }

  romanticClick = () => {
    this.router.navigateByUrl('/romantic');
    // this.api.getRomantic(this.locationInput).subscribe(data => console.log('data from api', data));

  }

  adventureClick = () => {
    this.router.navigateByUrl('/adventure');
    // this.api.getAdventure(this.locationInput).subscribe(data => console.log('data from api', data));

  }

  oneOfClick = () => {
    this.router.navigateByUrl('/one-oak');
  }

  lastDateClick = () => {
    this.router.navigateByUrl('/last-date');
  }

}
