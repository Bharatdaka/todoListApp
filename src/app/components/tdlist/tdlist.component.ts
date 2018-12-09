import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { Http } from '@angular/http';

@Component({
  selector: 'tdlist',
  templateUrl: './tdlist.component.html',
  styleUrls: ['./tdlist.component.css']
})
export class TdlistComponent implements OnInit {
  tasks : Task[];

  constructor(private taskService: TaskService,
              private http: Http) { }
  

  ngOnInit() {
    this.taskService.getTasks().subscribe(res => this.tasks = res.json());
  }

  changeStatus(task:Task) {
    this.taskService.changeStatus(task).subscribe(); 
  }

  priorityUp(task:Task) {
    this.taskService.priorityUp(task).subscribe();
  }
  
  priorityDown(task:Task) {
    this.taskService.priorityDown(task).subscribe();
  }

}
