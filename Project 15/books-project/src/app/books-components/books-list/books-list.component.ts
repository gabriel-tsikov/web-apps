import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import IBooks from './books.model';
import { BooksListService } from './services/books-list.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  books: IBooks[];
  items: any[];
  searchText: string;
  maxResults: string;
  orderBy: string;
  printType: string;
  filter: string;
  showSpinner: boolean = true;
  constructor(
    private searchService: BooksListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.queryParamMap.subscribe((data) => {
      this.searchText = data.get('q');
      this.maxResults = data.get('maxResults');
      this.orderBy = data.get('orderBy');
      this.filter = data.get('filter');
      this.printType = data.get('printType');
    });

    this.searchService
      .getBooks(
        this.searchText,
        this.maxResults,
        this.orderBy,
        this.filter,
        this.printType
      )
      .subscribe((data) => {
        this.books = Object.values(data['items']);
        this.showSpinner = false;
      });
  }
}
