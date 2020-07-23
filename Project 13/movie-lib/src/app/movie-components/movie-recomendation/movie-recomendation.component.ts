import { Component, OnInit, Input } from '@angular/core';
import IRecomendations, { IRecomendation } from '../movie-recomendations-list/recomendations.model';

@Component({
  selector: 'app-movie-recomendation',
  templateUrl: './movie-recomendation.component.html',
  styleUrls: ['./movie-recomendation.component.scss']
})
export class MovieRecomendationComponent implements OnInit {
  @Input() recomendation:IRecomendation;
  constructor() { }

  ngOnInit(): void {
  }

}
