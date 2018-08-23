import { TestBed, inject } from '@angular/core/testing';

import { IterceptorService } from './iterceptor.service';

describe('IterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IterceptorService]
    });
  });

  it('should be created', inject([IterceptorService], (service: IterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
