import { Component, OnInit } from '@angular/core';
import {ParamMap, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meal: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
        this.meal =  +(param.get('id'));
    });
  }

}
