import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GreatBuilding } from '../../../core/models/great-building.model';
import { GreatBuildingBoost } from '../../../core/models/great-building-boost.model';
import { GreatBuildingBoostService } from '../../../core/services/great-building-boost.service';

@Component({
  selector: 'app-great-building-boost-list',
  templateUrl: './great-building-boost-list.component.html',
  styleUrls: ['./great-building-boost-list.component.scss']
})
export class GreatBuildingBoostListComponent implements OnInit {
  @Input() gb!: GreatBuilding;
  boost1$!: Observable<GreatBuildingBoost>;
  boost2$!: Observable<GreatBuildingBoost>;

  constructor(private greatBuildingBoostService: GreatBuildingBoostService) {}

  ngOnInit() {
    this.boost1$ = this.greatBuildingBoostService.getGreatBuildingBoostById(this.gb.boost1);
    if(this.gb.boost2) {
      this.boost2$ = this.greatBuildingBoostService.getGreatBuildingBoostById(this.gb.boost2);
    }
  }
}
