import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCoordViewComponent } from './booking-coord-view.component';

describe('BookingCoordViewComponent', () => {
  let component: BookingCoordViewComponent;
  let fixture: ComponentFixture<BookingCoordViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingCoordViewComponent]
    });
    fixture = TestBed.createComponent(BookingCoordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
