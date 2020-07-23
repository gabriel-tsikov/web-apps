import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';
import IMovie from '../movie/movie.model';
import { MoviesListService } from './services/movies-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  libraries: Observable<IMovie[]>;
  results: any[];
  currentPage: number = 1;
  constructor(
    private moviesListService: MoviesListService,
    private route: ActivatedRoute,
    private router: Router
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
  }
  nextPage():void {
    this.currentPage++;
    this.router.navigate(['/movies-list'], {
      queryParams: { page: this.currentPage },
    });
  }
}
