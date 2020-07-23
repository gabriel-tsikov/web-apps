import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import IDetails from 'src/app/movie-components/movie-details/details.model';
import { catchError } from 'rxjs/internal/operators';
import ICast from '../cast.model';
import { HttpService } from 'src/app/shared/http-service/http-service.service';
import { API_REQUEST } from 'src/app/constants/api';

@Injectable({
  providedIn: 'root',
})
export class MovieCastService {
  
  private url = API_REQUEST.movies.get;
  private apiKey = API_REQUEST.authentication.get;

  
  constructor(private http: HttpService) { }

  getCasts(movie_id:number):Observable<ICast> {
    return this.http.get(this.url + `/movie/` + movie_id + '/credits',{api_key: this.apiKey}
    ).pipe(catchError(this.handleError<ICast>('getMovieDetails')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
