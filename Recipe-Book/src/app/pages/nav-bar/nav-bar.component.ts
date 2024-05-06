import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private userService: UserService, private router: Router) { }
  logoutUser() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
