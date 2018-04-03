import { TestBed, inject } from '@angular/core/testing';

import { CrudRfService } from './crud-rf.service';

describe('CrudRfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudRfService]
    });
  });

  it('should be created', inject([CrudRfService], (service: CrudRfService) => {
    expect(service).toBeTruthy();
  }));
});
