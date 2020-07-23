import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './constants/app.route';

const routes: Routes = [
  {
    path: APP_ROUTES.books.path,
    loadChildren: () =>
      import('./books-components/book/book.module').then((m) => m.BookModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
