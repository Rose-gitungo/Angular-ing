import { Component } from '@angular/core';
import { TeamServiceService } from '../team-service.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../models/team.model';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent {
  constructor(public _teamsService: TeamServiceService, public _ActivatedRoute: ActivatedRoute) { }

  players: any;
  Name: any;

  ngOnInit() {
    //get name from parameters
    this._ActivatedRoute.params.subscribe(params => {
      this.Name = params['fullName'];
      this._teamsService.getPlayerDetailsByName(this.Name).subscribe(
        (player) => {
          this.players = player;
          console.log(this.players);

        })

    });


  }

}
