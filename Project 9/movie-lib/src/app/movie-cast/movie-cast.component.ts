import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss']
})
export class MovieCastComponent implements OnInit {
  @Input() cast:any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
