import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import IMovie from '../../movie/movie.model';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import IDetails from '../details.model';
import { HttpService } from 'src/app/shared/http-service/http-service.service';
import { API_REQUEST } from 'src/app/constants/api';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  
  private url = API_REQUEST.movies.get;
  private apiKey = API_REQUEST.authentication.get;

  
  constructor(private http: HttpService) { }

  getMovieDetails(movie_id:number):Observable<IDetails> {
    return this.http.get(this.url + `/movie/` + movie_id ,{api_key: this.apiKey}
    ).pipe(catchError(this.handleError<IDetails>('getMovieDetails')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

