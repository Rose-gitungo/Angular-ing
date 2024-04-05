import { Component } from '@angular/core';
import { DataServiceService } from '../dataService.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers: [DataServiceService]
})
export class TaskListComponent {

  taskNames: string[] = [];

  constructor(private _dataService: DataServiceService) { }

  ngOnInit() {
    this.taskNames = this._dataService.getAllTasks();
    console.log(this.taskNames);
  }


}
