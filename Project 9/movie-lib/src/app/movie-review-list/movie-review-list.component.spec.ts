import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReviewListComponent } from './movie-review-list.component';

describe('MovieReviewListComponent', () => {
  let component: MovieReviewListComponent;
  let fixture: ComponentFixture<MovieReviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieReviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
