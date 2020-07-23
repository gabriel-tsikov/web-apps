import { Component, OnInit, Input } from '@angular/core';


import { Observable } from 'rxjs';
import IMovie from '../movie/movie.model';
import { MoviesListService } from './services/movies-list.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  libraries: Observable<IMovie[]>;
  results: any[];
  constructor(private moviesListService: MoviesListService) { }

  ngOnInit(){
    this.moviesListService.getMovies().subscribe(data => {
      this.libraries = data['results'];
    });
    
  }

}
