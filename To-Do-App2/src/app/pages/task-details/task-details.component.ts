import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/dataService.service';
import { task } from '../../models/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
  providers: [DataServiceService]
})
export class TaskDetailsComponent implements OnInit {

  constructor(private dataService: DataServiceService, private route: ActivatedRoute) { }

  task: any = {
    title: '',
    description: '',
    date: '',
    time: {
      hours: 0,
      minutes: 0
    },
    completed: false
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        const id = params['id'];
        console.log(id);
        this.dataService.getTaskById(id).subscribe(
          (response) => {
            this.task = response

          }
        )
      }
    )
  }




}
