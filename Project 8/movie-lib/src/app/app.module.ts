import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { MoviesListService } from './services/movies-list.service';
import { MovieDetailsService } from './services/movie-details.service';
import { MovieCastService } from './services/movie-cast.service';

import { MovieModule } from './movie/movie.module';
import { MovieReviewService } from './services/movie-review.service';
import { MovieRecomendationsService } from './services/movie-recomendations.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    
    
  ],
  imports: [
    MovieModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MoviesListService,MovieDetailsService,MovieCastService,MovieReviewService,MovieRecomendationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
