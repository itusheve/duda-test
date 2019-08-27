import { TestBed } from '@angular/core/testing';

import { ReviewsApiService } from './reviews-api.service';

describe('ReviewsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewsApiService = TestBed.get(ReviewsApiService);
    expect(service).toBeTruthy();
  });
});
