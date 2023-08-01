import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { GreatBuildingBoost } from '../models/great-building-boost.model';

@Injectable({
  providedIn: 'root'
})
export class GreatBuildingBoostService {
  boosts$!: Observable<GreatBuildingBoost[]>;
  private jsonServerUrl = 'http://localhost:3000/';
  private jsonUrl = this.jsonServerUrl + 'greatbuildingboosts';

  constructor(private http: HttpClient) { }

  getAllGreatBuildingBoosts(): Observable<GreatBuildingBoost[]> {
    return this.http.get<GreatBuildingBoost[]>(this.jsonUrl);
  }

  getGreatBuildingBoostById(id: number): Observable<GreatBuildingBoost> {
    return this.http.get<GreatBuildingBoost>(this.jsonUrl + '/' + id);
  }
}
