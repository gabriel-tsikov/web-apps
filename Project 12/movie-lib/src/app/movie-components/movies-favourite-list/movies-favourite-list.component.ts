import { Component, OnInit, Input } from '@angular/core';

import { FavouriteMoviesService } from './services/favourite-movies.service';

import { take, repeat } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
import IMovie from '../movie/movie.model';

@Component({
  selector: 'app-movies-favourite-list',
  templateUrl: './movies-favourite-list.component.html',
  styleUrls: ['./movies-favourite-list.component.scss'],
})
export class MoviesFavouriteListComponent implements OnInit {
  favorites?: IMovie[];
  results: any[];
  localId: string;

  constructor(
    private favMovies: FavouriteMoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.localId = sessionStorage.getItem('localId');

    this.favMovies
      .getFavorites(this.localId)
      .subscribe((data) => (this.favorites = Object.values(data)));
  }

  removeFavorite($movie: IMovie) {
    this.favMovies.deleteFavorites(this.localId, $movie).subscribe();
    let index = this.favorites.indexOf($movie);

    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}
