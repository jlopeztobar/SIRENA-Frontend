import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBookingTeacherComponent } from './crud-booking-teacher.component';

describe('CrudBookingTeacherComponent', () => {
  let component: CrudBookingTeacherComponent;
  let fixture: ComponentFixture<CrudBookingTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudBookingTeacherComponent]
    });
    fixture = TestBed.createComponent(CrudBookingTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
