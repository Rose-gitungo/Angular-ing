import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  taskNames: any[] = [];

  addTask(taskName: string, taskId: number) {
    this.taskNames = JSON.parse(localStorage.getItem("Tasks") ?? '[]');
    this.taskNames.push(taskName, taskId);
    localStorage.setItem("Tasks", JSON.stringify(this.taskNames));
  }

  //getting all tasks from local storage
  getAllTasks(): string[] {
    return JSON.parse(localStorage.getItem('Tasks') ?? '{}')
  }

  deleteTask(taskId: number) {
    this.taskNames = JSON.parse(localStorage.getItem("Tasks") ?? '[]');
    localStorage.setItem("Tasks", JSON.stringify(this.taskNames));
  }
}
