import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GreatBuildingReward } from 'src/app/core/models/great-building-reward.model';
import { GreatBuilding } from 'src/app/core/models/great-building.model';
import { GreatBuildingRewardService } from 'src/app/core/services/great-building-reward.service';
import { GreatBuildingService } from 'src/app/core/services/great-building.service';

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
