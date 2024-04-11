import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { AuthServiceService } from '../Service/auth-service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrl: './registartion.component.css'
})
export class RegistartionComponent {
  constructor(private authService: AuthServiceService, private router: Router) { }

  userName = '';
  email: string = '';
  password: string = "";

  user: User[] = [
    // {
    //   userName: '',
    //   email: '',
    //   password: ''
    // }
  ]

  registerUser() {

    const newUser: User = {
      userName: this.userName,
      email: this.email,
      password: this.password
    };

    if (newUser !== null) {

      this.authService.registerUser(newUser).subscribe(
        (Response => {
          console.log("post request successful", Response);
          if (Response) {
            this.user.push(Response)
            swal("User Added successfully!")
            this.router.navigate(['/home']);
          }

        })
      )
    } else {
      swal("Fill all fields")
    }

  }
}
