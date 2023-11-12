import { TestBed } from '@angular/core/testing';

import { GhostkingDataService } from './ghostking-data.service';

describe('GhostkingDataService', () => {
  let service: GhostkingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhostkingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
