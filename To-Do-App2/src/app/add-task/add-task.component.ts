import { Component } from '@angular/core';
import { DataServiceService } from '../dataService.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  constructor(private _dataService: DataServiceService) { }

  taskName: string = '';

  addTask() {
    this._dataService.addTask(this.taskName);
  }


}
