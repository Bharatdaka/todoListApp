import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  @Output() addTaskforSubmit = new EventEmitter();
  newTask : Task;

  constructor() { }


  ngOnInit() {
    this.newTask = new Task(null, null, null);
  }

  handleSaveBtnClick() {
    this.newTask.priority = +this.newTask.priority;
    this.newTask.status = !!(+this.newTask.status);

    this.addTaskforSubmit.emit(this.newTask);
    this.newTask = new Task(null, null, null);
  }

}
