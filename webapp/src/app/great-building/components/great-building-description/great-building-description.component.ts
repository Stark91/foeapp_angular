import { Component, Input } from '@angular/core';
import { GreatBuilding } from '../../../core/models/great-building.model';

@Component({
  selector: 'app-great-building-description',
  templateUrl: './great-building-description.component.html',
  styleUrls: ['./great-building-description.component.scss']
})
export class GreatBuildingDescriptionComponent {
  @Input() gb!: GreatBuilding;

  getImageUrl(): string{
    return '/./assets/images/gbs/gb' + this.gb.id + '.png';
  }
}
