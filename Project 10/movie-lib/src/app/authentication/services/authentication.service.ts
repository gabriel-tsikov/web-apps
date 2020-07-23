import { Injectable, Output } from '@angular/core';
import IUser from '../user.model';
import { HttpService } from 'src/app/shared/http-service/http-service.service';
import { take, catchError } from 'rxjs/internal/operators';
import { JWT_TOKEN, USER_ID } from '../authentication.constants';
import { Observable, of } from 'rxjs';
import { NgForm } from '@angular/forms';
import { EventEmitter } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser:IUser;
  
  authUrl:string = 'https://identitytoolkit.googleapis.com/v1/';
  firebaseApiKey:string =  'AIzaSyD15XONBwSn_kgvyJ7OE46Zt_CZ7_Yl6nM';
  constructor(private http: HttpService) { }
  loginUser(email:string,password:any): void {
    form: NgForm;
    this.http.post(this.authUrl + `accounts:signInWithPassword?key=${this.firebaseApiKey}`, {email,password}).pipe(take(1)).subscribe(response => {
      localStorage.setItem(JWT_TOKEN, response.token );
      catchError(this.handleError<IUser>('loadUser'));
      
      this.currentUser = response;

    })
  }
   
 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getToken(): string {
    return localStorage.getItem(JWT_TOKEN);
  }

  getUserId(): string {
    return localStorage.getItem(USER_ID);
  }

  isAuthenticated() : boolean{
    return !!this.currentUser;
  }
}
