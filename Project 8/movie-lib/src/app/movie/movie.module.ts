import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieCastComponent } from '../movie-cast/movie-cast.component';
import { MoviesCastListComponent } from '../movies-cast-list/movies-cast-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { MovieReviewListComponent } from '../movie-review-list/movie-review-list.component';
import { MovieReviewComponent } from '../movie-review/movie-review.component';
import { MovieRecomendationsListComponent } from '../movie-recomendations-list/movie-recomendations-list.component';
import { MovieRecomendationComponent } from '../movie-recomendation/movie-recomendation.component';




@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieCastComponent,
    MoviesCastListComponent,
    MovieReviewListComponent,
    MovieReviewComponent,
    MovieRecomendationsListComponent,
    MovieRecomendationComponent,

   
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class MovieModule { }
