import { TestBed, inject } from '@angular/core/testing';

import { PdvServiceService } from './pdv-service.service';

describe('PdvServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdvServiceService]
    });
  });

  it('should be created', inject([PdvServiceService], (service: PdvServiceService) => {
    expect(service).toBeTruthy();
  }));
});
