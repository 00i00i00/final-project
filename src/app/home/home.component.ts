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
  categories: Categories[] = [{ alias: 'restaurants', title: 'Restaurants', image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=985&q=80', added: false }, { alias: 'bars', title: 'Bars', image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80", added: false }, { alias: 'tours', title: 'Tours', image: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }, { alias: 'parks', title: 'Parks', image: 'https://images.unsplash.com/photo-1552676382-77b33d7639fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }, { alias: 'amusement', title: 'Amusement Parks', image: 'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }, { alias: 'aquariums', title: 'Aquariums', image: 'https://images.unsplash.com/photo-1459207982041-089ff95be891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', added: false }, { alias: 'beaches', title: 'Beaches', image: 'https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80', added: false }, { alias: 'galleries', title: 'Art Galleries', image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80', added: false }, { alias: 'rafting', title: 'Rafting / Kayaking', image: 'https://images.unsplash.com/photo-1515569045695-3b8a5db84e22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1139&q=80', added: false }, { alias: 'escapegames', title: 'Escape Games', image: 'https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80', added: false }, { alias: 'yoga', title: 'Yoga', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1094&q=80', added: false }, { alias: 'horsebackriding', title: 'Horseback Riding', image: 'https://images.unsplash.com/photo-1512074252045-2db98d993285?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80', added: false }, { alias: 'zoos', title: 'Zoos', image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }, { alias: 'arcades', title: 'Arcades', image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', added: false }, { alias: 'gardens', title: 'Botanical Gardens', image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', added: false }, { alias: 'movietheaters', title: 'Cinema', image: 'https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }, { alias: 'jazzandblues', title: 'Jazz & Blues', image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }, { alias: 'museums', title: 'Museums', image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }, { alias: 'musicvenues', title: 'Music Venues', image: 'https://images.unsplash.com/photo-1468359601543-843bfaef291a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80', added: false }, { alias: 'observatories', title: 'Observatories', image: 'https://images.unsplash.com/photo-1555582874-cb3064e5be06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', added: false }, { alias: 'bowling', title: 'Bowling', image: 'https://images.unsplash.com/photo-1538511625527-e893585d8ed2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }, { alias: 'opera', title: 'Opera & Ballet', image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80', added: false }, { alias: 'planetarium', title: 'Planetarium', image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1033&q=80', added: false }, { alias: 'wineries', title: 'Wineries', image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }, { alias: 'winetastingroom', title: 'Wine Tasting Rooms', image: 'https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80', added: false }, { alias: 'spas', title: 'Spas', image: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', added: false }, { alias: 'massage', title: 'Massage', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }, { alias: 'tastingclasses', title: 'Tasting Classes', image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }, { alias: 'saunas', title: 'Saunas', image: 'https://images.pexels.com/photos/269110/pexels-photo-269110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', added: false }, { alias: 'comedyclubs', title: 'Comedy Clubs', image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940', added: false }, { alias: 'piano', title: 'Piano Bars', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', added: false }];
  category: any;
  categoryList: any = [];
  categoryListString: string;
  added: boolean;

  constructor(private api: Api, private route: ActivatedRoute, private router: Router) { }
  logoNumber: number = 1;

  ngOnInit() {
    this.api.modal.subscribe(state => {
      this.showModal = state;
    });

    window.scroll(0,0);
    
  }

  addedCategory = (alias, item) => {
    this.categoryList = [...this.categoryList, alias];
    console.log('list of categories', this.categoryList);


    if (item.added === false) {
      const index = this.categories.indexOf(item);
      this.categories[index].added = true;
    } else {
      item.added = !item.added;
      this.categoryList = this.categoryList.filter(c => c !== item.alias);
      console.log('category removed from list', this.categoryList);
    }
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
      this.api.updateModal(false);
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
