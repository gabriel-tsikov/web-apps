import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/http-service/http-service.service';
import { API_REQUEST } from 'src/app/constants/api';
import { Observable, of } from 'rxjs';
import IBooks from '../books.model';
import { catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksListService {
  private url: string = API_REQUEST.books.get;
  constructor(private http: HttpService) {}

  getBooks(
    searchText: string,
    maxResults: string,
    orderBy: string,
    filter: string,
    printType: string
  ): Observable<IBooks[]> {
    let queryParams = { q: searchText };
    if (orderBy) {
      queryParams['orderBy'] = orderBy;
    }
    if (maxResults) {
      queryParams['maxResults'] = maxResults;
    }
    if (filter) {
      queryParams['filter'] = filter;
    }
    if (printType) {
      queryParams['printType'] = printType;
    }

    return this.http
      .get(this.url + '/volumes', queryParams)
      .pipe(catchError(this.handleError<IBooks[]>('getBooks', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
