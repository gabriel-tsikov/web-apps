import { Component, OnInit, Input, ViewChild, ElementRef, Output,  EventEmitter  } from '@angular/core';
import IMovie from './movie.model';
import { AuthGuardService } from 'src/app/authentication/guards/auth-guard-service';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';



@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})

export class MoviesComponent implements OnInit {
  @Input() movie: IMovie;
  @Output() addToFavorite = new EventEmitter<IMovie>();
  @Output() removeFavorite = new EventEmitter<IMovie>();
  @ViewChild('inputBox') inputBox: ElementRef
  isFavorite: boolean;
  constructor(public auth: AuthenticationService) {}
  ngOnInit(): void {
  }
  fireEvent(e) {
    this.inputBox.nativeElement.focus();
    e.stopPropagation();
    this.addToFavorite.emit(this.movie);
    this.isFavorite = true;
    return false;
  }
  fireEventRemove(e) {
    this.inputBox.nativeElement.focus();
    e.stopPropagation();
    this.removeFavorite.emit(this.movie);
    this.isFavorite = false;
    return false;
  }
  
  
}
