import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';
import { MoviesCastListComponent } from './movies-cast-list/movies-cast-list.component';
import { MovieReviewListComponent } from './movie-review-list/movie-review-list.component';

const routes: Routes = [
  { path:'' , redirectTo:'/movies-list',pathMatch:'full'},
  { path: 'movies-list', component: MoviesListComponent},
  { 
    path: 'details/:id',
    component: MovieDetailsComponent
  },
  { path: 'details/:id/reviews',component: MovieReviewListComponent},
  { path: 'details/:id/casts',component: MoviesCastListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }