import { Component, Input } from '@angular/core';
import { GreatBuildingBoost } from '../models/great-building-boost.model';

@Component({
  selector: 'app-great-building-boost',
  templateUrl: './great-building-boost.component.html',
  styleUrls: ['./great-building-boost.component.scss']
})
export class GreatBuildingBoostComponent {
  @Input() boost!: GreatBuildingBoost;

  getBoostImage(): string {
    return '/./assets/images/boosts/' + this.boost.image;
  }
}
