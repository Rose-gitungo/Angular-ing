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
    if (this.user.password != this.confirmPassword) {
      swal("Passwords do not match!")
    }
    this.userService.createUserProfile(this.user).subscribe(
      () => {
        swal("User created successfully!")
        this.router.navigate(['/dashBoard']);
      }
    )




  }
}
