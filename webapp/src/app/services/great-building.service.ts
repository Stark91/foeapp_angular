import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GreatBuilding } from '../models/great-building.model';

@Injectable({
  providedIn: 'root'
})
export class GreatBuildingService {
  ages$!: Observable<GreatBuilding[]>;
  private jsonServerUrl = 'http://localhost:3000/';
  private jsonUrl = this.jsonServerUrl + 'greatbuildings';

  constructor(private http: HttpClient) { }

  getAllGreatBuildings(): Observable<GreatBuilding[]> {
    return this.http.get<GreatBuilding[]>(this.jsonUrl);
  }

  getGreatBuildingById(id: number): Observable<GreatBuilding> {
    return this.http.get<GreatBuilding>(this.jsonUrl + '/' + id);
  }

  getGreatBuildingByAge(ageId: number): Observable<GreatBuilding[]> {
    return this.http.get<GreatBuilding[]>(this.jsonUrl + '?age=' + ageId);
  }
}
