import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Output() changePage = new EventEmitter<number>();
  @Input() currentPage: number;
  pager: any = {};
  totalPages: number = 500;
  constructor() {}

  ngOnInit(): void {
    this.setPage(this.currentPage);
  }
  setPage(page: number) {
    this.pager = this.getPager(page);

    this.changePage.emit(this.pager.currentPage);
  }

  getPager(currentPage: number) {
    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > this.totalPages) {
      currentPage = this.totalPages;
    }

    let startPage: number, endPage: number;

    if (this.totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = this.totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= this.totalPages) {
        startPage = this.totalPages - 9;
        endPage = this.totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );

    return {
      currentPage: currentPage,
      totalPages: this.totalPages,
      startPage: startPage,
      endPage: endPage,
      pages: pages,
    };
  }
}
