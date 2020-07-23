import { Component, OnInit } from '@angular/core';

import IRecomendations from './recomendations.model';
import { ActivatedRoute } from '@angular/router';
import { MovieRecomendationsService } from './services/movie-recomendations.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-recomendations-list',
  templateUrl: './movie-recomendations-list.component.html',
  styleUrls: ['./movie-recomendations-list.component.scss']
})
export class MovieRecomendationsListComponent implements OnInit {
  recomendations:Observable<IRecomendations[]>;
  id: number;
  results: any[];
  
  constructor(private route: ActivatedRoute,
    private movieRecService: MovieRecomendationsService) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
     this.id = +params.get('id');
   })
   this.movieRecService.getRecomendations(this.id).subscribe(review => {
     this.recomendations = review['results'];
   } );
  }

}
