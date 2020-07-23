import { Injectable } from '@angular/core';
import { API_REQUEST } from 'src/app/constants/api';
import { Observable, of } from 'rxjs';
import IBooks from '../../books-list/books.model';
import { HttpService } from 'src/app/shared/http-service/http-service.service';
import { catchError } from 'rxjs/internal/operators/catchError';
import IBook from '../../book/models/book.model';
import { IVolume } from '../../my-volume/volume.model';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class MyVolumesService {
  private url: string = API_REQUEST.volumes.get;
  private apiKey: string = API_REQUEST.apiKey.get;
  localId: string;
  constructor(
    private http: HttpService,
    private authService: AuthenticationService
  ) {
    this.localId = this.authService.getLocalId();
  }

  getVolumes(): Observable<IVolume[]> {
    return this.http
      .get(this.url + `/my-books/${this.localId}.json`, { key: this.apiKey })
      .pipe(catchError(this.handleError<IVolume[]>('getVolumes', [])));
  }

  setVolumes(volume: IVolume): Observable<IVolume> {
    return this.http
      .put(
        this.url + `/my-books/${this.localId}/${volume.id}.json`,
        JSON.stringify(volume),
        {
          key: this.apiKey,
        }
      )
      .pipe(catchError(this.handleError<IVolume>('setVolumes')));
  }

  deleteVolumes(volume: IVolume): Observable<IVolume> {
    return this.http
      .delete(this.url + `/my-books/${this.localId}/${volume.id}.json`, {
        key: this.apiKey,
      })
      .pipe(catchError(this.handleError<IVolume>('deleteVolumes')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
