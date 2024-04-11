import { Component, resolveForwardRef } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamServiceService } from '../team-service.service';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.css'
})
export class AddTeamComponent {
  constructor(private _team: TeamServiceService) { }

  team: Team = {
    name: '',
    icon: '',
    players: [],
    id: ''
  }
  addTeam() {
    this.team.id = uuidv4();
    console.log(this.team.id);

    this._team.createTeam(this.team).subscribe(
      (Response => {
        swal("Team added successfully!")
        if (Response) {

          console.log(Response);

        }
      })
    )
  }


}
