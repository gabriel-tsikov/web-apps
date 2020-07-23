import { Component, OnInit, Input } from '@angular/core';
import ICast from './movie-cast.model';


@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss']
})
export class MovieCastComponent implements OnInit {
  @Input() cast:ICast;
  constructor() { }

  ngOnInit(): void {
    
  }

}
