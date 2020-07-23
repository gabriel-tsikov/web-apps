import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './constants/app.route';
import { AuthGuardService } from './authentication/guards/auth-guard-service';


const routes: Routes = [
  { path:'' , redirectTo:'/movies-list',pathMatch:'full'},
  { path: APP_ROUTES.movies.path, loadChildren: ()=> import('./movie-components/movie/movie.module').then(m => m.MovieModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }