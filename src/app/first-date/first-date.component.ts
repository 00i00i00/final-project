import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api.service';


@Component({
  selector: 'app-first-date',
  templateUrl: './first-date.component.html',
  // styleUrls: ['./first-date.component.css']
})
export class FirstDateComponent implements OnInit {

  constructor(private api: Api, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
