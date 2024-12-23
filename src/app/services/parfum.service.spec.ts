import { TestBed } from '@angular/core/testing';

import { ParfumService } from './parfum.service';

describe('ParfumService', () => {
  let service: ParfumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParfumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
