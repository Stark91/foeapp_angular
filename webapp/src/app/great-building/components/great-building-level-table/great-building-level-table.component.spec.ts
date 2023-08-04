import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBuildingLevelTableComponent } from './great-building-level-table.component';

describe('GreatBuildingLevelTableComponent', () => {
  let component: GreatBuildingLevelTableComponent;
  let fixture: ComponentFixture<GreatBuildingLevelTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBuildingLevelTableComponent]
    });
    fixture = TestBed.createComponent(GreatBuildingLevelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
