import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRecomendationsListComponent } from './movie-recomendations-list.component';

describe('MovieRecomendationsListComponent', () => {
  let component: MovieRecomendationsListComponent;
  let fixture: ComponentFixture<MovieRecomendationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRecomendationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRecomendationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
