import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TeamServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
