import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User';
import { NgModel } from '@angular/forms';
import swal from 'sweetalert';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserService]
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService, private http: HttpClient) { }

  toRegistrationPage() {
    this.router.navigate(['/register'])
  }

  user: any = {
    email: '',
    password: '',
  }

  Login() {
    if ((this.user.email) == '') {
      swal("Enter Email ...")
    } else if (this.user.password == '') {
      swal("Enter password ...")
    } else {
      this.userService.loginUser(this.user)
        .subscribe(response => {
          const jwt = response;
          this.router.navigate(['/dashBoard']);
        });
    }
  }
}
