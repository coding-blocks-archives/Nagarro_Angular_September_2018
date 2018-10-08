import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-india-usa',
  templateUrl: './india-usa.component.html',
  styleUrls: ['./india-usa.component.css']
})
export class IndiaUsaComponent {

  constructor(private route: Router, private active: ActivatedRoute) { }

  AtlanticMenu: Object[] = [
    {id: 1, item: 'Kosher Meal'},
    {id: 2, item: 'Moslem Meal'},
    {id: 3, item: 'Vegetarian Meal'},
    {id: 4, item: 'Asian Meal'}
  ];
  PacificMenu: Object[] = [
    {id: 1, item: 'SeaFood Meal'},
    {id: 2, item: 'Lacto Ovo Veg Meal'},
    {id: 3, item: 'Bland Meal'},
    {id: 4, item: 'Fruit Meal'}
  ];

  atlanticMenu(id) {
    console.log(id);
    this.route.navigate(['atlantic', id], {relativeTo: this.active});
  }

  pacificMenu(id) {
    this.route.navigate(['pacific', id], {relativeTo: this.active});
  }

  viaAtlantic() {
    this.route.navigate(['atlantic'], {relativeTo: this.active});
  }

  viaPacific() {
    this.route.navigate(['pacific'], {relativeTo: this.active});
  }

}
