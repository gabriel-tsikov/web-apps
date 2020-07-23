import { Component, OnInit } from '@angular/core';
import { MovieReviewService } from './services/movie-review.service';
import IReview from './review.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-review-list',
  templateUrl: './movie-review-list.component.html',
  styleUrls: ['./movie-review-list.component.scss']
})
export class MovieReviewListComponent implements OnInit {
  reviews:IReview;
  id: number;
  
  constructor(private route: ActivatedRoute,
    private moviesRevService: MovieReviewService) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
     this.id = +params.get('id');
   })
   this.moviesRevService.getReviews(this.id).subscribe(review => {
     this.reviews = review;
   } );
  }
}
