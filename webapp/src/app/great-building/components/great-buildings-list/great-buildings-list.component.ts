import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { GreatBuilding } from '../../../core/models/great-building.model';
import { GreatBuildingService } from '../../../core/services/great-building.service';

@Component({
  selector: 'app-great-buildings-list',
  templateUrl: './great-buildings-list.component.html',
  styleUrls: ['./great-buildings-list.component.scss']
})
export class GreatBuildingsListComponent implements OnInit {
  gbs$!: Observable<GreatBuilding[]>;

  constructor(private greatBuildingService: GreatBuildingService, private route: ActivatedRoute) {}

  ngOnInit() {
    const ageId = +this.route.snapshot.params['id'];
    this.gbs$ = this.getGreatBuildings(ageId);
  }

  getGreatBuildings(ageId: number): Observable<GreatBuilding[]> {
    if(isNaN(ageId)) {
      return this.greatBuildingService.getAllGreatBuildings();
    } else {
      return this.greatBuildingService.getGreatBuildingByAge(ageId);
    }
  }
}
