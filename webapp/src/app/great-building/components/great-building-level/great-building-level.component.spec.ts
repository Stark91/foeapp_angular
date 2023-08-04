import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBuildingLevelComponent } from './great-building-level.component';

describe('GreatBuildingLevelComponent', () => {
  let component: GreatBuildingLevelComponent;
  let fixture: ComponentFixture<GreatBuildingLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBuildingLevelComponent]
    });
    fixture = TestBed.createComponent(GreatBuildingLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
