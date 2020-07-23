import { Component, OnInit, Input } from '@angular/core';
import { MovieCastService } from './services/movie-cast.service';
import { Observable } from 'rxjs';
import ICast from './cast.model';
import { ActivatedRoute } from '@angular/router';
import ICasts from './cast.model';

@Component({
  selector: 'app-movies-cast-list',
  templateUrl: './movies-cast-list.component.html',
  styleUrls: ['./movies-cast-list.component.scss']
})
export class MoviesCastListComponent implements OnInit {
  casts:ICasts;
  id: number;
  @Input() counte:number = 100;
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
