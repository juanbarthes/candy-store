import { TestBed } from '@angular/core/testing';

import { CandyCartService } from './candy-cart.service';

describe('CandyCartService', () => {
  let service: CandyCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandyCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
