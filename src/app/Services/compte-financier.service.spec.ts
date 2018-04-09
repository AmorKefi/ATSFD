import { TestBed, inject } from '@angular/core/testing';

import { CompteFinancierService } from './compte-financier.service';

describe('CompteFinancierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompteFinancierService]
    });
  });

  it('should be created', inject([CompteFinancierService], (service: CompteFinancierService) => {
    expect(service).toBeTruthy();
  }));
});
