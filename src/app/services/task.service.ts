import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks : Task[];

  constructor() {
    this.tasks = [ new Task("Learn angular", 1, false),
    new Task("Task2", 1, false),
    new Task("Task3", 3, true)];
  }
   
  getTasks() : Task[] {
     return this.tasks;
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
    this.tasks.push(task);
  }
}
