import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() tasks: string;
  @Output() modifyTask = new EventEmitter ();
  constructor() { }

  ngOnInit() {
    console.log(this.tasks);
  }

  modifyEvent(task) {
    this.modifyTask.emit(`${task}Modification`);
  }

}
