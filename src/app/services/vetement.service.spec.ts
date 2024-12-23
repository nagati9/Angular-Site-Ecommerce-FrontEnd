import { TestBed } from '@angular/core/testing';

import { VetementService } from './vetement.service';

describe('VetementService', () => {
  let service: VetementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
