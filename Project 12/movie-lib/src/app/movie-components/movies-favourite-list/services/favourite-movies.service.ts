import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/http-service/http-service.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import IMovies from '../../movies-list/movie-list.model';
import IMovie from '../../movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class FavouriteMoviesService {
  private url = 'https://practce-on-focus.firebaseio.com';
  private key = 'AIzaSyD15XONBwSn_kgvyJ7OE46Zt_CZ7_Yl6nM';

  constructor(private http: HttpService) {}

  getFavorites(localId: string): Observable<IMovie[]> {
    return this.http
      .get(this.url + `/favorites/${localId}.json`, { key: this.key })
      .pipe(catchError(this.handleError<IMovies[]>('getFavorites', [])));
  }

  setFavorites(localId:string,  movie: IMovie): Observable<IMovie> {
    return this.http.put(this.url + `/favorites/${localId}/${movie.id}.json`, movie, {key: this.key})
    .pipe(catchError(this.handleError<IMovie>('setFavorites')));

  }

  deleteFavorites(localId:string,  movie: IMovie): Observable<IMovie> {
    return this.http.delete(this.url + `/favorites/${localId}/${movie.id}.json`, {key: this.key})
    .pipe(catchError(this.handleError<IMovie>('deleteFavorites')));
  }

  patchFavorites(localId:string,  movie: IMovie): Observable<IMovie> {
    return this.http.patch(this.url + `/favorites/${localId}/${movie.id}.json`,movie, {key: this.key})
    .pipe(catchError(this.handleError<IMovie>('patchFavorites')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
