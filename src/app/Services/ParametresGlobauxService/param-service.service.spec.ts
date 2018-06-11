import { TestBed, inject } from '@angular/core/testing';

import { ParamServiceService } from './param-service.service';

describe('ParamServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamServiceService]
    });
  });

  it('should be created', inject([ParamServiceService], (service: ParamServiceService) => {
    expect(service).toBeTruthy();
  }));
});
