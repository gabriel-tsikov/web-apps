import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFavouriteListComponent } from './movies-favourite-list.component';

describe('MoviesFavouriteListComponent', () => {
  let component: MoviesFavouriteListComponent;
  let fixture: ComponentFixture<MoviesFavouriteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesFavouriteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFavouriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
