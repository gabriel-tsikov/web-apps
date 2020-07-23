import { Injectable, Output, EventEmitter } from '@angular/core';

import { HttpService } from 'src/app/shared/http-service/http-service.service';
import { take, catchError } from 'rxjs/internal/operators';
import { JWT_TOKEN, USER_ID } from '../authentication.constants';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import IUser from '../models/user.model';
import { API_REQUEST } from 'src/app/constants/api';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser: IUser;
  @Output() loginFailed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() registerFailed: EventEmitter<boolean> = new EventEmitter<boolean>();
  private authUrl: string = API_REQUEST.auth.get;
  private firebaseApiKey: string = API_REQUEST.apiKey.get;
  constructor(private http: HttpService, private router: Router) {}
  loginUser(email: string, password: string): void {
    this.http
      .post(
        this.authUrl + `accounts:signInWithPassword?key=${this.firebaseApiKey}`,
        { email, password }
      )
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.router.navigate(['search-page']);
          sessionStorage.setItem(JWT_TOKEN, response.idToken);
          sessionStorage.setItem('localId', response.localId);
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
      .subscribe(catchError(this.handleError<IUser>('singUpUser')), (error) => {
        this.registerFailed.emit(true);
        this.router.navigate(['search-page']);
      });
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

  getLocalId(): string {
    return sessionStorage.getItem('localId');
  }
  logout(): void {
    sessionStorage.removeItem(JWT_TOKEN);
    sessionStorage.removeItem('localId');
    this.currentUser = null;
  }
}
