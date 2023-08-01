import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgesListComponent } from './ages-list.component';

describe('AgesListComponent', () => {
  let component: AgesListComponent;
  let fixture: ComponentFixture<AgesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgesListComponent]
    });
    fixture = TestBed.createComponent(AgesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
