import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Age } from '../../../core/models/age.model';
import { AgeService } from '../../../core/services/age.service';

@Component({
  selector: 'app-ages-list',
  templateUrl: './ages-list.component.html',
  styleUrls: ['./ages-list.component.scss']
})
export class AgesListComponent implements OnInit {
  ages$!: Observable<Age[]>;

  constructor(private agesService: AgeService, private router: Router) {};

  ngOnInit(): void  {
    this.ages$ = this.agesService.getAllAges();
  }
}
