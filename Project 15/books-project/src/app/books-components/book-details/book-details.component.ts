import { Component, OnInit } from '@angular/core';
import IBook from '../book/models/book.model';
import { DetailsService } from './service/details.service';
import { ActivatedRoute } from '@angular/router';
import { StripHtmlPipe } from 'src/app/shared/striped.pipe';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  details: IBook;
  id: string;
  description: string;
  categories: [];
  
  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.detailsService
      .getDetails(this.id)
      .subscribe((data) => (this.details = data));
  }

  stripHtmlPipe(description: string): string {
    if (description === null || description === '') {
      return '';
    } else {
      return description.replace(/<(?:.|\n)*?>/gm, ' ');
    }
  }

  categoriesRegex(categories: Array<any>) {
    let singelCat: string = '';
    if (categories.length > 0) {
      categories.forEach((author) => {
        singelCat += `${author}, `;
      });
      singelCat = singelCat.replace(/,\s*$/, '');
      return singelCat;
    }
  }
}
