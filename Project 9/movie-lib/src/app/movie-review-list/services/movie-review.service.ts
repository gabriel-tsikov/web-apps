import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import IReview from '../review.model';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root',
})
export class MovieReviewService {
  apiKey: string = '519e9b151c1dc701bf50e6824fbe3409';
  urlBase: string = 'https://api.themoviedb.org/3';
  
  constructor(private http: HttpClient) { }

  getReviews(movie_id:number):Observable<IReview> {
    return this.http.get<IReview>(this.urlBase + `/movie/` + movie_id + '/reviews', {
      params: {api_key: this.apiKey}
    }).pipe(catchError(this.handleError<IReview>('getMovieReviews')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
