import { Component, OnInit } from '@angular/core';
import { MovieCastService } from '../services/movie-cast.service';

@Component({
  selector: 'app-movies-cast-list',
  templateUrl: './movies-cast-list.component.html',
  styleUrls: ['./movies-cast-list.component.css']
})
export class MoviesCastListComponent implements OnInit {
  casts:any;
  constructor(private moviesCastService: MovieCastService) { }

  ngOnInit(): void {
    this.casts = this.moviesCastService.getCast();
  }

}
