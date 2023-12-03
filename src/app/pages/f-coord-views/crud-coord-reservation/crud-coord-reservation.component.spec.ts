import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCoordReservationComponent } from './crud-coord-reservation.component';

describe('CrudCoordReservationComponent', () => {
  let component: CrudCoordReservationComponent;
  let fixture: ComponentFixture<CrudCoordReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudCoordReservationComponent]
    });
    fixture = TestBed.createComponent(CrudCoordReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
