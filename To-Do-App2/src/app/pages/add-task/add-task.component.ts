import { Component } from '@angular/core';
import { DataServiceService } from '../../services/dataService.service';
import swal from 'sweetalert';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {

  constructor(private dataService: DataServiceService, private router: Router) { }

  task: any = {
    title: '',
    description: '',
    date: Date,
    time: 0
  }

  addTask() {
    if (this.task.time == '') {
      swal("Enter Title of task")
    } else
      if (this.task.description == '') {
        swal("Enter description of task")
      } else
        if (this.task.date == '') {
          swal("Enter Date of task")
        } else
          if (this.task.time == '') {
            swal("Enter Time of task")
          } else {
            this.dataService.addTask(this.task).subscribe(
              () => {
                swal("Task added successfully!")
                this.router.navigate(['/dashboard'])
              }
            )
          }
  }
}
