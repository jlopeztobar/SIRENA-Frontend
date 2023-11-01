import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDReservationUpdateComponent } from './crud-reservation-update.component';

describe('CRUDReservationUpdateComponent', () => {
  let component: CRUDReservationUpdateComponent;
  let fixture: ComponentFixture<CRUDReservationUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CRUDReservationUpdateComponent]
    });
    fixture = TestBed.createComponent(CRUDReservationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
