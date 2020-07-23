import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, of } from 'rxjs';
import IRecomendations from '../recomendations.model';
import { API_REQUEST } from 'src/app/constants/api';
import { HttpService } from 'src/app/shared/http-service/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class MovieRecomendationsService {
  private url = API_REQUEST.movies.get;
  private apiKey = API_REQUEST.authentication.get;

  constructor(private http: HttpService) { }

  getRecomendations(movie_id:number):Observable<IRecomendations[]> {
    return this.http.get(this.url + `/movie/` + movie_id + '/recommendations', {api_key: this.apiKey
    }).pipe(catchError(this.handleError<IRecomendations[]>('getMovieReviews')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

