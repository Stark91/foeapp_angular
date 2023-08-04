import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBuildingSvgComponent } from './great-building-svg.component';

describe('GreatBuildingSvgComponent', () => {
  let component: GreatBuildingSvgComponent;
  let fixture: ComponentFixture<GreatBuildingSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBuildingSvgComponent]
    });
    fixture = TestBed.createComponent(GreatBuildingSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
