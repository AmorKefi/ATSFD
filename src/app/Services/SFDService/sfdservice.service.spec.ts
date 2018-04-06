import { TestBed, inject } from '@angular/core/testing';

import { SfdserviceService } from './sfdservice.service';

describe('SfdserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SfdserviceService]
    });
  });

  it('should be created', inject([SfdserviceService], (service: SfdserviceService) => {
    expect(service).toBeTruthy();
  }));
});
