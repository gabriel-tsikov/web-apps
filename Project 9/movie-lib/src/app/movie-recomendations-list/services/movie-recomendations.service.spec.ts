import { TestBed } from '@angular/core/testing';

import { MovieRecomendationsService } from './movie-recomendations.service';

describe('MovieRecomendationsService', () => {
  let service: MovieRecomendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieRecomendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
