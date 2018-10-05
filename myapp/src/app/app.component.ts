import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number;
  tasks: Array<string>;
  constructor() {
    this.count = 0;
    this.tasks = ['Portfolio', 'Homework', 'Classwork', 'PubJ'];
  }

  counter() {
    this.count++;
  }

  catchTask(e) {
    this.tasks[1] = e;
  }
}
