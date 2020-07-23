import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsService } from '../services/movie-details.service';
import { MovieCastService } from '../services/movie-cast.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  details:any;
  
  constructor(private route: ActivatedRoute, private moviesDetailsService: MovieDetailsService) { 
    
  }

  ngOnInit(): void {
    this.details = this.moviesDetailsService.getMovieDetails();
    
    
  }

  

}
