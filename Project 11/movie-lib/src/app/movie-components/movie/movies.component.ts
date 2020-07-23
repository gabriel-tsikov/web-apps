import { Component, OnInit, Input } from '@angular/core';
import IMovie from './movie.model';



@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @Input() movie: IMovie;
  constructor() {}
  ngOnInit(): void {}
}
