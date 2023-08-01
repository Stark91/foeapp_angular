import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBuildingRushTableComponent } from './great-building-rush-table.component';

describe('GreatBuildingRushTableComponent', () => {
  let component: GreatBuildingRushTableComponent;
  let fixture: ComponentFixture<GreatBuildingRushTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBuildingRushTableComponent]
    });
    fixture = TestBed.createComponent(GreatBuildingRushTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
