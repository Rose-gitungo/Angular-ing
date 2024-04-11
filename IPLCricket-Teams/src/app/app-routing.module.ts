import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { ErrorCComponent } from './error-c/error-c.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistartionComponent } from './registartion/registartion.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Service/auth.guard';

const routes: Routes = [
  { path: 'allTeams/teamDetails/:id', component: TeamDetailsComponent },
  { path: 'playerDetails/:fullName', component: PlayerDetailsComponent },
  { path: 'allTeams', component: AllTeamsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addTeam', component: AddTeamComponent },
  { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'dashBoard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorCComponent },
  { path: 'LogOut', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistartionComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, //redirects to login
  { path: '**', component: ErrorCComponent }//not found route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
