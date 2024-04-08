import { Component } from '@angular/core';
import { TeamServiceService } from '../team-service.service';


@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrl: './all-teams.component.css',
  providers: [TeamServiceService]
})
export class AllTeamsComponent {
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
