import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AgesListComponent } from './ages-list/ages-list.component';
import { GreatBuildingsListComponent } from './great-buildings-list/great-buildings-list.component';
import { GreatBuildingComponent } from './great-building/great-building.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AgeComponent } from './age/age.component';
import { GreatBuildingButtonComponent } from './great-building-button/great-building-button.component';
import { GreatBuildingBoostComponent } from './great-building-boost/great-building-boost.component';
import { GreatBuildingBoostListComponent } from './great-building-boost-list/great-building-boost-list.component';
import { GreatBuildingSvgComponent } from './great-building-svg/great-building-svg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GreatBuildingDescriptionComponent } from './great-building-description/great-building-description.component';
import { GreatBuildingLevelComponent } from './great-building-level/great-building-level.component';
import { GreatBuildingRushComponent } from './great-building-rush/great-building-rush.component';
import { GreatBuildingLevelTableComponent } from './great-building-level-table/great-building-level-table.component';
import { GreatBuildingRushTableComponent } from './great-building-rush-table/great-building-rush-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AgesListComponent,
    GreatBuildingsListComponent,
    GreatBuildingComponent,
    HeaderComponent,
    AgeComponent,
    GreatBuildingButtonComponent,
    GreatBuildingBoostComponent,
    GreatBuildingBoostListComponent,
    GreatBuildingSvgComponent,
    GreatBuildingDescriptionComponent,
    GreatBuildingLevelComponent,
    GreatBuildingRushComponent,
    GreatBuildingLevelTableComponent,
    GreatBuildingRushTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
