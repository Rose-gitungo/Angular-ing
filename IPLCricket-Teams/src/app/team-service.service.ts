import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Team } from './models/team.model';


@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor(private http: HttpClient) { }


  getAllTeams(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/teams');
  }

  getTeamByid(id: any): Observable<Team> {
    return this.http.get<Team>('http://localhost:3000/teams/' + id);
  }

  getPlayerDetailsByName(name: string): Observable<any> {
    return this.getAllTeams().pipe(
      map(teams => {
        for (const team of teams) {
          const player = team.players.find((player: { fullName: string; }) => player.fullName === name);
          if (player) {
            return player; // Return the player if found
          }
        }
        return null;
      })
    )
  }

  createTeam(team: Team) {
    return this.http.post('http://localhost:3000/teams', team);
  }

  updateTeam(team: Team) {
    return this.http.put(`http://localhost:3000/teams/${team.id}`, team);
  }
}
