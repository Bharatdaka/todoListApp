import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  @Output() addTaskforSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleSaveBtnClick(
    label:HTMLInputElement,
    status:HTMLInputElement,
    priority:HTMLInputElement
  ) {
    console.log(label.value);
    console.log(+priority.value);
    console.log(!!(+status.value));
    let newTask = new Task(label.value, +priority.value, !!(+status.value));
    this.addTaskforSubmit.emit(newTask);
  }

}
