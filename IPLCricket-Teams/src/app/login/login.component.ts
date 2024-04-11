import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Service/auth-service.service';
import { TokenServiceService } from '../Service/token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = "";

  user: User = {
    userName: '',
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private _authService: AuthServiceService) { }

  login() {
    if (this.user.email && this.user.password) {
      // const token = this._tokenService.generateToken({ email: this.email })
      // localStorage.setItem('token', token);
      const u = this._authService.login(this.user);

      if (u) {
        this.router.navigate(['/home']);
      } else {
        alert("invalid email or password 1");
      }
    } else {
      alert("Invalid email or password 2")
    }

  }
}
