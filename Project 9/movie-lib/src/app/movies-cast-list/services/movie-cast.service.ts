import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import IDetails from 'src/app/movie-details/details.model';
import { catchError } from 'rxjs/internal/operators';
import ICast from '../cast.model';

@Injectable({
  providedIn: 'root',
})
export class MovieCastService {
  
  apiKey: string = '519e9b151c1dc701bf50e6824fbe3409';
  urlBase: string = 'https://api.themoviedb.org/3';
  
  constructor(private http: HttpClient) { }

  getCasts(movie_id:number):Observable<ICast> {
    return this.http.get<ICast>(this.urlBase + `/movie/` + movie_id + '/credits', {
      params: {api_key: this.apiKey}
    }).pipe(catchError(this.handleError<ICast>('getMovieDetails')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
