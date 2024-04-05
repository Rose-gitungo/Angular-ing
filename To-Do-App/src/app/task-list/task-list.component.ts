import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskNames: string[] = [];


  constructor() {
    const storedTasks = localStorage.getItem("Tasks");
    console.log('in tasklist');
    console.log(storedTasks);
    this.taskNames = storedTasks ? JSON.parse(storedTasks) : [];
  }

}
