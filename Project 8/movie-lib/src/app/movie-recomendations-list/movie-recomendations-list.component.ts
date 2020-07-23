import { Component, OnInit } from '@angular/core';
import { MovieRecomendationsService } from '../services/movie-recomendations.service';

@Component({
  selector: 'app-movie-recomendations-list',
  templateUrl: './movie-recomendations-list.component.html',
  styleUrls: ['./movie-recomendations-list.component.css']
})
export class MovieRecomendationsListComponent implements OnInit {
  recomendations:any;
  constructor(private movieRecomendationsService: MovieRecomendationsService) { }

  ngOnInit(): void {
    this.recomendations = this.movieRecomendationsService.getRecomendations();
  }

}
