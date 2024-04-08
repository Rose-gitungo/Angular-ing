import { Injectable } from '@angular/core';
import TeamsJSON from '../assets/TeamsJSON.json'

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor() { }
  private teams: any[] = TeamsJSON;

  getAllTeams() {
    return (TeamsJSON);
  }

  getTeamByName(Name: any) {
    return (this.teams.find(team => team.name === Name));
  }

  getPlayerDetailsByName(Name: any) {
    return this.teams.find(team => team.name === Name)
  }
}
