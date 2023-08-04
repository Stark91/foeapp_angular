import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Age } from 'src/app/core/models/age.model';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent {
  @Input() age!: Age;

  constructor(private router: Router) {}

  onAge(): void  {
    this.router.navigateByUrl('ages/' + this.age.id);
  }
}
