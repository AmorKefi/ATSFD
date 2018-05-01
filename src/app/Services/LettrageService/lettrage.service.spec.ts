import { TestBed, inject } from '@angular/core/testing';

import { LettrageService } from './lettrage.service';

describe('LettrageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LettrageService]
    });
  });

  it('should be created', inject([LettrageService], (service: LettrageService) => {
    expect(service).toBeTruthy();
  }));
});
