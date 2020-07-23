import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';


import { MovieDetailsService } from './movie-details/services/movie-details.service';
import { MovieCastService } from './movies-cast-list/services/movie-cast.service';

import { MovieModule } from './movie/movie.module';
import { MovieReviewService } from './movie-review-list/services/movie-review.service';
import { MovieRecomendationsService } from './movie-recomendations-list/services/movie-recomendations.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule} from '@angular/common/http';
import { MoviesListService } from './movies-list/services/movies-list.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
   
    
  ],
  imports: [
    MovieModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MoviesListService,MovieDetailsService,MovieCastService,MovieReviewService,MovieRecomendationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
