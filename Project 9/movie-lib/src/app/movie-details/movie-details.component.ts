import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsService } from './services/movie-details.service';
import { MovieCastService } from '../movies-cast-list/services/movie-cast.service';
import { Observable } from 'rxjs';
import IDetails from './details.model';
import IMovie from '../movie/movie.model';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  details:IDetails;
  id: number;
  constructor(
    private moviesDetailsService: MovieDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')
    })

    this.moviesDetailsService.getMovieDetails(this.id).subscribe(params => {
      this.details = params;
    });
  }
}
