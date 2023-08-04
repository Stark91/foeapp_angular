import { Component, Input, OnInit } from '@angular/core';
import { GreatBuilding } from '../../../core/models/great-building.model';
import { GreatBuildingRewardService } from '../../../core/services/great-building-reward.service';
import { Observable } from 'rxjs';
import { GreatBuildingReward } from '../../../core/models/great-building-reward.model';

@Component({
  selector: 'app-great-building-level',
  templateUrl: './great-building-level.component.html',
  styleUrls: ['./great-building-level.component.scss']
})
export class GreatBuildingLevelComponent implements OnInit {
  @Input() gb!: GreatBuilding;
  rewards$!: Observable<GreatBuildingReward[]>;

  constructor(private greatBuildingRewardService: GreatBuildingRewardService) {}

  ngOnInit() {
    this.rewards$ = this.greatBuildingRewardService.getGreatBuildingRewardByAge(this.gb.age);
  }
}
