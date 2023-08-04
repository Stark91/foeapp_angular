import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBuildingButtonComponent } from './great-building-button.component';

describe('GreatBuildingButtonComponent', () => {
  let component: GreatBuildingButtonComponent;
  let fixture: ComponentFixture<GreatBuildingButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBuildingButtonComponent]
    });
    fixture = TestBed.createComponent(GreatBuildingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
