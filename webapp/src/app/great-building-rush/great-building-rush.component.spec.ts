import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBuildingRushComponent } from './great-building-rush.component';

describe('GreatBuildingRushComponent', () => {
  let component: GreatBuildingRushComponent;
  let fixture: ComponentFixture<GreatBuildingRushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBuildingRushComponent]
    });
    fixture = TestBed.createComponent(GreatBuildingRushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
