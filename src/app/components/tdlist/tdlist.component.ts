import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'tdlist',
  templateUrl: './tdlist.component.html',
  styleUrls: ['./tdlist.component.css']
})
export class TdlistComponent implements OnInit {
  tasks : Task[];
  constructor(private taskService: TaskService) { console.log("called constructor");}
  
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  changeStatus(task:Task) {
    this.taskService.changeStatus(task); 
  }

  priorityUp(task:Task) {
    this.taskService.priorityUp(task);
  }
  priorityDown(task:Task) {
    this.taskService.priorityDown(task);
  }

  addTask(task:Task) {
    this.taskService.addTask(task);
  }
}
