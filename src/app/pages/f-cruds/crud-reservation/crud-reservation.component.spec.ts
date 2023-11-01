import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDReservationComponent } from './crud-reservation.component';

describe('CRUDReservationComponent', () => {
  let component: CRUDReservationComponent;
  let fixture: ComponentFixture<CRUDReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CRUDReservationComponent]
    });
    fixture = TestBed.createComponent(CRUDReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
