import { Injectable } from '@angular/core';
import { API_REQUEST } from 'src/app/constants/api';
import { Observable, of } from 'rxjs';
import IBook from '../../book/models/book.model';
import { HttpService } from 'src/app/shared/http-service/http-service.service';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private url = API_REQUEST.books.get;
  constructor(private http: HttpService) {}

  getDetails(movie_id: string): Observable<IBook> {
    return this.http
      .get(this.url + '/volumes/' + movie_id)
      .pipe(catchError(this.handleError<IBook>('getMovieDetails')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
