import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Service/auth-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>; //decalare an observable,$ helps identify observable variables 

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
  }

}
