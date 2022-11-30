import { TaskService } from '../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getAll().subscribe(tasks => {this.tasks = tasks});
  }

  onTaskDeleted ($task: Task) {
    if ($task) {
      const index = this.tasks.findIndex((taskItem) => taskItem._id == taskItem._id);
      this.tasks.splice(index, 1);
    }
  }
}
