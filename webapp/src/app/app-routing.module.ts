import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { AgesListComponent } from './ages-list/ages-list.component';
import { GreatBuildingsListComponent } from './great-buildings-list/great-buildings-list.component';
import { GreatBuildingComponent } from './great-building/great-building.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'ages', component: AgesListComponent},
  {path: 'ages/:id', component: GreatBuildingsListComponent},
  {path: 'gbs', component: GreatBuildingsListComponent},
  {path: 'gbs/:id/gb', component: GreatBuildingComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
