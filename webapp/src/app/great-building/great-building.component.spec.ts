import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBuildingComponent } from './great-building.component';

describe('GreatBuildingComponent', () => {
  let component: GreatBuildingComponent;
  let fixture: ComponentFixture<GreatBuildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBuildingComponent]
    });
    fixture = TestBed.createComponent(GreatBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
