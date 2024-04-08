import { Component } from '@angular/core';
import { TeamServiceService } from '../team-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css',
  providers: [TeamServiceService]
})

export class TeamDetailsComponent {
  constructor(public _teamsService: TeamServiceService, private _ActivatedRoute: ActivatedRoute) { }

  team: any;
  Name: any;
  playerCount: number | undefined;

  ngOnInit() {
    //retreieve router link data:
    this._ActivatedRoute.params.subscribe(params => {
      this.Name = params['name'];
      //use name to get team details
      this.team = this._teamsService.getTeamByName(this.Name);

      if (this.team) {
        this.playerCount = this.team.players.length;
      }
    });

  }

  fullName: any;
  toPlayerDetailspage(fullName: string) {
    return this._teamsService.getPlayerDetailsByName(fullName);

  }
}
