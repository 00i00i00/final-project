import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Api } from '../services/api.service';

interface Categories {
  alias: string;
  title: string;
  image: string;
  added: boolean;
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
  // categories: Categories[] = [{alias: 'restaurants', title: 'Restaurants', image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=985&q=80', added: false}, {alias: 'bars', title: 'Bars', image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80", added: false}, {alias: 'tours', title: 'Tours', image: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false}, {alias: 'park', title: 'Parks', image: 'https://images.unsplash.com/photo-1552676382-77b33d7639fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false}, {alias: 'amusement', title: 'Amusement Parks', image: 'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false}, {alias: 'aquariums', title: 'Aquariums', image: 'https://images.unsplash.com/photo-1459207982041-089ff95be891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', added: false}, {alias: 'beaches', title: 'Beaches', image: 'https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80', added: false}, {alias: 'galleries', title: 'Art Galleries', image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80', added: false}];
  categories: Categories[];
  category: any;
  categoryList: any = [];
  categoryListString: string;
  added: boolean;
  
  constructor(private api: Api, private route: ActivatedRoute, private router: Router){}
  logoNumber: number = 1;

  ngOnInit() {
    this.api.getCategories().subscribe((data: CategoriesAll) => { 
      this.categories = data.categories;
    });

    if (this.category.alias === 'restaurant') {
      this.category.image = 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=985&q=80';
    }
    if (this.category.alias === 'bars') {
      this.category.image = 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80';
    }
    if (this.category.alias === 'tours') {
      this.category.image = 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
    }
    // if (this.category.alias === 'bars') {
    //   this.category.image = '';
    // }
  }

  addedCategory = (alias, item) => {
    this.categoryList = [...this.categoryList, alias];
    console.log('list of categories', this.categoryList);
  
    if (item.added === false) { 
    const index = this.categories.indexOf(item);
    this.categories[index].added = true;
    } else {
    item.added = !item.added;
    }
  }

  // addedCategory = (alias, item) => {
  //   this.categoryList = [...this.categoryList, alias];
  //   console.log('list of categories', this.categoryList);
  
  //   item.added = !item.added;
    
  // }

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
