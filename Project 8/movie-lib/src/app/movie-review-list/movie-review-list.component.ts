import { Component, OnInit } from '@angular/core';
import { MovieReviewService } from '../services/movie-review.service';

@Component({
  selector: 'app-movie-review-list',
  templateUrl: './movie-review-list.component.html',
  styleUrls: ['./movie-review-list.component.css']
})
export class MovieReviewListComponent implements OnInit {
  reviews:any;
  constructor(private moviewReviewService: MovieReviewService) { }

  ngOnInit(): void {
    this.reviews = this.moviewReviewService.getReview();
    console.log(this.reviews)
  }

}
