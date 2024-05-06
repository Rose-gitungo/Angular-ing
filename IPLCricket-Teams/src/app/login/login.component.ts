import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Service/auth-service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // email: string = '';
  // password: string = "";

  user: User = {
    userName: '',
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private _authService: AuthServiceService) { }

  login() {
    console.log(this.user);
    if (this.user.email && this.user.password) {
      this._authService.login(this.user);
      this.router.navigate(['/dashBoard']);
      swal("Thank you for login in!")

    } else {
      swal("Please enter email and password");
    }
  }

}
