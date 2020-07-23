import { Component, OnInit, Input } from '@angular/core';
import IBook from './models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: IBook;

  constructor() {}

  ngOnInit(): void {}
}
