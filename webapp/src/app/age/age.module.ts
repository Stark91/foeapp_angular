import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeComponent } from './components/age/age.component';
import { AgesListComponent } from './components/ages-list/ages-list.component';
import { RouterModule } from '@angular/router';
import { AgeRoutingModule } from './age-routing.module';



@NgModule({
  declarations: [
    AgeComponent,
    AgesListComponent
  ],
  imports: [
    CommonModule,
    AgeRoutingModule
  ],
  exports: [
    AgeComponent,
    AgesListComponent
  ]
})
export class AgeModule { }
