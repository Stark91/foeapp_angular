import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBuildingBoostListComponent } from './great-building-boost-list.component';

describe('GreatBuildingBoostListComponent', () => {
  let component: GreatBuildingBoostListComponent;
  let fixture: ComponentFixture<GreatBuildingBoostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBuildingBoostListComponent]
    });
    fixture = TestBed.createComponent(GreatBuildingBoostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
