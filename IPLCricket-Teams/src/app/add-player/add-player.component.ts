import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { Player } from '../models/player.model';
import { Team } from '../models/team.model';
import { PlayerServiceService } from '../Service/player-service.service';
import { TeamServiceService } from '../team-service.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css'
})
export class AddPlayerComponent implements OnInit {
  constructor(private _playerService: PlayerServiceService, private teamService: TeamServiceService) { }

  teams: Team[] = [];

  player: Player = {
    fullName: '',
    photo: '',
    team: '',
    price: '',
    playingStatus: '',
    role: ''
  };

  ngOnInit() {
    this.getAllTeams(); //fills drop down
  }
  addPlayer() {
    //get teamname from team id
    const teamId = this.player.team
    this.teamService.getTeamByid(teamId).subscribe(
      (team: any) => {
        const selectedTeam = team;
        console.log(selectedTeam);
        selectedTeam.players.push(this.player); //add to existing
        //we should post teams and return teams
        this.teamService.updateTeam(selectedTeam).subscribe(
          (response) => {
            if (response) {
              swal('Player Added successfully');
            } else {
              swal('Failed to add player');

            }
          }
        )
      }
    )
  }

  getAllTeams() {
    this.teamService.getAllTeams().subscribe(
      (Response) => {
        this.teams = Response;
      })
    return this.teams
  }
}
