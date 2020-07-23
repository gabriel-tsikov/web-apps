import { Component, OnInit, Input, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import IMovie from '../movie/movie.model';


@Component({
  selector: 'app-movie-favourite',
  templateUrl: './movie-favourite.component.html',
  styleUrls: ['./movie-favourite.component.scss']
})
export class MovieFavouriteComponent implements OnInit {

  @Input() movie: IMovie;
  @ViewChild('inputBox') inputBox: ElementRef
  @Output() removeFavorite = new EventEmitter<IMovie>();
  constructor() {}
  ngOnInit(): void {}
  fireEvent(e) {
    this.inputBox.nativeElement.focus();
    e.stopPropagation();
    this.removeFavorite.emit(this.movie)
    return false;
  }
}
