import { Component, Input, OnInit } from '@angular/core';
import { GreatBuilding } from '../../../core/models/great-building.model';
import { Observable } from 'rxjs';
import { GreatBuildingReward } from '../../../core/models/great-building-reward.model';
import { GreatBuildingRewardService } from '../../../core/services/great-building-reward.service';

@Component({
  selector: 'app-great-building-rush',
  templateUrl: './great-building-rush.component.html',
  styleUrls: ['./great-building-rush.component.scss']
})
export class GreatBuildingRushComponent implements OnInit {
  @Input() gb!: GreatBuilding;
  rewards$!: Observable<GreatBuildingReward[]>;

  constructor(private greatBuildingRewardService: GreatBuildingRewardService) {}

  ngOnInit() {
    this.rewards$ = this.greatBuildingRewardService.getGreatBuildingRewardByAge(this.gb.age);
  }
}
