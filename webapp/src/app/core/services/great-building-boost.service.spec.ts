import { TestBed } from '@angular/core/testing';

import { GreatBuildingBoostService } from './great-building-boost.service';

describe('GreatBuildingBoostService', () => {
  let service: GreatBuildingBoostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreatBuildingBoostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
