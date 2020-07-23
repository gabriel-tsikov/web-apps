import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsService } from './services/movie-details.service';
import { MovieCastService } from '../movies-cast-list/services/movie-cast.service';
import { Observable } from 'rxjs';
import IDetails from './details.model';
import IMovie from '../movie/movie.model';
import ICast from '../movies-cast-list/cast.model';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  details:IDetails;
  id: number;
  casts:ICast;
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

  getGenre(genres: any):string {
    let arr: string[] = [];
    genres.forEach((e: { name: string; }) => arr.push(e.name));
    return arr.join(', ');
  }
}
