import { Component, Input } from '@angular/core';
import { task } from '../../models/task';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../../services/dataService.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {

  constructor(private route: ActivatedRoute, private dataService: DataServiceService, private router: Router) { }

  task: any = {
    id: 0,
    title: '',
    description: '',
    date: Date,
    time: 0
  }

  editTask(id: number) {
    this.route.params.subscribe(
      (params) => {
        id = params['id']
        this.dataService.getTaskById(id).subscribe(
          (response) => {
            if (this.task.title == '') {
              this.task.title = response.title
            }
            if (this.task.description == '') {
              this.task.description = response.description
            }
            if (this.task.time == '') {
              this.task.time = response.time
            }

            this.dataService.updateTask(this.task, id).subscribe(
              () => {
                swal("Task updated successfully!")
                this.router.navigate(['/dashboard'])
              }

            )
          }


        )
      }
    )

  }
}
