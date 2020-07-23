import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import IMovie from '../../movie/movie.model';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import IDetails from '../details.model';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  
  apiKey: string = '519e9b151c1dc701bf50e6824fbe3409';
  urlBase: string = 'https://api.themoviedb.org/3';
  
  constructor(private http: HttpClient) { }

  getMovieDetails(movie_id:number):Observable<IDetails> {
    return this.http.get<IDetails>(this.urlBase + `/movie/` + movie_id , {
      params: {api_key: this.apiKey}
    }).pipe(catchError(this.handleError<IDetails>('getMovieDetails')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

