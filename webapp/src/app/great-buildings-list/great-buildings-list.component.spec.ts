import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatBuildingsListComponent } from './great-buildings-list.component';

describe('GreatBuildingsListComponent', () => {
  let component: GreatBuildingsListComponent;
  let fixture: ComponentFixture<GreatBuildingsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatBuildingsListComponent]
    });
    fixture = TestBed.createComponent(GreatBuildingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
