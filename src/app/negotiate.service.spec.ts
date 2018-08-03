import { TestBed, inject } from '@angular/core/testing';

import { NegotiateService } from './negotiate.service';

describe('NegotiateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NegotiateService]
    });
  });

  it('should be created', inject([NegotiateService], (service: NegotiateService) => {
    expect(service).toBeTruthy();
  }));
});
