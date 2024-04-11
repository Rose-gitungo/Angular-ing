import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../team-service.service';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [TeamServiceService]
})

export class HomeComponent implements OnInit {

  constructor(private _teamsService: TeamServiceService) { }

  Teams: Team[] = [];

  ngOnInit() {
    this._teamsService.getAllTeams().subscribe(
      (teams: Team[]) => {
        this.Teams = teams;
        console.log(this.Teams);

      });
  }
  teamDetails(id: any) {
    this._teamsService.getTeamByid(id);
  }
}
