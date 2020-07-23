import { NgModule } from '@angular/core';
import { BooksListComponent } from '../books-list/books-list.component';
import { BookComponent } from './book.component';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { MyVolumesComponent } from '../my-volumes/my-volumes.component';
import { ModalComponent } from '../modal/modal.component';
import { MyVolumeComponent } from '../my-volume/my-volume.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { UserModule } from 'src/app/authentication/user.module';
import { SearchPageComponent } from '../search-page/search-page.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';

@NgModule({
  declarations: [
    BooksListComponent,
    BookComponent,
    BookDetailsComponent,
    MyVolumesComponent,
    ModalComponent,
    MyVolumeComponent,
    SearchPageComponent,
    SpinnerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BookRoutingModule,
    UserModule,
  ],
})
export class BookModule {}
