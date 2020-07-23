import { Component, OnInit, Input } from '@angular/core';
import IMovie from '../movie/movie.model';
import { MoviesListService } from './services/movies-list.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FavouriteMoviesService } from '../movies-favourite-list/services/favourite-movies.service';
import IMovies from './movie-list.model';
import { take } from 'rxjs/internal/operators';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  libraries: IMovies[];
  results: any[];
  localId:string;
  currentPage: number = 1;
  isFavorite: boolean;
  constructor(
    private moviesListService: MoviesListService,
    private route: ActivatedRoute,
    private router: Router,
    private favService: FavouriteMoviesService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((data) => {
      if (+data.get('page') >= 1) {
        this.currentPage = +data.get('page');
      }
    });
    this.moviesListService
      .getMovies(String(this.currentPage))
      .subscribe((data) => {
        this.libraries = data['results'];
      });
      this.localId = sessionStorage.getItem('localId');
  }
  nextPage(): void {
    this.currentPage++;
    this.router.navigate(['/movies-list'], {
      queryParams: { page: this.currentPage },
    });
  }

  changePage($data: number) {
    this.router.navigate(['/movies-list'], {
      queryParams: { page: $data },
    });
  }

  addToFavorite($movie: IMovie) {
   this.favService.setFavorites(this.localId, $movie).subscribe();
   this.isFavorite= true;
  }
  removeFavorite($movie: IMovie) {
    this.favService.deleteFavorites(this.localId, $movie).pipe(take(1)).subscribe(response => {
      this.libraries = Object.values(response);
      this.isFavorite= false;
    });
  }
}
