import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, pipe } from 'rxjs';

import { catchError } from 'rxjs/internal/operators/catchError';
import IMovie from '../../movie/movie.model';
import { API_REQUEST } from 'src/app/constants/api';
import { HttpService } from 'src/app/shared/http-service/http-service.service';
import IMovies from '../../movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {
  private url = API_REQUEST.movies.get;
  private apiKey = API_REQUEST.authentication.get;

  constructor(private http: HttpService) {}

  getMovies(page: string): Observable<IMovies[]> {
    return this.http
      .get(this.url + '/movie/popular', { api_key: this.apiKey, page: page })
      .pipe(catchError(this.handleError<IMovies[]>('getMovies', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
