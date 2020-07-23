import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCastListComponent } from './movies-cast-list.component';

describe('MoviesCastListComponent', () => {
  let component: MoviesCastListComponent;
  let fixture: ComponentFixture<MoviesCastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesCastListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
