import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { GreatBuilding } from '../models/great-building.model';

@Component({
  selector: 'app-great-building-button',
  templateUrl: './great-building-button.component.html',
  styleUrls: ['./great-building-button.component.scss']
})

export class GreatBuildingButtonComponent {
  @Input() gb!: GreatBuilding;

  constructor(private router: Router) {}

  onGreatBuilding(): void  {
    this.router.navigateByUrl('gbs/' + this.gb.id + '/gb');
  }

  imageStyleObject(): Object {
    return {
      background: 'url(/./assets/images/gbs/gb' + this.gb.id + '.png) no-repeat center'
    };
  }
}
