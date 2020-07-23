import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, pipe } from 'rxjs';

import { catchError } from 'rxjs/internal/operators/catchError';
import IMovie from '../../movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {
  apiKey: string = '519e9b151c1dc701bf50e6824fbe3409';
  urlBase: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovie[]> {
    return this.http
      .get<IMovie[]>(this.urlBase + '/movie/popular', {
        params: { api_key: this.apiKey }
      })
      .pipe(catchError(this.handleError<IMovie[]>('getMovies', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
