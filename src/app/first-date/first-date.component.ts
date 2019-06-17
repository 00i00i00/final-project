import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Api } from '../services/api.service';

interface firstDate {
  title: string;
}

interface Categories {
  alias: string;
  title: string;
}

interface Business {
  
}

interface Businesses {
  rating: number;
  price: string;
  phone: string;
  categories: Categories[];
  name: string;
  location: Location[];
}

@Component({
  selector: 'app-first-date',
  templateUrl: './first-date.component.html',
  // styleUrls: ['./first-date.component.css']
})
export class FirstDateComponent implements OnInit {
  locationInput: string;
  list: Businesses[];
  showModal: boolean = true;
  logoNumber: number = 1; 

  constructor(private api: Api, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
  }
  location = () => {
    this.api.getLocation(location).subscribe(data => {
      this.api.updateLocation(this.locationInput);
      console.log('location data', data);
      this.showModal = !this.showModal;
    });
  }
}
