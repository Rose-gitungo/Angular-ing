import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/dataService.service';
import { task } from '../../models/task';
import swal from 'sweetalert';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataServiceService, private route: Router) { }

  ngOnInit() {
    this.changeFormat(this.today);
    this.getAllTasks();
  }

  Tasks: task[] = [];


  getAllTasks() {
    this.dataService.getAllTasks().subscribe(
      (response) => {
        this.Tasks = response;
      }
    )
  }
  deleteTask(id: number) {
    this.dataService.deleteTask(id).subscribe(
      () => {
        swal("Task Deleted Successfully!")
        this.getAllTasks();
      }
    )
  }
  editTask(id: number) {
    this.route.navigate([`dashboard/edit/${id}`])
  }

  filterTasksByDate(date: Date) {
    return this.Tasks.filter(task => task.date === date);
  }

  today = new Date();
  changedDate: any;
  pipe = new DatePipe('en-US');
  changeFormat(today: string | number | Date) {
    const changedFormat = this.pipe.transform(today, "dd-MM-yyyy");
    this.changedDate = changedFormat;
  }

  toTaskDetails(id: number) {
    this.route.navigate([`/taskdetails/${id}`])
  }

}
