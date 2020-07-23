import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailsService } from './movie-components/movie-details/services/movie-details.service';
import { MovieCastService } from './movie-components/movies-cast-list/services/movie-cast.service';
import { MovieModule } from './movie-components/movie/movie.module';
import { MovieReviewService } from './movie-components/movie-review-list/services/movie-review.service';
import { MovieRecomendationsService } from './movie-components/movie-recomendations-list/services/movie-recomendations.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule} from '@angular/common/http';
import { MoviesListService } from './movie-components/movies-list/services/movies-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './authentication/user.module';
import { AuthenticationService } from './authentication/services/authentication.service';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './shared/custom.router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    
   
    
  ],
  imports: [
    UserModule,
    ReactiveFormsModule,
    FormsModule,
    MovieModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MoviesListService,MovieDetailsService,MovieCastService,MovieReviewService,MovieRecomendationsService,AuthenticationService,
  {
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
