import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreatBuildingsListComponent } from './components/great-buildings-list/great-buildings-list.component';
import { GreatBuildingComponent } from './components/great-building/great-building.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: GreatBuildingsListComponent},
  {path: ':id/gb', component: GreatBuildingComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GreatBuildingRoutingModule { }
