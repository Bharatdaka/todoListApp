import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'tdlist',
  templateUrl: './tdlist.component.html',
  styleUrls: ['./tdlist.component.css']
})
export class TdlistComponent implements OnInit {
  tasks : Task[];
  constructor() { console.log("called constructor");}
  
  ngOnInit() {
    this.tasks = [ new Task("Learn Angular", 1, false),
                   new Task("Task2", 1, false),
                   new Task("Task3", 3, true)];
  }

  changeStatus(task:Task) {
    task.status = !task.status; 
  }

  priorityUp(task:Task) {
    task.priority++;
  }
  priorityDown(task:Task) {
    task.priority--;
  }

  addTask(task:Task) {
    console.log("bharat");
    this.tasks.push(task);
  }
}
