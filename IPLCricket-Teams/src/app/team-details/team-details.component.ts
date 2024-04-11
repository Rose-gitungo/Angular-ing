import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../team-service.service';
import { ActivatedRoute } from '@angular/router';

interface Team {
  name: string;
  icon: string;
  players: Player[];
  id: any;
}

// Define an interface to represent a player
interface Player {
  fullName: string;
  photo: string;
  team: string;
  price: string;
  playingStatus: string;
  role: string;
}

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css',
  providers: [TeamServiceService]
})

export class TeamDetailsComponent implements OnInit {
  constructor(private _teamsService: TeamServiceService, private _ActivatedRoute: ActivatedRoute) { }

  team: Team | undefined;
  id: any;
  playerCount: number | undefined;

  ngOnInit() {
    //retreieve router link data:
    this._ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this._teamsService.getTeamByid(this.id).subscribe(
        (team: Team) => {
          this.team = team;
          if (this.team) {
            this.playerCount = this.team.players.length;
          }
        }
      )
    });
  }

  fullName: any;
  toPlayerDetailspage(fullName: string): void {
    // this.router.navigate(['/allTeams/teamDetails', this.team.id, 'playerDetails', name]);
  }
}
