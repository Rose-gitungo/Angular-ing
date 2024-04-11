import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { TeamServiceService } from './team-service.service';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { RegistartionComponent } from './registartion/registartion.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorCComponent } from './error-c/error-c.component';
import { AuthServiceService } from './Service/auth-service.service';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlayerServiceService } from './Service/player-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AllTeamsComponent,
    TeamDetailsComponent,
    HomeComponent,
    NavBarComponent,
    AddTeamComponent,
    AddPlayerComponent,
    DashboardComponent,
    PlayerDetailsComponent,
    LoginComponent,
    RegistartionComponent,
    LogoutComponent,
    ErrorCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TeamServiceService,
    AuthServiceService,
    PlayerServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
