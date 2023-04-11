import { TestBed } from '@angular/core/testing';

import { CountryStateCitysService } from './country-state-citys.service';

describe('CountryStateCitysService', () => {
  let service: CountryStateCitysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryStateCitysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
