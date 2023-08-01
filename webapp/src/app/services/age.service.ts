import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Age } from '../models/age.model';

@Injectable({
  providedIn: 'root'
})
export class AgeService {
  ages$!: Observable<Age[]>;
  private jsonServerUrl = 'http://localhost:3000/';
  private jsonUrl = this.jsonServerUrl + 'ages';

  constructor(private http: HttpClient) { }

  getAllAges(): Observable<Age[]> {
    return this.http.get<Age[]>(this.jsonUrl);
  }

  getAgeById(id: number): Observable<Age> {
    return this.http.get<Age>(this.jsonUrl + '/' + id);
  }
}
