import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.scss']
})
export class MovieReviewComponent implements OnInit {
  @Input() review:any;
  show = false;
  constructor() { }

  ngOnInit(): void {
  }

}
