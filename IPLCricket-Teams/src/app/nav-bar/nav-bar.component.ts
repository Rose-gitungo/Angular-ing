import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Service/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  //constructor(private authService: AuthServiceService) { }
  // isAuthenticated: boolean = false;
  // ngOnInit(): void {
  //   this.authService.isAuthenticated().subscribe(auth => {
  //     this.isAuthenticated = auth;
  //   })
  // }
}
