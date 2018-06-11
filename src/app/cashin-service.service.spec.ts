import { TestBed, inject } from '@angular/core/testing';

import { CashinServiceService } from './cashin-service.service';

describe('CashinServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashinServiceService]
    });
  });

  it('should be created', inject([CashinServiceService], (service: CashinServiceService) => {
    expect(service).toBeTruthy();
  }));
});
