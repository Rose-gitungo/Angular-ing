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

  email: string = '';
  password: string = "";
  user: User | undefined;

  constructor(private http: HttpClient) { }

  login(user: any): Observable<boolean> { // Change the return type to Observable<boolean>
    return new Observable<boolean>((observer) => { // Return an Observable
      this.http.get<any[]>('http://localhost:3000/users').subscribe(
        (users: User[]) => {
          this.user = users.find(u => u.email === this.email && u.password === this.password);
          if (this.user) {
            this.LoggedIn.next(true);
            observer.next(true); // Notify observers that login was successful
            observer.complete(); // Complete the Observable
          } else {
            observer.next(false); // Notify observers that login failed
            observer.complete(); // Complete the Observable
          }
        },
        (error) => {
          observer.error(error); // Notify observers if there's an error
        }
      );
    });
  }


  logout(): void {
    this.LoggedIn.next(false);

  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }

}
