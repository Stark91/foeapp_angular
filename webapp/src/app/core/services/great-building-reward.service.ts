import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { GreatBuildingReward } from '../models/great-building-reward.model';

@Injectable({
  providedIn: 'root'
})
export class GreatBuildingRewardService {
  rewards$!: Observable<GreatBuildingReward[]>;
  private jsonServerUrl = 'http://localhost:3000/';
  private jsonUrl = this.jsonServerUrl + 'greatbuildingrewards';

  constructor(private http: HttpClient) { }

  getAllGreatBuildingRewards(): Observable<GreatBuildingReward[]> {
    return this.http.get<GreatBuildingReward[]>(this.jsonUrl);
  }

  getGreatBuildingRewardById(id: number): Observable<GreatBuildingReward> {
    return this.http.get<GreatBuildingReward>(this.jsonUrl + '/' + id);
  }

  getGreatBuildingRewardByAge(ageId: number): Observable<GreatBuildingReward[]> {
    return this.http.get<GreatBuildingReward[]>(this.jsonUrl + '?age=' + ageId);
  }

  getGreatBuildingRewardByAgeAndLvl(ageId: number, lvl: number): Observable<GreatBuildingReward[]> {
    return this.http.get<GreatBuildingReward[]>(this.jsonUrl + '?age=' + ageId + '&level=' + lvl);
  }
}
