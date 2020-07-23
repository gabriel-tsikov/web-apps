import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from './movie-components/movie-details/movie-details.component';
import { MoviesListComponent } from './movie-components/movies-list/movies-list.component';
import { MovieReviewComponent } from './movie-components/movie-review/movie-review.component';
import { MovieCastComponent } from './movie-components/movie-cast/movie-cast.component';
import { MoviesCastListComponent } from './movie-components/movies-cast-list/movies-cast-list.component';
import { MovieReviewListComponent } from './movie-components/movie-review-list/movie-review-list.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { APP_ROUTES } from './constants/app.route';

const routes: Routes = [
  { path:'' , redirectTo:'/movies-list',pathMatch:'full'},
  { path: APP_ROUTES.movies.path, loadChildren: ()=> import('./movie-components/movie/movie.module').then(m => m.MovieModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }