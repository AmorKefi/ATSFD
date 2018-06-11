import { TestBed, inject } from '@angular/core/testing';

import { CompensationService } from './compensation.service';

describe('CompensationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompensationService]
    });
  });

  it('should be created', inject([CompensationService], (service: CompensationService) => {
    expect(service).toBeTruthy();
  }));
});
