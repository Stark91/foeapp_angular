import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreatBuildingComponent } from './components/great-building/great-building.component';
import { GreatBuildingBoostComponent } from './components/great-building-boost/great-building-boost.component';
import { GreatBuildingBoostListComponent } from './components/great-building-boost-list/great-building-boost-list.component';
import { GreatBuildingButtonComponent } from './components/great-building-button/great-building-button.component';
import { GreatBuildingDescriptionComponent } from './components/great-building-description/great-building-description.component';
import { GreatBuildingLevelComponent } from './components/great-building-level/great-building-level.component';
import { GreatBuildingLevelTableComponent } from './components/great-building-level-table/great-building-level-table.component';
import { GreatBuildingRushComponent } from './components/great-building-rush/great-building-rush.component';
import { GreatBuildingRushTableComponent } from './components/great-building-rush-table/great-building-rush-table.component';
import { GreatBuildingSvgComponent } from './components/great-building-svg/great-building-svg.component';
import { GreatBuildingsListComponent } from './components/great-buildings-list/great-buildings-list.component';
import { FormsModule } from '@angular/forms';
import { GreatBuildingRoutingModule } from './great-building-routing.module';



@NgModule({
  declarations: [
    GreatBuildingComponent,
    GreatBuildingBoostComponent,
    GreatBuildingBoostListComponent,
    GreatBuildingButtonComponent,
    GreatBuildingDescriptionComponent,
    GreatBuildingLevelComponent,
    GreatBuildingLevelTableComponent,
    GreatBuildingRushComponent,
    GreatBuildingRushTableComponent,
    GreatBuildingSvgComponent,
    GreatBuildingsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GreatBuildingRoutingModule
  ],
  exports: [
    GreatBuildingComponent,
    GreatBuildingBoostComponent,
    GreatBuildingBoostListComponent,
    GreatBuildingButtonComponent,
    GreatBuildingDescriptionComponent,
    GreatBuildingLevelComponent,
    GreatBuildingLevelTableComponent,
    GreatBuildingRushComponent,
    GreatBuildingRushTableComponent,
    GreatBuildingSvgComponent,
    GreatBuildingsListComponent
  ]
})
export class GreatBuildingModule { }
