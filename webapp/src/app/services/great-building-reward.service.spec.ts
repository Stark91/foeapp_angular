import { TestBed } from '@angular/core/testing';

import { GreatBuildingRewardService } from './great-building-reward.service';

describe('GreatBuildingRewardService', () => {
  let service: GreatBuildingRewardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreatBuildingRewardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
