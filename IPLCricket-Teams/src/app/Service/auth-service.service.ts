import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private LoggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.LoggedIn.asObservable();
  }

  // email: string = '';
  // password: string = "";
  user: User | undefined;

  constructor(private http: HttpClient) { }

  login(user: User) { // Change the return type to Observable<boolean>

  }


  logout(): void {
    this.LoggedIn.next(false);

  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }

}
