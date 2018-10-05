import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() tasks: string;
  constructor() { }

  ngOnInit() {
    console.log(this.tasks);
  }

}
