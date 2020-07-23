import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooksListService } from './books-components/books-list/services/books-list.service';
import { DetailsService } from './books-components/book-details/service/details.service';
import { AuthenticationService } from './authentication/services/authentication.service';
import { UserModule } from './authentication/user.module';
import { BookModule } from './books-components/book/book.module';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './shared/custom.router';
import { MyVolumesService } from './books-components/my-volumes/services/my-volumes.service';
import { AuthGuardService } from './authentication/guards/auth-guard-service';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BookModule,
  ],
  providers: [
    AuthGuardService,
    BooksListService,
    DetailsService,
    AuthenticationService,
    MyVolumesService,
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
