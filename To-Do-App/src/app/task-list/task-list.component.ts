import { Component } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  taskNames: string[] = [];

  constructor() {
    const storedTasks = localStorage.getItem("Tasks");
    console.log("in task-list,storedTasks");
    console.log(storedTasks);
    this.taskNames = storedTasks ? JSON.parse(storedTasks) : [];
    console.log("in task-list , names");
    console.log(this.taskNames);

  }

}
