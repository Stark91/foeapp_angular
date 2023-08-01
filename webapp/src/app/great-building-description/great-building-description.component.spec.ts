import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBuildingDescriptionComponent } from './great-building-description.component';

describe('GreatBuildingDescriptionComponent', () => {
  let component: GreatBuildingDescriptionComponent;
  let fixture: ComponentFixture<GreatBuildingDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBuildingDescriptionComponent]
    });
    fixture = TestBed.createComponent(GreatBuildingDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
