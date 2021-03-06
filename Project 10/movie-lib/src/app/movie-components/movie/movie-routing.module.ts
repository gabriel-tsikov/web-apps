import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieReviewListComponent } from '../movie-review-list/movie-review-list.component';
import { MoviesCastListComponent } from '../movies-cast-list/movies-cast-list.component';
import { LoginComponent } from '../../authentication/components/login/login.component';

const routes: Routes = [

  { path: 'movies-list', component: MoviesListComponent},
  { 
    path: 'details/:id',
    component: MovieDetailsComponent
  },
  { path: 'details/:id/reviews',component: MovieReviewListComponent},
  { path: 'details/:id/casts',component: MoviesCastListComponent},
  {
    path: 'login', component: LoginComponent
  },
  
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MoviesRoutingModule {

}