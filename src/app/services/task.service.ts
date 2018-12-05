import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // private tasks : Task[];
  private url = 'http://localhost:3000/tasks';

  constructor(private http: Http) {}

   
  getTasks() : Observable<Response> {
    return this.http.get(this.url);
  }

  changeStatus(task:Task) {
    task.status = !task.status;
    return this.http.put(this.url +'/' +task.id, task);
  }

  priorityUp(task:Task) {
    task.priority++;
    return this.http.put(this.url +'/' +task.id, task);
  }

  priorityDown(task:Task) {
    task.priority--;
    return this.http.put(this.url +'/' +task.id, task);
  }

  addTask(task:Task) {
    return this.http.post(this.url, task);
  }
}
