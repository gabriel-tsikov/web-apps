import { Component, OnInit, Input } from '@angular/core';
import { MovieCastService } from '../services/movie-cast.service';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.css']
})
export class MovieCastComponent implements OnInit {
  @Input() cast:any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
