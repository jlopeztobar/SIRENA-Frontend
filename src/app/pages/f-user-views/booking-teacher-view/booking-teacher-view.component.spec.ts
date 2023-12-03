import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTeacherViewComponent } from './booking-teacher-view.component';

describe('BookingTeacherViewComponent', () => {
  let component: BookingTeacherViewComponent;
  let fixture: ComponentFixture<BookingTeacherViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingTeacherViewComponent]
    });
    fixture = TestBed.createComponent(BookingTeacherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
