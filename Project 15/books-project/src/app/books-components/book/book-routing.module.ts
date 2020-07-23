import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { LoginComponent } from 'src/app/authentication/components/login/login.component';
import { MyVolumesComponent } from '../my-volumes/my-volumes.component';
import { ModalComponent } from '../modal/modal.component';
import { BooksListComponent } from '../books-list/books-list.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { AuthGuardService } from 'src/app/authentication/guards/auth-guard-service';
import { LoginGuardService } from 'src/app/authentication/guards/login-guard-service';

const routes: Routes = [
  { path: '', redirectTo: '/search-page', pathMatch: 'full' },
  { path: 'search-page', component: SearchPageComponent },
  {
    path: 'books-list',
    component: BooksListComponent,
  },
  { path: 'details/:id', component: BookDetailsComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'my-volumes',
    component: MyVolumesComponent,
    canActivate: [LoginGuardService],
  },
  {
    path: 'modal',
    component: ModalComponent,
    canActivate: [LoginGuardService],
  },
  {
    path: 'modal/:id',
    component: ModalComponent,
    canActivate: [LoginGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
