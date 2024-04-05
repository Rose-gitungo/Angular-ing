import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  taskNames: string[] = [];

  addTask(taskName: string) {
    this.taskNames = JSON.parse(localStorage.getItem("Tasks") ?? '[]');
    this.taskNames.push(taskName);
    localStorage.setItem("Tasks", JSON.stringify(this.taskNames));
  }

  //getting all tasks from local storage
  getAllTasks(): string[] {
    return JSON.parse(localStorage.getItem('Tasks') ?? '{}')
  }
}
