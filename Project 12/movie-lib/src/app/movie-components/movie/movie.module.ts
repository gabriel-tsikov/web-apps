import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieCastComponent } from '../movie-cast/movie-cast.component';
import { MoviesCastListComponent } from '../movies-cast-list/movies-cast-list.component';
import { MovieReviewListComponent } from '../movie-review-list/movie-review-list.component';
import { MovieReviewComponent } from '../movie-review/movie-review.component';
import { MovieRecomendationsListComponent } from '../movie-recomendations-list/movie-recomendations-list.component';
import { MovieRecomendationComponent } from '../movie-recomendation/movie-recomendation.component';
import { MoviesRoutingModule } from './movie-routing.module';
import { FormsModule } from '@angular/forms'
import { AuthGuardService } from 'src/app/authentication/guards/auth-guard-service';
import { MoviesFavouriteListComponent } from '../movies-favourite-list/movies-favourite-list.component';
import { MovieFavouriteComponent } from '../movie-favourite/movie-favourite.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { MovieFavoriteNotesComponent } from '../movie-favorite-notes/movie-favorite-notes.component';


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
    MoviesFavouriteListComponent,
    MovieFavouriteComponent,
    PaginationComponent,
    MovieFavoriteNotesComponent

   
   
  ],
  imports: [
    FormsModule,
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MovieModule { }
