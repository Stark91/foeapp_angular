import { NgModule } from '@angular/core';
import { AgesListComponent } from './components/ages-list/ages-list.component';
import { GreatBuildingsListComponent } from '../great-building/components/great-buildings-list/great-buildings-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: AgesListComponent},
  {path: ':id', component: GreatBuildingsListComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AgeRoutingModule { }
