import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFavoriteNotesComponent } from './movie-favorite-notes.component';

describe('MovieFavoriteNotesComponent', () => {
  let component: MovieFavoriteNotesComponent;
  let fixture: ComponentFixture<MovieFavoriteNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFavoriteNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFavoriteNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
