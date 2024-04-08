import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

const routes: Routes = [
  { path: 'teamDetails/:name', component: TeamDetailsComponent },
  { path: 'allTeams', component: AllTeamsComponent },
  { path: '', component: HomeComponent },
  { path: 'addTeam', component: AddTeamComponent },
  { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'dashBoard', component: DashboardComponent },
  { path: 'playerDetails/:fullName', component: PlayerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
