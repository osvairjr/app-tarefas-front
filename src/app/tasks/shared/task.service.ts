import { Task } from './task';
import { Injectable } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Task[]>(`${environment.api}/tasks`);
  }

  getById(id: string):any{
    return this.http.get<Task>(`${environment.api}/tasks/${id}`);
  }

  save(task: Task){
    const taskBody = {
      description: task.description,
      completed: task.completed
    }
    if (task._id) {
      return this.http.put<Task>(`${environment.api}/tasks/${task._id}`, taskBody);
    } else {
      return this.http.post<Task>(`${environment.api}/tasks`, taskBody);
    }
  }

  delete(id: string){
    return this.http.delete(`${environment.api}/tasks/${id}`);
  }
}
