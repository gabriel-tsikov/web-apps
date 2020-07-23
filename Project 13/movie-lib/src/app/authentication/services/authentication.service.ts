import { Injectable, Output, EventEmitter } from '@angular/core';
import IUser from '../user.model';
import { HttpService } from 'src/app/shared/http-service/http-service.service';
import { take, catchError } from 'rxjs/internal/operators';
import { JWT_TOKEN, USER_ID } from '../authentication.constants';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser: IUser;
  @Output() loginFailed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() registerFailed: EventEmitter<boolean> = new EventEmitter<boolean>();
  authUrl: string = 'https://identitytoolkit.googleapis.com/v1/';
  firebaseApiKey: string = 'AIzaSyD15XONBwSn_kgvyJ7OE46Zt_CZ7_Yl6nM';
  constructor(private http: HttpService, private router: Router) {}
  loginUser(email: string, password: any): void {
    this.http
      .post(
        this.authUrl + `accounts:signInWithPassword?key=${this.firebaseApiKey}`,
        { email, password }
      )
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.router.navigate(['movies-list']);
          sessionStorage.setItem(JWT_TOKEN, response.idToken);
          sessionStorage.setItem('localId', response.localId)
          catchError(this.handleError<IUser>('loadUser'));
          this.currentUser = response;
        },
        (error) => this.loginFailed.emit(true)
      );
  }
  signUpUser(email: string, password: string): void {
    this.http
      .post(this.authUrl + `accounts:signUp?key=${this.firebaseApiKey}`, {
        email,
        password,
      })
      .pipe(take(1))
      .subscribe(catchError(this.handleError<IUser>('singUpUser')), (error) =>{
        this.registerFailed.emit(true);
        this.router.navigate(['movies-list']);
      }
        
      );
  }
  loggedUser(): boolean {
    return !!sessionStorage.getItem(JWT_TOKEN);
  }
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getToken(): string {
    return sessionStorage.getItem(JWT_TOKEN);
  }

  getUserId(): string {
    return sessionStorage.getItem(USER_ID);
  }
  logout(): void {
    sessionStorage.removeItem(JWT_TOKEN);
    sessionStorage.removeItem('localId')
    this.currentUser = null;
  }
}
