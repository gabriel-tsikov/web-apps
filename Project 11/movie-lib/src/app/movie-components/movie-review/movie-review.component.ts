import { Component, OnInit, Input } from '@angular/core';
import IReview from './review.model';


@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.scss']
})
export class MovieReviewComponent implements OnInit {
  @Input() review:IReview;
  
  show = false;
  constructor() { }

  ngOnInit(): void {
  }

}
