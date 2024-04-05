import { Component } from '@angular/core';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskNames: string[] = [];
  taskName: string = '';

  addTask() {
    this.taskNames.push(this.taskName);
    console.log(this.taskNames);
    localStorage.setItem("Tasks", JSON.stringify(this.taskNames));
  }


}
