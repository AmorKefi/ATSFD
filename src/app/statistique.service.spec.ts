import { TestBed, inject } from '@angular/core/testing';

import { StatistiqueService } from './statistique.service';

describe('StatistiqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatistiqueService]
    });
  });

  it('should be created', inject([StatistiqueService], (service: StatistiqueService) => {
    expect(service).toBeTruthy();
  }));
});
