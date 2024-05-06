import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuthenticated = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  loginRequest: any = {
    email: '',
    password: ''
  }

  loginUser(loginRequest: User): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>('http://localhost:8080/auth/signin', loginRequest, { headers: headers }).pipe(
      map(response => {
        localStorage.setItem('token', response.jwt);
        this.isAuthenticated.next(true);
        return response;
      })
    );
  }

  createUserProfile(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8080/auth/signup', user).pipe(
      map(response => {
        localStorage.setItem('token', response.jwt);
        this.isAuthenticated.next(true);
        return response;
      })
    )
  }

  getUserProfile(): Observable<any> {
    const jwt: string | null = localStorage.getItem("token")
    let headers = new HttpHeaders();
    if (jwt) {
      headers = headers.set('Authorization', 'Bearer ' + jwt);
    }
    return this.http.get<any>("http://localhost:8080/api/users/profile", { headers: headers });
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
  }
}
