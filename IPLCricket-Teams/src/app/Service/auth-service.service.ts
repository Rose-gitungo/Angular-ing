import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAuthenticated() {
    return false;
  }

  email: string = '';
  password: string = "";
  user: User | undefined;

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any[]> {
    this.http.get<any[]>('http://localhost:3000/users').subscribe(
      (users: User[]) => {
        this.user = users.find(u => u.email === this.email && u.password === this.password);
      });
    return user;
  }

  logout(): void {
    // this.isAuthenticated = false;
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }

}
