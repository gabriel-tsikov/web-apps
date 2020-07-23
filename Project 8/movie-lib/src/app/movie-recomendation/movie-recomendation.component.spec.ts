import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRecomendationComponent } from './movie-recomendation.component';

describe('MovieRecomendationComponent', () => {
  let component: MovieRecomendationComponent;
  let fixture: ComponentFixture<MovieRecomendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRecomendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
