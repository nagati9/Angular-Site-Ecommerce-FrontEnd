import { TestBed } from '@angular/core/testing';

import { SkincareService } from './skincare.service';

describe('ParfumService', () => {
  let service: SkincareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkincareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
