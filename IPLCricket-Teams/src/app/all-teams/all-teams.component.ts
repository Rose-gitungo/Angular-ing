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

  Teams: any[] = [];

  ngOnInit() {
    this._teamsService.getAllTeams().subscribe(
      (teams: any[]) => {
        this.Teams = teams;
      }
    )
  }
}
