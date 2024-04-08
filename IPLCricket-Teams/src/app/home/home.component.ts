import { Component } from '@angular/core';
import { TeamServiceService } from '../team-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [TeamServiceService]
})
export class HomeComponent {

  constructor(public _teamsService: TeamServiceService) { }

  Teams: any[] = [{
    name: '',
    icon: '',
    players: []
  }];

  ngOnInit() {
    this.Teams = this._teamsService.getAllTeams();
  }
}
