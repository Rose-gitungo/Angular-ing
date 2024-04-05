import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  taskNames: string[] = [];

  constructor() { }

  setData(taskNames: string[]) {
    this.taskNames = taskNames;
  }
  getData() {
    return this.taskNames;
  }
}
