import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GreatBuilding } from '../models/great-building.model';
import { GreatBuildingService } from '../services/great-building.service';
import { GreatBuildingReward } from '../models/great-building-reward.model';
import { GreatBuildingRewardService } from '../services/great-building-reward.service';

@Component({
  selector: 'app-great-building',
  templateUrl: './great-building.component.html',
  styleUrls: ['./great-building.component.scss']
})
export class GreatBuildingComponent implements OnInit {
  gb$!: Observable<GreatBuilding>;
  gbId!: number;
  tab!: number;
  reward!: GreatBuildingReward;

  constructor(private greatBuildingService: GreatBuildingService, private greatBuildingRewardService: GreatBuildingRewardService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.tab = 0;
    this.gbId = +this.route.snapshot.params['id'];
    this.gb$ = this.greatBuildingService.getGreatBuildingById(this.gbId);
  }

  onDescription() {
    this.tab = 0;
  }

  onLevel() {
    this.tab = 1;
  }

  onRush() {
    this.tab = 2;
  }
}
