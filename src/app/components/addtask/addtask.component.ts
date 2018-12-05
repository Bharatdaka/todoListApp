import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  // @Output() addTaskforSubmit = new EventEmitter();
  newTask : Task;

  constructor(private taskService: TaskService,
    private router:Router) { }


  ngOnInit() {
    this.newTask = new Task(null, null, null);
  }

  handleSaveBtnClick() {
    this.newTask.priority = +this.newTask.priority;
    this.newTask.status = !!(+this.newTask.status);

    console.log(this.newTask);
    this.taskService.addTask(this.newTask).subscribe(res => this.router.navigate(['/home']));

    // this.addTaskforSubmit.emit(this.newTask);
    // this.newTask = new Task(null, null, null);
  }

}
