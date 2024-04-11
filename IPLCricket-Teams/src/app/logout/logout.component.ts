import { Component } from '@angular/core';
import { AuthServiceService } from '../Service/auth-service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private authService: AuthServiceService, private router: Router) {
  }

  logout() {
    swal("You have logged out!")
    this.authService.logout();
    this.router.navigate(['/login']);// Redirect to login page after logout
  }
}
