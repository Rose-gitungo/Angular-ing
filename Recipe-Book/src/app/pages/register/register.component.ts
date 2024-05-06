import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router, private userService: UserService) { }

  user: any = {
    email: '',
    password: '',
    fullName: ''
  }
  confirmPassword = '';

  toLoginPage() {
    this.router.navigate(['/login']);
  }

  RegisterUser() {
    console.log(this.user);
    console.log(this.confirmPassword);

    if (this.user.password != this.confirmPassword) {
      swal("Passwords do not match!")
    }

    //create a new user
    const jwt = this.userService.createUserProfile(this.user)
    console.log(jwt);



  }
}
