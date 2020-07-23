import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/internal/operators/catchError';
import { API_REQUEST } from 'src/app/constants/api';
import { HttpService } from 'src/app/shared/http-service/http-service.service';
import IReviews from '../review.model';

@Injectable({
  providedIn: 'root',
})
export class MovieReviewService {
  private url = API_REQUEST.movies.get;
  private apiKey = API_REQUEST.authentication.get;

  
  constructor(private http: HttpService) { }

  getReviews(movie_id:number):Observable<IReviews> {
    return this.http.get(this.url + `/movie/` + movie_id + '/reviews',{api_key: this.apiKey}
    ).pipe(catchError(this.handleError<IReviews>('getMovieReviews')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
