import { TestBed } from '@angular/core/testing';

import { GreatBuildingService } from './great-building.service';

describe('GreatBuildingService', () => {
  let service: GreatBuildingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreatBuildingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
