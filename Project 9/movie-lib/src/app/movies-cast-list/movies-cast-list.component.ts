import { Component, OnInit } from '@angular/core';
import { MovieCastService } from './services/movie-cast.service';
import { Observable } from 'rxjs';
import ICast from './cast.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-cast-list',
  templateUrl: './movies-cast-list.component.html',
  styleUrls: ['./movies-cast-list.component.scss']
})
export class MoviesCastListComponent implements OnInit {
  casts:ICast;
  id: number;
  
  constructor(private route: ActivatedRoute,
    private moviesCastService: MovieCastService) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
     this.id = +params.get('id');
   })
   this.moviesCastService.getCasts(this.id).subscribe(cast => {
     this.casts = cast;
   } );
  }
}
