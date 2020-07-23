import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-recomendation',
  templateUrl: './movie-recomendation.component.html',
  styleUrls: ['./movie-recomendation.component.css']
})
export class MovieRecomendationComponent implements OnInit {
  @Input() recomendation:any;
  constructor() { }

  ngOnInit(): void {
  }

}
