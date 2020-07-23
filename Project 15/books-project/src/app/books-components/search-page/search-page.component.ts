import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  searchForm: FormGroup;
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
 
  ngOnInit() {
    let initialSearchValue = this.route.snapshot.queryParamMap.get('searchText');
 
    let initialMaxResultValue =
      this.route.snapshot.queryParams['maxResults'] || 10;
 
    let initialOrderByValue =
      this.route.snapshot.queryParams['orderBy'] || 'relevance';
 
    let InitialFilterValue = this.route.snapshot.queryParams['filter'] || 'full';
 
    let InitialPrintTypeValue =
      this.route.snapshot.queryParams['printType'] || 'all';
 
    this.searchForm = this.fb.group({
      searchText: [initialSearchValue, [Validators.required]],
      filters: this.fb.group({
        maxResults: [initialMaxResultValue],
        orderBy: [initialOrderByValue],
        filter: [InitialFilterValue],
        printType: [InitialPrintTypeValue],
      }),
    });
  }
 
  generateParams(): Object {
    let formValues = this.searchForm.get('filters').value;
    let queryParams: Object = {
      q: this.searchForm.value.searchText,
      maxResults: formValues.maxResults
    };
    if (formValues.orderBy) {
      queryParams['orderBy'] = formValues.orderBy;
    }
    if (formValues.filter) {
      queryParams['filter'] = formValues.filter;
    }
    if (formValues.printType) {
      queryParams['printType'] = formValues.printType;
    }
    return queryParams;
  }
 
  search(): void {
    if (this.searchForm.value.searchText) {
      this.router.navigate([`/books-list`], {
        queryParams: this.generateParams(),
      });
    }
  }
}


