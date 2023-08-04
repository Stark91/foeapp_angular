import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/components/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'ages', loadChildren: () => import('./age/age.module').then(m => m.AgeModule)},
  {path: 'gbs', loadChildren: () => import('./great-building/great-building.module').then(m => m.GreatBuildingModule)}
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
