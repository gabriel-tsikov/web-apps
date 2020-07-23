import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, of } from 'rxjs';
import IRecomendations from '../recomendations.model';

@Injectable({
  providedIn: 'root',
})
export class MovieRecomendationsService {
  apiKey: string = '519e9b151c1dc701bf50e6824fbe3409';
  urlBase: string = 'https://api.themoviedb.org/3';
  
  constructor(private http: HttpClient) { }

  getRecomendations(movie_id:number):Observable<IRecomendations[]> {
    return this.http.get<IRecomendations[]>(this.urlBase + `/movie/` + movie_id + '/recommendations', {
      params: {api_key: this.apiKey}
    }).pipe(catchError(this.handleError<IRecomendations[]>('getMovieReviews')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

