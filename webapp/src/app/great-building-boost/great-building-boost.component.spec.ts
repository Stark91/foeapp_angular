import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBuildingBoostComponent } from './great-building-boost.component';

describe('GreatBuildingBoostComponent', () => {
  let component: GreatBuildingBoostComponent;
  let fixture: ComponentFixture<GreatBuildingBoostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBuildingBoostComponent]
    });
    fixture = TestBed.createComponent(GreatBuildingBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
