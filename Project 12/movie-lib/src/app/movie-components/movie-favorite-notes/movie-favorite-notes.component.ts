import { Component, OnInit } from '@angular/core';
import { FavouriteMoviesService } from '../movies-favourite-list/services/favourite-movies.service';
import IMovie from '../movie/movie.model';

@Component({
  selector: 'app-movie-favorite-notes',
  templateUrl: './movie-favorite-notes.component.html',
  styleUrls: ['./movie-favorite-notes.component.scss']
})
export class MovieFavoriteNotesComponent implements OnInit {
  favorites: IMovie[];
  localId: string;
  $movie: IMovie;

  constructor(private favService: FavouriteMoviesService) { }

  ngOnInit(): void {
    this.localId = sessionStorage.getItem('localId');
    this.addNote(this.$movie);
  }

  addNote($movie : IMovie) {
    this.favService.patchFavorites(this.localId,$movie).subscribe();
  }

}
